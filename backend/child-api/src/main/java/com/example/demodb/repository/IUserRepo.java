package com.example.demodb.repository;

import com.example.demodb.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IUserRepo extends JpaRepository<User, Integer> {

    public User findByUsernameAndPassword(String username, String pw);

    //    @Query("select count(*) from User user where user.Id= ?1")
    //:)  这里count方法, 数id等于?的有多少行, 这里的count值, 有语义, 也就是说, count=0, 说明数据表中, 没有这个用户 , 如果count=1, 说明有这个用户.而且count的值在0 1 之间
    public User findByUsername(String username);
    public User save(User user);

}