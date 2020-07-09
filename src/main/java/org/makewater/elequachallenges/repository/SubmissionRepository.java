package org.makewater.elequachallenges.repository;

import org.makewater.elequachallenges.model.Submission;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SubmissionRepository extends JpaRepository<Submission, Integer> {
    Submission findById(int id);
}
