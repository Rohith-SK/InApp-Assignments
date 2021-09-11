import random
"winner"
user_count=0
computer_count=0
available_choices = ["rock", "paper", "scissors"]
winning_options = [("rock", "scissors"), ("paper", "rock"), ("scissors", "paper")]
output_dict={}
for i in range(1,11):
    user_choice=int(input("\n1.Rock \n2.Paper \n3.Scissors\nEnter your choice"))
    if(user_choice==1):
        user_choice="rock"
        print("User Choice is :",user_choice)
    elif(user_choice==2):
        user_choice="paper"
        print("User Choice is :", user_choice)
    elif(user_choice==3):
        user_choice="scissors"
        print("User Choice is :", user_choice)
    else:
        print("Invalid Choice")
    computer_choice=random.choice(available_choices)
    print("Computer Choice is :",computer_choice)
    if(user_choice==computer_choice):
        user_count=user_count+0
        computer_count=computer_count+0
        winner="Nonone"
    elif((user_choice,computer_choice) in winning_options):
        user_count=user_count+1
        winner="Player"
    else:
        computer_count=computer_count+1
        winner="Computer"
    output_dict[i] = [user_choice, computer_choice, winner]
print("Points Earned by Player:",user_count)
print("Points Earned by Computer:",computer_count)
if(user_count==computer_count):
    print("Noone is Winner")
elif(user_count>computer_count):
    print("Overall Winner is Player")
else:
    print("Winner is Computer")
choice='y'
while(choice=='y'):
    try:
        round_number = int(input("\nEnter the round for which you need information\n"))
        print("Player Choice is {}".format(output_dict[round_number][0]))
        print("Computer Choice is {}".format(output_dict[round_number][1]))
        print("{} has won round {}".format(output_dict[round_number][2],round_number))
    except:
        print("The round number doesn't exist")
    choice=input("Do you want to continue (y/n)")



