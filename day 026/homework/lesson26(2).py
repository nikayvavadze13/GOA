def manual_max(num):
    number = num[0]
    for i in num:
        if number < i:
            number = i
    return number
print(manual_max([4, 2, 3, 9]))