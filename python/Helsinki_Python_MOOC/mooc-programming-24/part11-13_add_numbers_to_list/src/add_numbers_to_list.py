# WRITE YOUR SOLUTION HERE:
def add_numbers_to_list(numbers: list):
    length = len(numbers)
    if length == 0:
        numbers.append(1)
        add_numbers_to_list(numbers) 
    if len(numbers) % 5 != 0:
        numbers.append(numbers[-1] + 1)
        add_numbers_to_list(numbers)