def square_function(numbers):
    num_list = []
    for num in numbers:
        num_list.append(num * num)
    return num_list
print(square_function([2, 4, 3, 5, 6]))