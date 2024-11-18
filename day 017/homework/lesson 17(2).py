def filters(word_length):
    filtered_list = []
    for i in word_length:
        if len(i) > 5:
            filtered_list.append(i)
    return filtered_list 

words = ["giorgi", "orangutangi", "anakonda", "gio", "lasha"]
print(filters(words))