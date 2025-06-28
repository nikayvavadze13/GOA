def two_oldest_ages(ages):
    unique_ages = list(set(ages)) 
    unique_ages.sort()
    return unique_ages[-2:]  
