# -*- coding: utf-8 -*-
"""07.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1hMH7WMZCSWRYv9hos3f-Cm7GV2ZLxk1Q
"""

s = ('Stringlings')
print(s)
b = {}
for i in s:
  b[i] = b.get(i,0)+1
for j in sorted(b, key=b.get, reverse=True):
  print(j +':',b[j])