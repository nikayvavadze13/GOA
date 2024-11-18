def get_middle(s):
    result = len(s)
    if (result % 2 == 0):
        return s[int(result / 2-1) : int(result / 2+1)]
    return s[int(result / 2)]