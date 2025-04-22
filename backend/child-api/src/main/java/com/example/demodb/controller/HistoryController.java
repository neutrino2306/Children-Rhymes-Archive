package com.example.demodb.controller;

import com.example.demodb.entity.History;
import com.example.demodb.entity.Love;
import com.example.demodb.service.HistoryService;
import jakarta.annotation.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class HistoryController {
    @Resource
    private HistoryService historyService;

    @PostMapping("/HistoryController/findAllHistoryByUserid")
    @CrossOrigin
    public List<History> findAllHistoryByUserid(@RequestParam Integer userid){ //根据type展示推荐歌单(含song对象
        List<History> historyList = historyService.findAllByUserid(userid);
        if(historyList != null){
            return new ResponseEntity<>(historyList, HttpStatus.OK).getBody();
        }else{
            return new ResponseEntity<>(historyList, HttpStatus.NOT_FOUND).getBody();
        }
    }

    @PostMapping("/HistoryController/addHistorySong")
    @CrossOrigin
    public History addOrSaveRecSong(@RequestParam Integer songid, @RequestParam Integer userid){
        return historyService.addHistoryByUserid(songid, userid); //返回空,说明add失败
    }

    @PostMapping("/HistoryController/deleteHistorySongBySongid")
    @CrossOrigin
    public int deleteHistorySongBySongid(@RequestParam Integer songid, @RequestParam Integer userid){
        return historyService.deleteBySongidAndUserid(songid, userid);
    }
}
