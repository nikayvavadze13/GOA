def remove_exclamation_marks(s):
    result = ""
    for i in s:
        if i != "!":
            result += i
    return result