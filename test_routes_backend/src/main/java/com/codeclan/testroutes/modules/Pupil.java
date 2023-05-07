package com.codeclan.testroutes.modules;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import org.hibernate.annotations.Cascade;

import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

@Entity
@Table(name = "pupils")
public class Pupil {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    @Column(name = "year_group")
    private YearType yearGroup;

    @ManyToMany
    @JsonIgnoreProperties({"pupils"})
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name = "lessons_pupils",
            joinColumns = {
                    @JoinColumn(
                            name = "pupil_id",
                            nullable = false,
                            updatable = false
                    )
            },
            inverseJoinColumns = {
                    @JoinColumn(
                            name = "lesson_id",
                            nullable = false,
                            updatable = false
                    )
            }
    )
    private List<Lesson> lessons;

    public Pupil(String name, YearType yearGroup) {
        this.name = name;
        this.yearGroup = yearGroup;
        this.lessons = new ArrayList<>();
    }

    public Pupil() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public YearType getYearGroup() {
        return yearGroup;
    }

    public void setYearGroup(YearType yearGroup) {
        this.yearGroup = yearGroup;
    }

    public List<Lesson> getLessons() {
        return lessons;
    }

    public void setLessons(List<Lesson> lessons) {
        this.lessons = lessons;
    }
    public void saveLessonToPupil(Lesson lesson){
        this.lessons.add(lesson);
    }
}
