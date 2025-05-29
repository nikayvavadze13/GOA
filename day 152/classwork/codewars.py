def julies_age(x, y):
    if y == 1:
        raise ValueError("Invalid input: Julie cannot be the same age as her brother.")
    
    brother = x / (y - 1)
    julie = brother + x
    return julie
