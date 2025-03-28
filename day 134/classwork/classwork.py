def comfortable_word(word):
    left_hand = set("qwertasdfgzxcvb")
    right_hand = set("yuiophjklnm")

    if not word:
        return False

    is_left = word[0] in left_hand

    for char in word[1:]:
        if (char in left_hand) == is_left:
            return False
        is_left = not is_left

    return True

