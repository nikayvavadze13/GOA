def order(s):
    result1 = ""
    result = []
    splitted_s = s.split(" ")
    length_split = len(splitted_s)
    for i in range(1, length_split+1):
        for x in splitted_s:
            if str(i) in x:
                result.append(x)
                
    
    return " ".join(result)