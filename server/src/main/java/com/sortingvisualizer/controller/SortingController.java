package com.sortingvisualizer.controller;

import com.example.sortingvisualizer.model.SortingRequest;
import com.example.sortingvisualizer.services.SortingService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/sort") 
public class SortingController {
    private final SortingService sortingService;

    public SortingController(SortingService sortingService) {
        this.sortingService = sortingService;
    }

   
    @GetMapping("/test")
    public ResponseEntity<String> testEndpoint() {
        return ResponseEntity.ok("Sorting API is running!");
    }

    
    @PostMapping("/process") 
    public ResponseEntity<List<List<Integer>>> sort(@RequestBody SortingRequest request) {
        List<List<Integer>> sortingSteps = sortingService.sort(request.getAlgorithm(), request.getArray());
        return ResponseEntity.ok(sortingSteps);
    }
}
