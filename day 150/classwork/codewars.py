def billboard(name, price=30):
    result = 0
    for i in name:
        result+=price
    return result