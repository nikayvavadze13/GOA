def guessBlue(blueStart, redStart, bluePulled, redPulled):
    remaining_blue = blueStart - bluePulled
    remaining_red = redStart - redPulled
    total_remaining = remaining_blue + remaining_red
    return remaining_blue / total_remaining


print(guessBlue(5, 5, 2, 3)) 