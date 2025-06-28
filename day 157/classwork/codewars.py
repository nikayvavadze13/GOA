def sum_dig_pow(a, b):
    result = []
    for num in range(a, b + 1):
        digits = list(map(int, str(num)))
        total = sum(d ** (i + 1) for i, d in enumerate(digits))
        if total == num:
            result.append(num)
    return result
