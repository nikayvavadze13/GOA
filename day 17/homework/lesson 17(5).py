def list_with_a(strings):
    a_list = []
    for word in strings:
        if word[0] == "a":
            a_list.append(word)
    return a_list

words = ["aprodite", "kanye", "wolki"]
print(list_with_a(words))