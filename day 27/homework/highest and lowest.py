def high_and_low(numbers):
    return " ".join(i(numbers.split(), key = int)for i in (max, min))