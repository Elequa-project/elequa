package org.makewater.elequachallenges.repository;

import org.makewater.elequachallenges.model.Medal;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MedalRepository extends JpaRepository<Medal, Integer> {
}
