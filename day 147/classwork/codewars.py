import math

def name_to_matrix(name):
    if len(name) == 0:
        return "name must be at least one letter"
    
    length = len(name)
    size = math.ceil(math.sqrt(length))  # Smallest n such that n*n >= length
    padded_name = name.ljust(size * size, '.')  # Pad with '.' to fill the matrix

    matrix = [list(padded_name[i*size:(i+1)*size]) for i in range(size)]
    return matrix
