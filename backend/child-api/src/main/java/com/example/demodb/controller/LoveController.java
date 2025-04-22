package com.example.demodb.controller;

import com.example.demodb.entity.Love;
import com.example.demodb.entity.Recommend;
import com.example.demodb.service.LoveService;
import jakarta.annotation.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class LoveController {
    @Resource
    private LoveService loveService;

    @PostMapping("/LoveController/findAllLoveByUserid")
    @CrossOrigin
    public List<Love> findAllLoveByUserid(@RequestParam Integer userid){ //根据type展示推荐歌单(含song对象
        List<Love> loveList = loveService.findAllByUserid(userid);
        if(loveList != null){
            return new ResponseEntity<>(loveList, HttpStatus.OK).getBody();
        }else{
            return new ResponseEntity<>(loveList, HttpStatus.NOT_FOUND).getBody();
        }
    }

    @PostMapping("/LoveController/addLoveSong")
    @CrossOrigin
    public Love addOrSaveRecSong(@RequestParam Integer songid, @RequestParam Integer userid){
        return loveService.addLoveByUserid(songid, userid); //返回空,说明add失败
    }

    @PostMapping("/LoveController/deleteLoveSongBySongid")
    @CrossOrigin
    public int deleteLoveSongBySongid(@RequestParam Integer songid, @RequestParam Integer userid){
        return loveService.deleteBySongidAndUserid(songid, userid);
    }
}
