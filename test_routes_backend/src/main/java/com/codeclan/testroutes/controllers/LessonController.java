package com.codeclan.testroutes.controllers;

import com.codeclan.testroutes.modules.Lesson;
import com.codeclan.testroutes.repositories.LessonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
public class LessonController {
    @Autowired
    LessonRepository lessonRepository;
    @CrossOrigin
    @GetMapping(value = "/lessons")
    public ResponseEntity<List<Lesson>> getAllLessons(){
        return new ResponseEntity<>(lessonRepository.findAll(), HttpStatus.OK);
    }
    @GetMapping(value = "/lessons/{id}")
    public ResponseEntity<Optional<Lesson>> getLesson(
            @PathVariable Long id
    ){
        return new ResponseEntity<>(lessonRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/lessons")
    public ResponseEntity<Lesson> saveLesson(
            @RequestBody Lesson lesson
    ){
        return new ResponseEntity<>(lessonRepository.save(lesson), HttpStatus.CREATED);
    }

    @PutMapping(value = "/lessons/{id}")
    public ResponseEntity<Lesson> updateLesson(
            @PathVariable Long id,
            @RequestBody Lesson lesson
    ){
        Lesson newLesson = lessonRepository.findById(id).get();
        newLesson.setName(lesson.getName());
        newLesson.setCapacity(lesson.getCapacity());
        newLesson.setUser(lesson.getUser());
        lessonRepository.save(newLesson);
        return new ResponseEntity<>(newLesson, HttpStatus.ACCEPTED);
    }
    @DeleteMapping(value = "/lessons/{id}")
    public ResponseEntity<Long> deleteLesson(
            @PathVariable Long id
    ){
        lessonRepository.deleteById(id);
        return new ResponseEntity<>(id, HttpStatus.OK);
    }
}
