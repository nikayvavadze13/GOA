def encode(string):
    mapping = {'a': '1', 'e': '2', 'i': '3', 'o': '4', 'u': '5'}
    return ''.join(mapping.get(char, char) for char in string)

def decode(string):
    mapping = {'1': 'a', '2': 'e', '3': 'i', '4': 'o', '5': 'u'}
    return ''.join(mapping.get(char, char) for char in string)


