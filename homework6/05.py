# -*- coding: utf-8 -*-
"""05.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/12UmNK0hmA_hcFNw0fyEk0oD7KDivydjp
"""

from collections import Counter
s = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 5, 2, 3, 9, 4, 6, 32, 6, 6, 7 , 8, 26, 1, 1]
count = Counter(s)
top = count.most_common(1)
print(top)