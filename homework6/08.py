# -*- coding: utf-8 -*-
"""08.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1S2aq1LLtCW6c47SfeYOvxp3D1BhqGvHm
"""

A = [10, 9, 8, 7, 6, 5, 4, 3]
count = 0
for i in range(0,len(A)):
  for j in range(0,len(A)):
    if i < j:
      if A[i] > A[j]:
        count += 1
print(count)