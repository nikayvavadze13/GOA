def find_outlier(integers):
    result1 = 0
    result = []
    for i in integers:
        if i % 2 == 0:
            result.append(i)
            
    if len(result) == 1:
        for i in result:
            result1 += i
            return result1
    else:
        for i in integers:
            if i not in result:
                return i