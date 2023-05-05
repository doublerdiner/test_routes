package com.codeclan.testroutes.components;

import com.codeclan.testroutes.modules.User;
import com.codeclan.testroutes.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {
    @Autowired
    private UserRepository userRepository;

    public DataLoader() {
    }
    public void run(ApplicationArguments args){
        User user = new User("Chris", 34);
        User user2 = new User("Aimi", 36);
        User user3 = new User("Jim", 3);
        userRepository.save(user);
        userRepository.save(user2);
        userRepository.save(user3);
    }
}
