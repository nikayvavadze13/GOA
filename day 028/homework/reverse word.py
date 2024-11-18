def reverse_words(text):
    words_list = text.split(" ")
    reversed_words = []
    
    for i in words_list:
        reversed_words.append(i[::-1])
    return " ".join(reversed_words)