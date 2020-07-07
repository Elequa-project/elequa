package org.makewater.elequachallenges.model;

import java.util.List;
import java.util.ArrayList;

import javax.persistence.*;

@Entity
@Table(name = "categories")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private String name;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "category")
    private List<Challenge> challenges = new ArrayList<>();

    // Constuctors
    public Category() {
    }

    public Category(int id) {
        this.id = id;
    }

    public Category(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public Category(int id, String name, List<Challenge> challenges) {
        this.id = id;
        this.name = name;
        this.challenges = challenges;
    }

    public Category(String name, List<Challenge> challenges) {
        this.name = name;
        this.challenges = challenges;
    }

    // Getters and setters
    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Challenge> getChallenges() {
        return this.challenges;
    }

    public void setChallenges(List<Challenge> challenges) {
        this.challenges = challenges;
    }

}