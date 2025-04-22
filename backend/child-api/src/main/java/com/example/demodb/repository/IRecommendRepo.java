package com.example.demodb.repository;

import com.example.demodb.entity.Recommend;
import com.example.demodb.entity.Song;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IRecommendRepo extends JpaRepository<Recommend, Integer> {

    public List<Recommend> findAllByType(Integer type);


}
