def count_positives_sum_negatives(arr):
    if not arr:
        return []
    
    count_pos = sum(1 for x in arr if x > 0)
    sum_neg = sum(x for x in arr if x < 0)
    
    return [count_pos, sum_neg]
