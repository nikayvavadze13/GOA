def filtring_list(numbers):
    filtered_list = []
    for num in numbers:
        if num % 4 == 0:
            filtered_list.append(num)
    return filtered_list

print(filtring_list([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]))