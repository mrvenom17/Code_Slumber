package com.sortingvisualizer.service;

import java.util.List;
import java.util.ArrayList;

import org.springframework.stereotype.Service;

@Service
public class SortingService {
    
    public List<List<Integer>> sort(String algorithm, List<Integer> array) {
        List<List<Integer>> steps = new ArrayList<>();
        
        if ("quick".equalsIgnoreCase(algorithm)) {
            quickSort(array, 0, array.size() - 1, steps);
        } else if ("merge".equalsIgnoreCase(algorithm)) {
            mergeSort(array, 0, array.size() - 1, steps);
        } else if ("selection".equalsIgnoreCase(algorithm)) {
            selectionSort(array, steps);
        }

        return steps; // Return all sorting steps
    }

    private void quickSort(List<Integer> arr, int low, int high, List<List<Integer>> steps) {
        if (low < high) {
            int pi = partition(arr, low, high, steps);
            quickSort(arr, low, pi - 1, steps);
            quickSort(arr, pi + 1, high, steps);
        }
    }

    private int partition(List<Integer> arr, int low, int high, List<List<Integer>> steps) {
        int pivot = arr.get(high);
        int i = low - 1;
        for (int j = low; j < high; j++) {
            if (arr.get(j) < pivot) {
                i++;
                swap(arr, i, j);
                steps.add(new ArrayList<>(arr));
            }
        }
        swap(arr, i + 1, high);
        steps.add(new ArrayList<>(arr));
        return i + 1;
    }

    private void mergeSort(List<Integer> arr, int l, int r, List<List<Integer>> steps) {
        if (l < r) {
            int m = l + (r - l) / 2;
            mergeSort(arr, l, m, steps);
            mergeSort(arr, m + 1, r, steps);
            merge(arr, l, m, r, steps);
        }
    }

    private void merge(List<Integer> arr, int l, int m, int r, List<List<Integer>> steps) {
        List<Integer> left = new ArrayList<>(arr.subList(l, m + 1));
        List<Integer> right = new ArrayList<>(arr.subList(m + 1, r + 1));

        int i = 0, j = 0, k = l;
        while (i < left.size() && j < right.size()) {
            if (left.get(i) <= right.get(j)) {
                arr.set(k++, left.get(i++));
            } else {
                arr.set(k++, right.get(j++));
            }
            steps.add(new ArrayList<>(arr));
        }

        while (i < left.size()) {
            arr.set(k++, left.get(i++));
            steps.add(new ArrayList<>(arr));
        }

        while (j < right.size()) {
            arr.set(k++, right.get(j++));
            steps.add(new ArrayList<>(arr));
        }
    }

    private void selectionSort(List<Integer> arr, List<List<Integer>> steps) {
        int n = arr.size();
        for (int i = 0; i < n - 1; i++) {
            int minIdx = i;
            for (int j = i + 1; j < n; j++) {
                if (arr.get(j) < arr.get(minIdx)) {
                    minIdx = j;
                }
            }
            swap(arr, minIdx, i);
            steps.add(new ArrayList<>(arr));
        }
    }

    private void swap(List<Integer> arr, int i, int j) {
        int temp = arr.get(i);
        arr.set(i, arr.get(j));
        arr.set(j, temp);
    }
}
