package org.makewater.elequachallenges.model;

import javax.persistence.*;

@Entity
@Table(name = "medals")
public class Medal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private String name;

    @OneToOne(mappedBy = "medal")
    private Submission submission;

    // Constructors
    public Medal() {
    }

    public Medal(int id) {
        this.id = id;
    }

    public Medal(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public Medal(int id, String name, Submission submission) {
        this.id = id;
        this.name = name;
        this.submission = submission;
    }

    public Medal(String name, Submission submission) {
        this.name = name;
        this.submission = submission;
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

    public Submission getSubmission() {
        return this.submission;
    }

    public void setSubmission(Submission submission) {
        this.submission = submission;
    }

}