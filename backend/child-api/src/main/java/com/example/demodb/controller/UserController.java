package com.example.demodb.controller;

import com.example.demodb.entity.User;
import com.example.demodb.service.UserService;
import jakarta.annotation.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
public class UserController {
    @Resource
    private UserService userService;

    @PostMapping("/UserController/findByUsername")
    @CrossOrigin
    public ResponseEntity<User> findUser(@RequestParam("username") String username){
        User user = userService.findByUsername(username);
        if(user!=null){
            return new ResponseEntity<>(user,HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }

    @PostMapping("/UserController/findByUsernameAndPassword")
    @CrossOrigin
    public ResponseEntity<User> checkUser(@RequestParam("username") String username,
                                          @RequestParam("password") String password){
        User user = userService.findByUsernameAndPassword(username, password);
        if(user != null){
            return new ResponseEntity<>(user, HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }

    //借口原名为UserController/saveUser
    @PostMapping("/UserController/addUser")
    @CrossOrigin
    public User saveUser(@RequestParam("username") String username,
                         @RequestParam("password") String password,
                         @RequestParam("sex") Integer sex,
                         @RequestParam(required=false) String userimg){
        return userService.addUser(username, password, sex, userimg);
    }
}