
# def square_digits(num):
#     res_str = ""
#     num_str = str(num)
#     for i in num_str:
#         res_str += str(int(i)**2)
#     return int(res_str)

# 4)




# def get_count(sentence):
#     result = 0
#     for i in sentence:
#         if i in "aeiou":
#             result += 2
#     return result
# print(get_count("yvavadze"))

# def square_digits(num):
#     num = str(num)
#     num = list(num)

#     new_arr = []
#     for i in num:
#         new_arr.append(int(i))
    
#     res_str = ""
#     for i in new_arr:
#         squared = i**2
#         res_str += str(squared)
#     return int(res_str)



# def descending_order(num):
#     num = str(num)
#     num = list(num)

#     new_arr = []
#     for x in num:
#         new_arr.append(int(x))
#     new_arr.sort(reverse = True)

#     res_str = ""
#     for i in new_arr:
#         res_str += str(i)
#     return int(res_str)



# def likes(names):
#     if names == []:
#         return "no one likes this"
#     elif len(names) == 1:
#         return names[0] + " likes this"
#     elif len(names) == 2:
#         return names[0] + " and " + names[1] + " like this"
#     elif len(names) == 3:
#         return names[0] + ", " + names[1] + " and " + names[2] + " like this"
#     else:
#         return names[0] + ", " + names[1] + " and " + str(len(names) -2) + " others like this"