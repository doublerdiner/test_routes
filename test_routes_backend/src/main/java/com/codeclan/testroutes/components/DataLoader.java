package com.codeclan.testroutes.components;

import com.codeclan.testroutes.modules.Lesson;
import com.codeclan.testroutes.modules.Pupil;
import com.codeclan.testroutes.modules.User;
import com.codeclan.testroutes.modules.YearType;
import com.codeclan.testroutes.repositories.LessonRepository;
import com.codeclan.testroutes.repositories.PupilRepository;
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
    @Autowired
    private PupilRepository pupilRepository;

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

        Pupil pupil = new Pupil("Kim", YearType.THREE);
        Pupil pupil2 = new Pupil("Nick", YearType.TWO);
        Pupil pupil3 = new Pupil("Jan", YearType.TWO);
        Pupil pupil4 = new Pupil("Gus", YearType.THREE);
        Pupil pupil5 = new Pupil("Lynne", YearType.FIVE);
        Pupil pupil6 = new Pupil("Ian", YearType.FIVE);
        Pupil pupil7 = new Pupil("Jean", YearType.SIX);
        lessonRepository.save(lesson);
        lessonRepository.save(lesson2);
        lessonRepository.save(lesson3);

        lesson.savePupilToLesson(pupil);
        lesson.savePupilToLesson(pupil4);
        lesson2.savePupilToLesson(pupil2);
        lesson2.savePupilToLesson(pupil3);
        lesson3.savePupilToLesson(pupil7);
        pupil.saveLessonToPupil(lesson);
        pupil.saveLessonToPupil(lesson2);
        pupil4.saveLessonToPupil(lesson);
        pupil2.saveLessonToPupil(lesson2);
        pupil3.saveLessonToPupil(lesson2);
        pupil7.saveLessonToPupil(lesson3);
        pupilRepository.save(pupil);
        pupilRepository.save(pupil2);
        pupilRepository.save(pupil3);
        pupilRepository.save(pupil4);
        pupilRepository.save(pupil5);
        pupilRepository.save(pupil6);
        pupilRepository.save(pupil7);




    }
}
