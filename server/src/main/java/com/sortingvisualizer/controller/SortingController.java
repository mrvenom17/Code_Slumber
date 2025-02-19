package com.sortingvisualizer.controller;

import com.sortingvisualizer.model.SortingRequest;
import com.sortingvisualizer.service.SortingService;

import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000") // Allow React to access backend
@RestController
@RequestMapping("/sort")
public class SortingController {

    private final SortingService sortingService;

    public SortingController(SortingService sortingService) {
        this.sortingService = sortingService;
    }

    @PostMapping
    public List<List<Integer>> sort(@RequestBody SortingRequest request) {
        return sortingService.sort(request.getAlgorithm(), request.getArray());
    }
}
