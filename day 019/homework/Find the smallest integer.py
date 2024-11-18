def find_smallest_int(arr):
    smallest_int = arr[0]
    for num in arr:
        if smallest_int > num:
            smallest_int = num
    return smallest_int