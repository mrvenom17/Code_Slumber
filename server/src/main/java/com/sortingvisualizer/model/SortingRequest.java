package com.sortingvisualizer.model;

import lombok.Getter;
import lombok.Setter;
import java.util.List;

@Getter
@Setter
public class SortingRequest {
    private String algorithm;
    private List<Integer> array;
}
