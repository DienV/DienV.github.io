# -*- coding: utf-8 -*-
"""10.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/11hZEdG7j0wVkfQLpQHsv9gH-ads2xfQJ
"""

s = ["www.hust.edu.vn", "www.wikipedia.org", "www.asp.net", "www.amazon.com"]
b = ("")
for i in s:
  b +="," + i.split(".")[-1]
print(b)
