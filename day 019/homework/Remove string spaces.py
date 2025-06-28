def no_space(x):
    result = ""
    for space in x:
        if space != " ":
            result = result + space
    return result