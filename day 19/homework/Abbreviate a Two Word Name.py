def abbrev_name(name):
    name = name.upper()
    split_name = name.split(" ")
    
    firstname = split_name[0]
    lastname = split_name[1]
    
    result = firstname[0] + "." + lastname[0]
    return result