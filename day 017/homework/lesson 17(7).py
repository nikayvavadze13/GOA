def length_list(strings):
    length_list = []
    for length in strings:
        length_list.append(len(length))
    return(length_list)

print(length_list(["nika", "erekle", "goa"]))