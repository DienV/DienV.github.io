# -*- coding: utf-8 -*-
"""13

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1eb46QlBuaNI1dAe-8c4ZQrQBCXl8zR5I
"""

def find_x(list, x):
  res = []
  for i in range(len(list)):
    if list[i] == x:
      res.append(i)
  return res if res else -1

lst = [1, 3, 1, 1, 7, 9, 1]
x = 1
print(find_x(lst, x))