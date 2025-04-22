package com.example.demodb.repository;

import com.example.demodb.entity.Love;
import com.example.demodb.entity.Song;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ILoveRepo extends JpaRepository<Love, Integer> {

    public List<Love> findAllByUserid(Integer userid);//这个方法不用谢, 本来就有
// add 方法
    @Transactional
    public void deleteBySongidAndUserid(Integer songid, Integer userid);//这里选择songid删除, 是因为 loveid不是从1开始的, 我不喜欢:)
    public int countBySongidAndUserid(Integer songid, Integer userid);
    public int countByUserid(Integer userid);

}
