# -*- coding: utf-8 -*-
"""01.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1QM-1pZBW1_aDZ7bNWvuBtooWR3PPYvXu
"""

import math
a = float(input('a='))
b = float(input('b='))
c = float(input('c='))
if a == 0:
    if b == 0:
        if c == 0:
            print('Phương trình vô số nghiệm')
        else:
            print('Phương trình vô nghiệm')
    else:
        if c == 0:
            print('Phương trình có nghiệm là: x = 0')
        else:
            print(f' Phương trình có nghiệm là: x = {-c/b}')      
delta = b**2 - 4*a*c
if delta > 0:
   x1 = (-b + math.sqrt(delta) / (2*a))
   x2 = (-b - math.sqrt(delta) / (2*a))
   print('Phương trình có 2 nghiệm phân biệt là:')
   print(f'x1 = {x1}')
   print(f'x2 = {x2}')
elif delta == 0:
   x = (-b / 2*a)
   print('Phương trình có nghiệm kép là:')
   print(f'x1 = x2 = {x}')
else:
   print('Phương trình vô nghiệm.')
