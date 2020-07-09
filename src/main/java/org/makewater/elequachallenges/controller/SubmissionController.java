package org.makewater.elequachallenges.controller;


import org.makewater.elequachallenges.model.Submission;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;
import org.makewater.elequachallenges.repository.SubmissionRepository;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class SubmissionController {

//    @Resource
//    @Qualifier("submissionRepo")
//    SubmissionRepository submissionRepo;

    private SubmissionRepository subRepo;
    public SubmissionController(SubmissionRepository subRepo) {
        this.subRepo = subRepo;
    }

    @GetMapping(path = "/submissions")
    public List<Submission> getAllSubmissions() {
        return subRepo.findAll();

    }

    @PostMapping(path = "/submissions/add")
    public Submission addSubmission(Submission submission){
        subRepo.save(submission);
        return submission;
    }

    @DeleteMapping(path = "/submissions/{id}")
    public void deleteSubmission(@PathVariable int id){
        subRepo.deleteById(id);
    }
}

