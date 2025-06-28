def find_it(seq):
    result = 0
    for i in seq:
        result ^= i
    return result