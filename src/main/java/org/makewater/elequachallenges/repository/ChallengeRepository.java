package org.makewater.elequachallenges.repository;

import org.makewater.elequachallenges.model.Challenge;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChallengeRepository extends JpaRepository<Challenge, Integer> {

}
