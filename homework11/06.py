# -*- coding: utf-8 -*-
"""06.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1l5TdCqL1XLBPWm6eet0kNZ4eYbYccjpQ
"""

class User:

  def __init__(self, first_name, last_name, birthday, email, address, username, password):
    self.first_name = first_name
    self.last_name = last_name
    self.birthday = birthday
    self.email = email
    self.address = address
    self.username = username
    self.password = password
  def login(self, user, password):
    if user == self.username and password == self.password:
      return True
    else:
      return False

  def logout(self):
    print('Logged out')

  def update_info(self, new_info):
    if 'first_name' in new_info:
      self.first_name = new_info('first_name')
    if 'last_name' in new_info:
      self.last_name = new_info('last_name')
    if 'email' in new_info:
      self.last_name = new_info('email')
    if 'birthday' in new_info:
      self.last_name = new_info('birthday')
    if 'password' in new_info:
      self.last_name = new_info('password')
    if 'address' in new_info:
      self.last_name = new_info('address')

use = User('Arcade', 'Garnon', 2001, 'user', 'Freeside', 'A', 'B')
use.login('A', 'B')