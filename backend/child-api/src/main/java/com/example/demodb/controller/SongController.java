package com.example.demodb.controller;

import com.example.demodb.entity.Song;
import com.example.demodb.service.SongService;
import jakarta.annotation.Resource;
import jakarta.persistence.criteria.CriteriaBuilder;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class SongController {
    @Resource
    private SongService songService;

    @PostMapping("/SongController/findAllBySearchContains")
    @CrossOrigin
    public List<Song> findAllBySearchContains(@RequestParam("search") String search){ //貌似, pathvariable 不能有中文
        List<Song> songList = songService.findAllBySongnameOrSingerContains(search);
        if(songList != null){
            return new ResponseEntity<>(songList, HttpStatus.OK).getBody();
        }else{
            return new ResponseEntity<>(songList, HttpStatus.NOT_FOUND).getBody();
        }


    }

    @PostMapping("/SongController/findAllSongByStyle")
    @CrossOrigin
    public List<Song> findAllSongByStyle(@RequestParam Integer style){
        List<Song> songList = songService.findAllByStyle(style);
        if(songList != null){
            return new ResponseEntity<>(songList, HttpStatus.OK).getBody();
        }else{
            return new ResponseEntity<>(songList, HttpStatus.NOT_FOUND).getBody();
        }
    }


    @PostMapping("/SongController/addOrSaveSong")
    @CrossOrigin
    public Song addOrSaveSong(@RequestParam("name") String name,
                              @RequestParam("singer") String singer,
                              @RequestParam("url") String url,
                              @RequestParam("pic") String pic,
                              @RequestParam("lrc") String lrc,
                              @RequestParam("style") Integer style){
        return songService.addOrSaveSong(name,singer,url,pic,lrc,style);
    }

}