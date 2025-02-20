https://chatgpt.com/c/67b5af87-5348-800f-a09d-2a735f4bfc2b

```python

```

## Collections

```python
from collections import defaultdict, Counter
```
## Array

```python
count = [0] * 26 // array of zeros
buckets = [[] for _ in range(len(nums) + 1)]    // array of empty arrays


for i, num in enumerate(nums):
    A.append([num, i])
```
## Strings

```python
place = ord('a')
str.lower()
s.isalnum()
```

## Set

```python
n = set()
n.add(stuff)
n.remove(stuff)
```
## Dictionary

```python
dic = {}
dic[i] = 1 + dic.get(i, 0)
sorted_items = sorted(counter.keys(), key=lambda x: counter[x], reverse=True)       // sorting dictionary according to values

```

## Pointers

```python
i = 0
while i < somthing:
    j = i 
    while j != other:
        // do stuff
```

## Sliding Window

```python
for r in range(len(s)):
    while s[r] in seen:
        seen.remove(s[l])
        l += 1
    

for r in range(len(s)):
    count[s[r]] = 1 + count.get(s[r], 0)
    maxf = max(maxf, count[s[r]])
    while (r - l + 1) - maxf > k:
        count[s[l]] -= 1
        l += 1
    result = max(result, r - l + 1)
```


## Sorting

### Bubble Sort 

Repeatedly swap adjacent elements if they are in the wrong order.

```python 
for i in range(len(nums)):
    swapped = False
    for j in range(len(nums) - i - 1):
        if nums[j] > nums[j + 1]:
            nums[j], nums[j + 1] = nums[j + 1], nums[j]
            swapped = True
        if not swapped:
            break
```

### Selection Sort 

Select the smallest element and swap it to its correct position.

```python 
for i in range(len(nums)):
    min_index = i 
    for j in range(i + 1, len(nums)):
        if nums[j] < nums[min_index]:
            min_index = j
    nums[i], nums[min_index] = nums[min_index], nums[i]
```

### Insertion Sort 

Insert each element into its correct position in the sorted part.

```python
for i in range(1, len(nums)):
    key = nums[i]
    j = i - 1
    while j >= 0 and key < nums[j]:
        nums[j + 1] = nums[j]
        j -= 1
    nums[j + 1] = key
```

### Merge Sort 

Recursively divide the array into two halves, sort them, and merge.

```python 
def merge_sort(nums):
    if len(nums) <= 1:
        return nums
    mid = len(nums) // 2
    left = merge_sort(nums[:mid])
    right = merge_sort(nums[mid:])
    return merge(left, right)
def merge(left, right):
    sorted_array = []
    l = r = 0
    while l < len(left) and r < len(right):
        if left[l] < right[r]:
            sorted_array.append(left[l])
            l += 1
        if right[r] < left[l]:
            sorted_array.append(right[r])
            r += 1
    sorted_array.extend(left[l:])
    sorted_array.exted(right[r:])
    return sorted_array
```

### Quick Sort 

Choose a pivot, partition the array, and sort each part.

```python 


```

## Design Patterns

- Creational Patten
  - Factory Classes
    - se a factory to instantiate objects like ordering a burger, specifying the type of object you want without worrying about its creation details.
  - Builder Methods
    - For more control over object creation, use the builder pattern. It involves individual methods for adding components and a build method to create the final object.
  - Singleton
    - Ensure a class has only one instance. Useful for maintaining a single copy of application state with a static method to retrieve the instance.
- Behavioural
  - Observer/PubSub
    - Implement real-time updates by having a subject (e.g., YouTube channel) maintain a list of subscribers and notify them of events. Subscribers implement an interface for event handling.
  - Iterator
    - Define a pattern for iterating through values in an object. Useful for simple arrays or more complex structures like linked lists.
  - Strategy
    - Modify or extend a class's behavior without changing it directly. Define strategies (e.g., filters) as implementations and pass them to the class at runtime.
- Structural
  - Adaptor
  - Facade