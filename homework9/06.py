# -*- coding: utf-8 -*-
"""06

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1eb46QlBuaNI1dAe-8c4ZQrQBCXl8zR5I
"""

def is_pangram(s):
  alphabet = "abcdefghijklmnopqrstuvwxyz"
  for char in alphabet:
        if char not in s.lower():
            return False
  return True
s = 'Elusive, evasive, persistent. Righteous traits for a rogue'
is_pangram(s)