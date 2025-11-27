---
title: 'Solving the Two Sum Problem'
date: '2023-11-15'
excerpt: 'A detailed walkthrough of the classic Two Sum algorithm problem using a hash map for O(n) time complexity.'
category: 'Algorithm Problem Solving'
---

## Problem Statement

Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

## Approach: Hash Map

The most efficient way to solve this is using a hash map to store the complements.

### Code Implementation

```javascript
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}
```

### Complexity Analysis

- **Time Complexity**: O(n)
- **Space Complexity**: O(n)
