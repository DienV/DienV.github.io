# -*- coding: utf-8 -*-
"""02.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1hMH7WMZCSWRYv9hos3f-Cm7GV2ZLxk1Q
"""

from collections import Counter
s = {'x':50, 'y':54, 'z': 5, 'v': -9, 'f': 100}
k = Counter(s)
h = k.most_common(3)
for i in h:
  print(i[0],",",i[1])