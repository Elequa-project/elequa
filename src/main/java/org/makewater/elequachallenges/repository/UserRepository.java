package org.makewater.elequachallenges.repository;

import org.makewater.elequachallenges.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
    User findById(int id);
}