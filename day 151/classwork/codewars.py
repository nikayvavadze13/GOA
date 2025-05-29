def even_characters(s):
    if len(s) < 2 or len(s) > 100:
        return "invalid string"
    return [s[i] for i in range(1, len(s), 2)]
