package com.example.demodb.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Song {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)  //注意这里如果要自增的话, 数据库那别也要先做, 同时设置数据库的utf-8
    Integer songid; // //所以我的建议是, 先做数据库那边的建表, 然后通过apidfox帮你插值好了
    String songname;
    String singer;
    String url;
    String pic;
    String lrc;
    Integer style;//这个字段用来表示歌是什么风格的, 用来实现用户推荐, 其实用户推荐. 和搜索是一个道理,
    //搜索时根据songname来搜索, 推荐, 就是功能根据用户的喜好来搜索, 所以这两个功能都应该在songController实现
}
