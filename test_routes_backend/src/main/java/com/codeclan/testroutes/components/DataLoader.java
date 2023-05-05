package com.codeclan.testroutes.components;

import com.codeclan.testroutes.modules.Lesson;
import com.codeclan.testroutes.modules.User;
import com.codeclan.testroutes.repositories.LessonRepository;
import com.codeclan.testroutes.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private LessonRepository lessonRepository;

    public DataLoader() {
    }
    public void run(ApplicationArguments args){
        User user = new User("Chris", 34);
        User user2 = new User("Aimi", 36);
        User user3 = new User("Jim", 3);
        User user4 = new User("Rua", 11);
        User user5 = new User("Maggie", 30);
        User user6 = new User("Claire", 32);
        userRepository.save(user);
        userRepository.save(user2);
        userRepository.save(user3);
        userRepository.save(user4);
        userRepository.save(user5);
        userRepository.save(user6);
        Lesson lesson = new Lesson("Art & Design", 2, user);
        Lesson lesson2 = new Lesson("History", 1, user);
        Lesson lesson3 = new Lesson("Chemistry", 3, user2);
        lessonRepository.save(lesson);
        lessonRepository.save(lesson2);
        lessonRepository.save(lesson3);
    }
}
