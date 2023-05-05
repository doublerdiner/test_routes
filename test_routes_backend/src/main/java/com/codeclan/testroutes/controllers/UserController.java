package com.codeclan.testroutes.controllers;

import com.codeclan.testroutes.modules.User;
import com.codeclan.testroutes.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class UserController {
    @Autowired
    UserRepository userRepository;

    @GetMapping(value = "/users")
    public ResponseEntity<List<User>> getAllUsers(){
        return new ResponseEntity<>(userRepository.findAll(), HttpStatus.OK);
    }
    @GetMapping(value = "/users/{id}")
    public ResponseEntity<Optional<User>> getUser(
            @PathVariable Long id
    ){
        return new ResponseEntity<>(userRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/users")
    public ResponseEntity<User> saveUser(
            @RequestBody User user
    ){
        return new ResponseEntity<>(userRepository.save(user), HttpStatus.CREATED);
    }

    @PutMapping(value = "/users/{id}")
    public ResponseEntity<User> updateUser(
            @PathVariable Long id,
            @RequestBody User user
    ){
        User newUser = userRepository.findById(id).get();
        newUser.setName(user.getName());
        newUser.setAge(user.getAge());
        userRepository.save(newUser);
        return new ResponseEntity<>(newUser, HttpStatus.ACCEPTED);
    }
    @DeleteMapping(value = "/users/{id}")
    public ResponseEntity<Long> deleteUser(
            @PathVariable Long id
    ){
        userRepository.deleteById(id);
        return new ResponseEntity<>(id, HttpStatus.OK);
    }
}
