package org.makewater.elequachallenges.model;

import java.sql.Timestamp;

import javax.persistence.*;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

@Entity
@Table(name = "challenges")
public class Challenge {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private String name;

    @Column
    private String body;

    @Column(name = "create_date", updatable = false)
    @CreationTimestamp
    private Timestamp createDate;

    @Column(name = "modified_date")
    @UpdateTimestamp
    private Timestamp modifiedDate;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "cat_id")
    private Category category;

    // Constructors
    public Challenge() {
    }

    public Challenge(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public Challenge(int id, String name, String body) {
        this.id = id;
        this.name = name;
        this.body = body;
    }

    public Challenge(int id, String name, String body, Timestamp createDate) {
        this.id = id;
        this.name = name;
        this.body = body;
        this.createDate = createDate;
    }

    public Challenge(int id, String name, String body, Timestamp createDate, Timestamp modifiedDate) {
        this.id = id;
        this.name = name;
        this.body = body;
        this.createDate = createDate;
        this.modifiedDate = modifiedDate;
    }
    public Challenge(int id, String name, String body, Timestamp createDate, Timestamp modifiedDate, User user) {
        this.id = id;
        this.name = name;
        this.body = body;
        this.createDate = createDate;
        this.modifiedDate = modifiedDate;
        this.user = user;
    }

    public Challenge(int id, String name, String body, Timestamp createDate, Timestamp modifiedDate, User user, Category category) {
        this.id = id;
        this.name = name;
        this.body = body;
        this.createDate = createDate;
        this.modifiedDate = modifiedDate;
        this.user = user;
        this.category = category;
    }

    public Challenge(String name, String body, Timestamp createDate, Timestamp modifiedDate, User user, Category category) {
        this.name = name;
        this.body = body;
        this.createDate = createDate;
        this.modifiedDate = modifiedDate;
        this.user = user;
        this.category = category;
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

    public String getBody() {
        return this.body;
    }

    public void setBody(String body) {
        this.body = body;
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

    public Category getCategory() {
        return this.category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

}

