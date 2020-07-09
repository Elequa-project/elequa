package org.makewater.elequachallenges.model;

import java.sql.Timestamp;
import java.util.List;
import java.util.ArrayList;

import javax.persistence.*;

import org.hibernate.annotations.CreationTimestamp;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "last_name", nullable = false)
    private String lastName;

    @Column(nullable = false, unique = true)
    private String username;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private int zip;

    @Column(name = "is_admin", nullable = false, columnDefinition = "boolean default false")
    private Boolean isAdmin = false;

    @Column(name = "solution_count", columnDefinition = "int default 0")
    private int solutionCount;

    @Column(name = "create_date", updatable = false)
    @CreationTimestamp
    private Timestamp createDate;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "user")
    private List<Challenge> challenges = new ArrayList<>();

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "user")
    private List<Submission> submissions = new ArrayList<>();

    // Constructors
    public User() {}

    public User(int id) {
        this.id = id;
    }

    public User(int id, String firstName) {
        this.id = id;
        this.firstName = firstName;
    }
    
    public User(int id, String firstName, String lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public User(int id, String firstName, String lastName, String username) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
    }

    public User(int id, String firstName, String lastName, String username, String password) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.password = password;
    }
    
    public User(int id, String firstName, String lastName, String username, String password, String email) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.password = password;
        this.email = email;
    }

    public User(int id, String firstName, String lastName, String username,String password, String email, int zip) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.password = password;
        this.email = email;
        this.zip = zip;
    }

    public User(int id, String firstName, String lastName, String username, String password, String email, int zip, Boolean isAdmin) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.password = password;
        this.email = email;
        this.zip = zip;
        this.isAdmin = isAdmin;
    }

    public User(int id, String firstName, String lastName, String username, String password, String email, int zip, Boolean isAdmin, int solutionCount) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.password = password;
        this.email = email;
        this.zip = zip;
        this.isAdmin = isAdmin;
        this.solutionCount = solutionCount;
    }

    public User(int id, String firstName, String lastName, String username, String password, String email, int zip, Boolean isAdmin, int solutionCount, Timestamp createDate) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.password = password;
        this.email = email;
        this.zip = zip;
        this.isAdmin = isAdmin;
        this.solutionCount = solutionCount;
        this.createDate = createDate;
    }

    public User(String firstName, String lastName, String username, String password, String email, int zip, Boolean isAdmin, int solutionCount, Timestamp createDate) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.password = password;
        this.email = email;
        this.zip = zip;
        this.isAdmin = isAdmin;
        this.solutionCount = solutionCount;
        this.createDate = createDate;
    }

    // Getters and setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getZip() {
        return zip;
    }

    public void setZip(int zip) {
        this.zip = zip;
    }

    public Boolean getIsAdmin() {
        return isAdmin;
    }

    public void setIsAdmin(Boolean isAdmin) {
        this.isAdmin = isAdmin;
    }

    public int getSolutionCount() {
        return solutionCount;
    }

    public void setSolutionCount(int solutionCount) {
        this.solutionCount = solutionCount;
    }

    public Timestamp getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Timestamp createDate) {
        this.createDate = createDate;
    }
}