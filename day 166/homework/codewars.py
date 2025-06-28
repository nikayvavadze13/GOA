def divisible_by(numbers, divisor):
    result = []
    for i in numbers:
        if i % divisor == 0:
            result.append(i)
    return result