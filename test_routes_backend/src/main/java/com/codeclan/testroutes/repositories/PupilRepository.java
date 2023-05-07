package com.codeclan.testroutes.repositories;

import com.codeclan.testroutes.modules.Pupil;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PupilRepository extends JpaRepository<Pupil, Long> {
}
