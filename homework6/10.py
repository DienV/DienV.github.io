# -*- coding: utf-8 -*-
"""10.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1S2aq1LLtCW6c47SfeYOvxp3D1BhqGvHm
"""

A = [0,1,2,3,4,5,6,7,8,9,10]
count = 0
for i in range(len(A)):
  for j in range(len(A)):
    if A[i] > A[j]:
      if i < j:
        count += 1
print(count)

a = [1, 2, 3, 4, 5, 6, 7, 2, 4, 0, 12, 5, 1, 7, 7, 8]
print(len(sorted(set(a))))