from random import randint
"winner"
user_count=0
computer_count=0
available_choices=["rock","paper","scissors"]
winning_options = [(0,2), (1,0), (2,1)]
output_dict={}
for i in range(1,11):
    user_choice=input("Enter your choice(rock/paper/scissor)")
    computer_input=available_choices[randint(0,2)]
    if(user_choice in available_choices):
        print("Computer Choice is",computer_input)
        user_input = available_choices.index(user_choice)
        computer_index=available_choices.index(computer_input)
        if(user_input==computer_index):
            user_count=user_count+0
            computer_count=computer_count+0
            winner="Nonone"
        elif((user_input,computer_index) in winning_options):
            user_count=user_count+1
            winner="Player"
        else:
            computer_count=computer_count+1
            winner="Computer"
    else:
        print("Invalid Choice")
        winner="Noone"
    output_dict[i] = [user_choice, available_choices[computer_index], winner]
print("Points Earned by Player:",user_count)
print("Points Earned by Computer:",computer_count)
if(user_count==computer_count):
    print("Noone is Winner")
elif(user_count>computer_count):
    print("Overall Winner is Player")
else:
    print("Overall Winner is Computer")
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



