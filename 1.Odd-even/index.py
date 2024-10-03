def odd_even(num):
    if num % 2 == 0:
        print(str(num) + "even number")
    else:
        print(str(num) + "odd number")


# odd_even(78)

def even_odd(*numbers):
    for number in numbers:
        if number % 2 == 0:
            print(f"{number}is an even number")
        else :
            print(f"{number}is an even number")



even_odd(12,4,5,67,)