def length_strings(strings):
    new_list = []
    for length in strings:
        new_list.append(len(length))
    return new_list

print(length_strings(["nikolozi", "nika", "nikusha", "niko", "nikushela"]))