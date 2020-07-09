package org.makewater.elequachallenges.controller;


import org.makewater.elequachallenges.model.Challenge;
import org.makewater.elequachallenges.model.Medal;
import org.makewater.elequachallenges.repository.ChallengeRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ChallengeController {

    private ChallengeRepository challengeRepo;
    public ChallengeController(ChallengeRepository challengeRepo) {
        this.challengeRepo = challengeRepo;
    }

    @GetMapping(path = "/challenges")
    public List<Challenge> getAllChallenges() {
        return challengeRepo.findAll();
    }

    @GetMapping(path = "/challenge/{id}")
    public Challenge getChallenge(@PathVariable int id) {
        return challengeRepo.findById(id);
    }

    @PostMapping(path = "/challenges")
    public Challenge addChallenge(Challenge challenge){
        challengeRepo.save(challenge);
        return challenge;
    }

    @PutMapping(path = "/challenge/edit/{id}")
    public Challenge editChallenge(Challenge challenge) {
        challengeRepo.save(challenge);
        return challenge;
    }

    @DeleteMapping(path = "/challenges/{id}")
    public void deleteChallenge(@PathVariable int id){
        challengeRepo.deleteById(id);
    }

}
