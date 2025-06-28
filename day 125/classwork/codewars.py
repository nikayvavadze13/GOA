def similarity(a, b):
    i, j = 0, 0
    intersection_count = 0
    while i < len(a) and j < len(b):
        if a[i] < b[j]:
            i += 1
        elif a[i] > b[j]:
            j += 1
        else:  
            intersection_count += 1
            i += 1
            j += 1
    union_count = len(a) + len(b) - intersection_count
    return intersection_count / union_count
a = [1, 2, 4, 6, 7]
b = [2, 3, 4, 7]

print(similarity(a, b)) 