package com.example.demodb.service;

import com.example.demodb.entity.Recommend;
import com.example.demodb.entity.Song;
import com.example.demodb.repository.IRecommendRepo;
import com.example.demodb.repository.ISongRepo;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecommendService {
    @Resource
    private IRecommendRepo recommendRepo;
    @Resource
    private ISongRepo songRepo;

    public List<Recommend> findAllByType(Integer type){
        List<Recommend> recList =  recommendRepo.findAllByType(type);
        for(Recommend rec: recList){
            Song song = songRepo.findBySongid(rec.getSongid()); //获取song对象
            rec.setSong(song);
        }
        return recList;
    }

    public Recommend addOrSaveRecommend(Integer songid, Integer type){
        Recommend rec = new Recommend();
        rec.setSongid(songid);
        rec.setType(type);
        return recommendRepo.save(rec);
    }

}
