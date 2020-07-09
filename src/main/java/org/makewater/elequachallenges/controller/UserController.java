package org.makewater.elequachallenges.controller;

import java.util.List;

import org.makewater.elequachallenges.model.User;
import org.makewater.elequachallenges.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class UserController {
    // Dependency injection
    private UserRepository userRepo;
    private PasswordEncoder passwordEncoder;

    public UserController(UserRepository userRepo, PasswordEncoder passwordEncoder) {
        this.userRepo = userRepo;
        this.passwordEncoder = passwordEncoder;
    }

    // Display all users
    @GetMapping("/users")
    public List<User> findAllUsers() {
        return userRepo.findAll();
    }

    // Add a new user -- user registration
    @PostMapping("/user/add")
    public User addUser(@RequestBody User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        userRepo.save(user);

        return user;
    }

    // Display single user by ID -- user profile
    @GetMapping("/user/{id}")
    public User findSingleUser(@PathVariable int id) {
        return userRepo.findById(id);
    }

    // Edit user information/profile
    @PutMapping("/user/edit/{id}")
    public User editUser(@RequestBody User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        userRepo.save(user);

        return user;
    }

    // Delete user
    @DeleteMapping("/user/delete/{id}")
    public void deleteEmployee(@PathVariable int id) {
        User user = findSingleUser(id);

        userRepo.delete(user);
    }
}