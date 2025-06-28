def capitalize(string, indices):
    chars = list(string)
    for index in indices:
        if 0 <= index < len(chars):
            chars[index] = chars[index].upper()
    return ''.join(chars)


