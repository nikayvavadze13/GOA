def square_digits(num):
    num = str(num)
    num = list(num)
    new_arr = []
    for i in num:
        new_arr.append(int(i))
    res_str = ""
    for i in new_arr:
        squared = i ** 2
        res_str += str(squared)
    return int(res_str)