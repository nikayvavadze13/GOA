def manual_reduce(num):
    copied_list = []
    for i in num:
        copied_list.append(i)
    return copied_list, num

print(manual_reduce([2, 4, 5]))
