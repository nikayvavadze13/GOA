def longest_vowel_streak(text):
    vowels = "aeiou"
    max_seq = ""
    current_seq = ""

    for char in text.lower():
        if char in vowels:
            current_seq += char
            if len(current_seq) > len(max_seq):
                max_seq = current_seq
        else:
            current_seq = ""

    return max_seq if max_seq else "no vowel streak found"
