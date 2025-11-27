---
title: 'Two Sum 문제 풀이'
date: '2023-11-15'
excerpt: 'Hash Map을 사용하여 O(n) 시간 복잡도로 고전적인 Two Sum 알고리즘 문제를 해결하는 방법을 자세히 알아봅니다.'
category: 'Algorithm Problem Solving'
---

## 문제 설명

정수 배열 `nums`와 정수 `target`이 주어졌을 때, 두 숫자의 합이 `target`이 되는 인덱스를 반환하세요.

## 접근 방식: Hash Map

이 문제를 해결하는 가장 효율적인 방법은 보수(complements)를 저장하기 위해 Hash Map을 사용하는 것입니다.

### 코드 구현

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

### 복잡도 분석

- **Time Complexity**: O(n)
- **Space Complexity**: O(n)
