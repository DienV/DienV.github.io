# -*- coding: utf-8 -*-
"""04.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1zkZYt0wV8T57v6Li8A29FHjtv54ToBXY
"""

list1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 100, -6, 5678, -98765]
print(f'List ban đầu:{list1}')
n = int(input('Nhập độ dài list mới:'))
while n <= 0:
  print('Nhập lại n:')
  n = int(input())
s1 = list1[:n]
s2 = list1[n:]
print(s1)
print(s2)