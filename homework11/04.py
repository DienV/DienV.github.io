# -*- coding: utf-8 -*-
"""04.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1n75yxdBvTcBqiiDLYMhb2P8NjgGH9_cu
"""

class Pets:

    dogs = []

    def __init__(self, dogs):
        self.dogs = dogs
    
    def walk(self):
        return f'{self.dogs} is walking!'


class Dog:
    species = 'mammal'
    is_hungry = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def description(self):
        return f'{self.name} is {self.age} years old'

    def speak(self, sound):
        return f'{self.name} says {sound}'

    def eat(self):
        self.is_hungry = False

    def walk(self):
      return f'{self.name} is walking!'


class RussellTerrier(Dog):
    def run(self, speed):
        return f'{self.name} runs {speed}'


class Bulldog(Dog):
    def run(self, speed):
        return f'{self.name} runs {speed}'

d1 = Dog('Tom', 1)
d2 = Dog('Jerry', 2)
d3 = Dog('Butt', 3)
the_dogs = [d1, d2, d3]

for i in the_dogs:
  print(i.walk())