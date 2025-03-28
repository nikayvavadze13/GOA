def find_short(s):
    slist = s.split()
    shortestLength = len(slist[0])
    for item in slist:
        if len(item) < shortestLength:
            shortestLength = len(item)
    return shortestLength