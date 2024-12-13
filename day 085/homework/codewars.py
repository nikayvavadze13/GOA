def xo(s):
    x = 0
    x1 = 0
    for i in s:
        if i == "x":
            x += 1
        elif i == "X":
            x += 1
    for r in s:
        if r == "o" :
            x1 += 1
        elif r == "O":
            x1 += 1
    if x == x1:
        return True
    else:
        return False
    