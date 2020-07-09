package org.makewater.elequachallenges.controller;


import org.makewater.elequachallenges.model.Challenge;
import org.makewater.elequachallenges.model.Medal;
import org.makewater.elequachallenges.repository.MedalRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class MedalController {

    private MedalRepository medalRepo;
    public MedalController (MedalRepository medalRepo){
        this.medalRepo = medalRepo;
    }

    @GetMapping(path = "/medals")
    public List<Medal> getAllMedals() {
        return medalRepo.findAll();
    }

    @GetMapping(path = "/medal/{id}")
    public Medal getMedal(@PathVariable int id) {
        return medalRepo.findById(id);
    }

    @PostMapping(path = "/medals")
    public Medal addMedal(Medal medal){
        medalRepo.save(medal);
        return medal;
    }

    @PutMapping(path = "/submission/edit/{id}")
    public Medal editMedal(Medal medal) {
        medalRepo.save(medal);
        return medal;
    }

    @DeleteMapping(path = "/medals/{id}")
    public void deleteMedal(@PathVariable int id){
        medalRepo.deleteById(id);
    }


}
