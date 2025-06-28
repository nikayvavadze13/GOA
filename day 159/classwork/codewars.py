def solution(s):
    result = ""
    for i in s:
        if i.isupper():
            result += " " + i
        else:
            result+= i
    return result
    