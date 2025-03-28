def sum_numbers(numbers):
    list_sum = []
    for num in numbers:
        if num > 10:
            list_sum.append(num)
    return sum(list_sum)

print(sum_numbers([1, 11, 13, 2]))