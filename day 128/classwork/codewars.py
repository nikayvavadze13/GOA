def progressive_concat(s):
    n = len(s)
    mid = n // 2
    result = "".join(f"{s[i]}{s[-i-1]}{i+1}" for i in range(mid))
    return result