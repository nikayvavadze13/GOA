# def count_evens(numbers_list):
#     count = 0
    
#     for number in numbers_list:
#         if number % 2 == 0:
#             count = count + 1
    
#     return count

# print(count_evens([1,2,3,4,5,6]))


# def replace_even_indexes(word,replace_char):
#     changed_word = ''
    
#     for index in range(len(word)):
#         if index % 2 == 0:
#             changed_word = changed_word + replace_char
#         else:
#             changed_word = changed_word + word[index]
            
#     return changed_word


# print(replace_even_indexes("lukaa", "k"))


# def find_last_even(numbers_list):
#     for i in range(len(numbers_list) - 1, -1, -1):
#         if numbers_list[i] % 2 == 0:
#             return numbers_list[i]

# print(find_last_even([1,2,3,4,5]))



# def my_join(join_str, strings_list):
#     joined_elemnts = ''
    
#     for word in strings_list:
#         joined_elemnts += join_str + word
    
#     return joined_elemnts

# print(my_join("+", ["1","2","3"])) 

# def my_join(join_str, strings_list):
#     joined_elemnts = ''
    
#     for word in strings_list:
#         joined_elemnts += join_str + word
    
#     return joined_elemnts[1:]

# print(my_join("+", ["1","2","3"]))