package com.example.demodb.repository;

import com.example.demodb.entity.Song;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ISongRepo extends JpaRepository<Song, Integer> {

    public Song findBySongid(Integer songid);

    public List<Song> findAllByStyle(Integer style); //这里为推荐做准备

    public Song findBySongnameAndSinger(String songname, String singer);
    public List<Song> findAllBySongnameContains(String songname);
    public List<Song> findAllBySingerContains(String singer);
}
