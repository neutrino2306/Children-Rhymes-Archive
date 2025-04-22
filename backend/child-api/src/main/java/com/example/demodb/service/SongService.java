package com.example.demodb.service;

import com.example.demodb.entity.Song;
import com.example.demodb.repository.ISongRepo;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SongService {
    @Resource
    private ISongRepo songRepo;

    public List<Song> findAllBySongnameOrSingerContains(String search){
        List<Song> songList = new ArrayList<>();
        songList.addAll(songRepo.findAllBySingerContains(search));
        songList.addAll(songRepo.findAllBySongnameContains(search));
        for (int i = 0; i < songList.size(); i++) { //做去重操作, 防止  singer, songname中含有相同的字段, 重复显示
            for (int j = 0; j < songList.size(); j++) {
                if(i!=j&&songList.get(i)==songList.get(j)) {
                    songList.remove(songList.get(j));
                }
            }
        }
        return songList;
    } //用作搜索
    public List<Song> findAllByStyle(Integer style){ //用作推荐, 思路:接收一个love对象
        // (里面有userid,songid, song内层有style根据这两个字段做文章, 然后返回相应歌曲列表
        return songRepo.findAllByStyle(style);
    }
    public Song addOrSaveSong(String songname,
                              String singer,
                              String url,
                              String pic,
                              String lrc,
                              Integer style){
        if(songRepo.findBySongnameAndSinger(songname, singer)==null){
            Song song = new Song();
            song.setSongname(songname);
            song.setSinger(singer);
            song.setUrl(url);
            song.setPic(pic);
            song.setLrc(lrc);
            song.setStyle(style);
            return songRepo.save(song);
        }
        return null;
    }



}
