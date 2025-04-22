package com.example.demodb.service;

import com.example.demodb.entity.History;
import com.example.demodb.entity.Song;
import com.example.demodb.repository.IHistoryRepo;
import com.example.demodb.repository.ISongRepo;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HistoryService {
    @Resource
    private IHistoryRepo hisotryRepo;
    @Resource
    private ISongRepo songRepo;

    public List<History> findAllByUserid(Integer userid){
        List<History> historyList =  hisotryRepo.findAllByUserid(userid);
        for(History history: historyList){
            Song song = songRepo.findBySongid(history.getSongid()); //获取song对象
            history.setSong(song);
            hisotryRepo.save(history);//首先这个history对象是原有的, 所以这里是save操作, 更改quantity属性
        }
        return historyList;
    }

    public History addHistoryByUserid(Integer songid, Integer userid){
        if(hisotryRepo.countBySongidAndUserid(songid, userid)==0){
            History history = new History();
            history.setSongid(songid);
            history.setUserid(userid);
            int quantity = (int) hisotryRepo.countByUserid(userid); //数History表里面有多少首歌
            return hisotryRepo.save(history);
        }
        return null;
    }

    public int deleteBySongidAndUserid(Integer songid, Integer userid){ //删了之后需要改quantity值, 并输出quantity
        hisotryRepo.deleteBySongidAndUserid(songid, userid);
        return (int)hisotryRepo.countByUserid(userid);
    }
}
