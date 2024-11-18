# first way
def sum_array(a):
    result = 0
    for num in a:
        result = result + num
    return result

# second way(easier one)
def sum_array(a):
    return sum(a)