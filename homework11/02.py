# -*- coding: utf-8 -*-
"""02.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1In-nutghVo2fXNM3H8xOu0MZCIIimKWC
"""

class Dog:
    species = 'mammal'

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def description(self):
        return f'{self.name} is {self.age} years old'

    def speak(self, sound):
        return f'{self.name} says {sound}'


class RussellTerrier(Dog):
    def run(self, speed):
        return f'{self.name} runs {speed}'


class Bulldog(Dog):
    def run(self, speed):
        return f'{self.name} runs {speed}'

class Pet:

  def __init__(self, dog):
    self.dogs = dogs
  
d1 = Dog('Tom', 6)
d2 = Dog('Jerry', 9)
d3 = Dog('Butt', 3)
d4 = Dog('Wine', 1)
the_dogs = [d1, d2, d3, d4]

pet = Pet(the_dogs)

def description(Pet):
  return f'I have {len(the_dogs)} dogs', f'{d1.name} is {d1.age}',  f'{d2.name} is {d2.age}',  f'{d3.name} is {d3.age}',  f'{d4.name} is {d4.age}',  "And they're all mammals, of course"

description(pet)