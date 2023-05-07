package com.codeclan.testroutes.controllers;

import com.codeclan.testroutes.modules.Pupil;
import com.codeclan.testroutes.repositories.PupilRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
public class PupilController {
    @Autowired
    PupilRepository pupilRepository;

    @GetMapping(value = "/pupils")
    public ResponseEntity<List<Pupil>> getAllPupils(){
        return new ResponseEntity<>(pupilRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/pupils/{id}")
    public ResponseEntity<Optional<Pupil>> getPupil(
            @PathVariable Long id
    ){
        return new ResponseEntity<>(pupilRepository.findById(id), HttpStatus.OK);
    }
    @PostMapping(value = "/pupils")
    public ResponseEntity<Pupil> savePupil(
            @RequestBody Pupil pupil
    ){
        return new ResponseEntity<>(pupilRepository.save(pupil), HttpStatus.CREATED);
    }
    @PutMapping(value = "/pupils/{id}")
    public ResponseEntity<Pupil> updatePupil(
            @PathVariable Long id,
            @RequestBody Pupil pupil
    ){
        Pupil newPupil = pupilRepository.findById(id).get();
        newPupil.setName(pupil.getName());
        newPupil.setYearGroup(pupil.getYearGroup());
        newPupil.setLessons(pupil.getLessons());
        pupilRepository.save(newPupil);
        return new ResponseEntity<>(newPupil, HttpStatus.ACCEPTED);
    }
    @DeleteMapping(value = "/pupils/{id}")
    public ResponseEntity<Long> deletePupil(
            @PathVariable Long id
    ){
        pupilRepository.deleteById(id);
        return new ResponseEntity<>(id, HttpStatus.OK);
    }
}
