import random
import numpy as np
dict ={1:[0,0], 2:[0,1], 3:[0,2],4:[1,0], 5:[1,1], 6:[1,2],7:[2,0], 8:[2,1], 9:[2,2]}
print("Welcome to Tic Tac Toe,Let's start the game")
user_name = input("Enter your name:")
selections = {}
i = 1
available_options = [1, 2, 3, 4, 5, 6, 7, 8, 9]
def create_board():
    return np.array([['-','-','-'],['-','-','-'],['-','-','-']])

def print_game_board(game_board):
    print(" {} | {} | {} \n------------ \n {} | {} | {} \n------------ \n {} | {} | {}".format(game_board[0, 0],
                                                                                              game_board[0, 1],
                                                                                              game_board[0, 2],
                                                                                              game_board[1, 0],
                                                                                              game_board[1, 1],
                                                                                              game_board[1, 2],
                                                                                              game_board[2, 0],
                                                                                              game_board[2, 1],
                                                                                              game_board[2, 2]))

def compare(board,mk):
    out_comes_row = [[0, 0, 0], [1, 1, 1], [2, 2, 2], [0, 1, 2], [0, 1, 2], [0, 1, 2], [0, 1, 2], [0, 1, 2]]
    out_comes_col = [[0, 1, 2], [0, 1, 2], [0, 1, 2], [0, 0, 0], [1, 1, 1], [2, 2, 2], [0, 1, 2], [2, 1, 0]]
    for row, col in zip(out_comes_row, out_comes_col):
        if board[row[0]][col[0]] == board[row[1]][col[1]] == board[row[2]][col[2]] == mk:
            return True
    return False


def board_full(board):
    for m in range(0, 3):
        for n in range(0,3):
           if board[m][n] != '-':
               continue
           else:
               return False
    return True


def user_selection(board):
       user_place = int(input("Your selection"))

       if user_place <= 9:
          p = dict[user_place][0]
          q = dict[user_place][1]
          if board[p][q] == '-':
             board[p][q] = user_turn
          elif board_full(board):
              return 0
          else:
            print("Place is already occupied, enter another selection")
            user_selection(board)
       return user_place



def comptr_selection(board):

        comptr_place = random.choice(available_options)
        m = dict[comptr_place][0]
        n = dict[comptr_place][1]
        if board[m][n] == '-':
            board[m][n] = comptr_turn
            print(f"computer selection:{comptr_place}")
        elif board_full(board):
            return 0
        else:
           comptr_selection(board)

        return comptr_place

c=1
while(c==1):
    try:
        user_turn=input("Enter User Symbol (X/O):")
        if(user_turn=='X'):
            comptr_turn='O'
            print(f"Computer Symbol is {comptr_turn}")
            c=0
        elif(user_turn == 'O'):
            comptr_turn = 'X'
            print(f"Computer Symbol is {comptr_turn}")
            c = 0
        else:
            print("Invalid Choice! Enter User Symbol (X/O):")
    except:
        c=1
storing = []
game_in = []
while i <= 10:
    game_board = create_board()
    j = 1
    print(f"Game {i}")
    winner = {}
    if board_full(game_board):
        break
    while not board_full(game_board):
        print(f"Round {j}")
        use_in = user_selection(game_board)
        comp_in = comptr_selection(game_board)
        if compare(game_board, user_turn):
            winner[i] = 'User'
        elif compare(game_board, comptr_turn):
            winner[i] ='Computer'
        else:
            winner[i] = 'Noone'
        print_game_board(game_board)
        selections[j] = [use_in, comp_in]
        j = j + 1
    game_in.append(game_board)
    storing.append(winner[i])
    print(F"winner is {winner[i]}")
    i = i + 1
c = 'y'
while (c == 'y'):
    try:
        value = int(input("Enter the game you want to find:"))
        print(f" winner is {storing[value - 1]}")
        print(f"The {value} gameboard is:\n ")
        print(print_game_board(game_in[value - 1]))
    except:
        print("round doesn't exist")
    c = input("Do you want to continue: y/n")
