def scrabble_score(word):
    return sum(dict_scores[char.upper()] for char in word if char.upper() in dict_scores)
