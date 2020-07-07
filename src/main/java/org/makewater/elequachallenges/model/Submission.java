package org.makewater.elequachallenges.model;

import java.sql.Timestamp;

import javax.persistence.*;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

@Entity
@Table(name = "submissions")
public class Submission {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private String body;

    @Column(name = "is_approved", nullable = false)
    private Boolean isApproved = false;

    @Column(name = "is_solution", nullable = false)
    private Boolean isSolution = false;

    @Column(name = "create_date", updatable = false)
    @CreationTimestamp
    private Timestamp createDate;

    @Column(name = "modified_date")
    @UpdateTimestamp
    private Timestamp modifiedDate;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @OneToOne
    @JoinColumn(name = "medal_id")
    private Medal medal;

    // Constructors
    public Submission() {
    }

    public Submission(int id) {
        this.id = id;
    }

    public Submission(int id, String body) {
        this.id = id;
        this.body = body;
    }

    public Submission(int id, String body, Boolean isApproved) {
        this.id = id;
        this.body = body;
        this.isApproved = isApproved;
    }

    public Submission(int id, String body, Boolean isApproved, Boolean isSolution) {
        this.id = id;
        this.body = body;
        this.isApproved = isApproved;
        this.isSolution = isSolution;
    }

    public Submission(int id, String body, Boolean isApproved, Boolean isSolution, Timestamp createDate) {
        this.id = id;
        this.body = body;
        this.isApproved = isApproved;
        this.isSolution = isSolution;
        this.createDate = createDate;
    }

    public Submission(int id, String body, Boolean isApproved, Boolean isSolution, Timestamp createDate, Timestamp modifiedDate) {
        this.id = id;
        this.body = body;
        this.isApproved = isApproved;
        this.isSolution = isSolution;
        this.createDate = createDate;
        this.modifiedDate = modifiedDate;
    }

    public Submission(int id, String body, Boolean isApproved, Boolean isSolution, Timestamp createDate, Timestamp modifiedDate, User user) {
        this.id = id;
        this.body = body;
        this.isApproved = isApproved;
        this.isSolution = isSolution;
        this.createDate = createDate;
        this.modifiedDate = modifiedDate;
        this.user = user;
    }

    public Submission(int id, String body, Boolean isApproved, Boolean isSolution, Timestamp createDate, Timestamp modifiedDate, User user, Medal medal) {
        this.id = id;
        this.body = body;
        this.isApproved = isApproved;
        this.isSolution = isSolution;
        this.createDate = createDate;
        this.modifiedDate = modifiedDate;
        this.user = user;
        this.medal = medal;
    }

    public Submission(String body, Boolean isApproved, Boolean isSolution, Timestamp createDate, Timestamp modifiedDate, User user, Medal medal) {
        this.body = body;
        this.isApproved = isApproved;
        this.isSolution = isSolution;
        this.createDate = createDate;
        this.modifiedDate = modifiedDate;
        this.user = user;
        this.medal = medal;
    }

    // Getters and setters
    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getBody() {
        return this.body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public Boolean isIsApproved() {
        return this.isApproved;
    }

    public Boolean getIsApproved() {
        return this.isApproved;
    }

    public void setIsApproved(Boolean isApproved) {
        this.isApproved = isApproved;
    }

    public Boolean isIsSolution() {
        return this.isSolution;
    }

    public Boolean getIsSolution() {
        return this.isSolution;
    }

    public void setIsSolution(Boolean isSolution) {
        this.isSolution = isSolution;
    }

    public Timestamp getCreateDate() {
        return this.createDate;
    }

    public void setCreateDate(Timestamp createDate) {
        this.createDate = createDate;
    }

    public Timestamp getModifiedDate() {
        return this.modifiedDate;
    }

    public void setModifiedDate(Timestamp modifiedDate) {
        this.modifiedDate = modifiedDate;
    }

    public User getUser() {
        return this.user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Medal getMedal() {
        return this.medal;
    }

    public void setMedal(Medal medal) {
        this.medal = medal;
    }
    
}