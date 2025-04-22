package com.example.demodb.service;

import com.example.demodb.entity.Love;
import com.example.demodb.entity.Song;
import com.example.demodb.repository.ILoveRepo;
import com.example.demodb.repository.ISongRepo;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LoveService {
    @Resource
    private ILoveRepo loveRepo;
    @Resource
    private ISongRepo songRepo;

    public List<Love> findAllByUserid(Integer userid){
        List<Love> loveList =  loveRepo.findAllByUserid(userid);
        for(Love love: loveList){
            Song song = songRepo.findBySongid(love.getSongid()); //获取song对象
            love.setSong(song);
            love.setLovequantity((int)loveRepo.countByUserid(userid)); //这里需要重新设置一下, 因为之前设置的quanti值未更新
            loveRepo.save(love);//首先这个love对象是原有的, 所以这里是save操作, 更改quantity属性
        }
        return loveList;
    }

    public Love addLoveByUserid(Integer songid, Integer userid){
        if(loveRepo.countBySongidAndUserid(songid, userid)==0){
            Love love = new Love();
            love.setSongid(songid);
            love.setUserid(userid);
            int quantity = (int) loveRepo.countByUserid(userid); //数Love表里面有多少首歌
            love.setLovequantity(quantity+1); //得加上自己
            return loveRepo.save(love);
        }
        return null;
    }

    public int deleteBySongidAndUserid(Integer songid, Integer userid){ //删了之后需要改quantity值, 并输出quantity
        loveRepo.deleteBySongidAndUserid(songid, userid);
        return (int)loveRepo.countByUserid(userid);
    }


}
