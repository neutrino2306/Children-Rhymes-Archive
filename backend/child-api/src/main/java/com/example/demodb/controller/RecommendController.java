package com.example.demodb.controller;

import com.example.demodb.entity.Recommend;
import com.example.demodb.entity.Song;
import com.example.demodb.service.RecommendService;
import com.example.demodb.service.SongService;
import jakarta.annotation.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class RecommendController {
    @Resource
    private RecommendService recommendService;

    @GetMapping("/RecommendController/findAllRecSongByType/{type}")
    @CrossOrigin
    public List<Recommend> findAllRecSongByType(@PathVariable Integer type){ //根据type展示推荐歌单(含song对象
        List<Recommend> recList = recommendService.findAllByType(type);
        if(recList != null){
            return new ResponseEntity<>(recList, HttpStatus.OK).getBody();
        }else{
            return new ResponseEntity<>(recList, HttpStatus.NOT_FOUND).getBody();
        }
    }

    @GetMapping("/RecommendController/addOrSaveRecSong/{songid}/{type}")
    @CrossOrigin
    public Recommend addOrSaveRecSong(@PathVariable Integer songid,
                              @PathVariable Integer type){
        return recommendService.addOrSaveRecommend(songid, type);
    }

}
