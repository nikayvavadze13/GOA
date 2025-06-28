
a = 2000000 
r = 1 / 2.5 
n = 26 


total_height = a * (1 - r**n) / (1 - r)


total_height_rounded = round(total_height, 3)

total_height_rounded
