def name_shuffler(str_):
    x = str_.split(" ")
    y = x[::-1]
    y[0] += " "
    return y[0] + y[1]
    