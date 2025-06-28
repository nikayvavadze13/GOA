def manual_min(num):
    number = num[0]
    for i in num:
        if number > i:
            number = i
    return number

print(manual_min([2, 1, 9, 7]))