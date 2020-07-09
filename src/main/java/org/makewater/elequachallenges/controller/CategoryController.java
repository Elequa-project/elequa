package org.makewater.elequachallenges.controller;

import org.makewater.elequachallenges.model.Category;
import org.makewater.elequachallenges.model.Challenge;
import org.makewater.elequachallenges.repository.CategoryRepository;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/category")
public class CategoryController {
    private final CategoryRepository categoryRepository;

    public CategoryController(CategoryRepository categoryRepository){
        this.categoryRepository = categoryRepository;
    }

    // Adding a Category
    @GetMapping("/category/add")
    public Category addCategory(String name){
        Category category = new Category();
        List<Challenge> challenges = new ArrayList<>();
        category.setName(name);
        category.setChallenges(challenges);
        categoryRepository.save(category);
        return category;
    }

    //Show all Categories
    @GetMapping("/category/all")
    public List<Category> showAllCategories(){
        return categoryRepository.findAll();
    }

    // Show a single Category
    @GetMapping("/category/show")
    public Category singleCategory(int id){
        return categoryRepository.getOne(id);
    }

    // Deleting a Category
    @DeleteMapping("/category/delete")
    public void deleteCategory(int id){
        Category category = categoryRepository.getOne(id);
        categoryRepository.delete(category);
    }

    // Editing a Category
    @PutMapping("/category/edit}")
    public Category editCategory(@RequestBody Category category){
        categoryRepository.save(category);
        return category;
    }

}
