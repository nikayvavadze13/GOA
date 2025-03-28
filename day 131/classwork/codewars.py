def tower_builder(n_floors):
    result = []
    for i in range(n_floors):
        stars = "*" * (2 * i + 1)
        padding = " " * (n_floors - i - 1)
        result.append(padding+stars+padding)
    return result