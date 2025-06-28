def unique_in_order(sequence):
    if not sequence:
        return []
    
    x = [sequence[0]]
    for i in sequence[1:]:
        if i!=x[-1]:
            x.append(i)
    return x