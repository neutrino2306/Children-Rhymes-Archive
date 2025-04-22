package com.example.demodb.service;

import com.example.demodb.entity.User;
import com.example.demodb.repository.IUserRepo;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Resource
    private IUserRepo userRepo;

    public User findByUsername(String username){
        return userRepo.findByUsername(username);
    }

    public User findByUsernameAndPassword(String username, String pw){
        return userRepo.findByUsernameAndPassword(username,pw);
    }

    public User addUser(String username, String password, Integer sex, String userimg){
        //下面的代码其实可以交给service做(额外增加一个createUser方法接收参数即可)
        if(userRepo.findByUsername(username)==null){ //表明没有找到该用户, 可以add
            User user = new User();
            //这里虽然只接受4个参数, 但是如果要传递给userService的话, 需要所有东西都来set一遍之后, 再传user实例
            user.setUsername(username);
            user.setPassword(password);
            user.setUsersex(sex);
            if(userimg != null){
                user.setUserimg(userimg);
            }
            return userRepo.save(user);
        }
        return null;

    }


}
