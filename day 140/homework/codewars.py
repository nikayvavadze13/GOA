def get_count(sentence):
    result = 0
    for i in sentence:
        if i in "aeiou":
            result += 1
    return result