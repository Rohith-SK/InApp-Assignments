import random
"winner"
user_count=0
computer_count=0
output_dict={}
keys=[]
for i in range(1,11):
    user_choice=input("Enter User Choice(rock,paper,scissors):\n")
    available_choices=['rock','paper','scissors']
    print("Computer Choice is:")
    computer_choice=random.choice(available_choices)
    print(computer_choice)



    if(user_choice==computer_choice):
        user_count=user_count+0
        computer_count=computer_count+0
        winner='Noone'
    elif(user_choice=='rock'):
            if (computer_choice=='scissors'):
                user_count = user_count + 1
                winner='Player'


            else:
                computer_count=computer_count + 1
    elif(user_choice=='scissors'):
         if(computer_choice=='rock'):
            computer_count=computer_count + 1
            winner = 'Computer'

         else:
             user_count = user_count + 1
             winner = 'Player'

    elif(user_choice=='scissors'):
            if(computer_choice=='paper'):
                user_count = user_count + 1
                winner = 'Player'

            else:
                computer_count=computer_count + 1
                winner = 'Computer'
    elif(user_choice=='paper'):
            if(computer_choice=='scissors'):
                computer_count = computer_count + 1
                winner = 'Computer'
            else:
                user_count = user_count + 1
                winner = 'Player'
    elif (user_choice=='paper'):
            if(computer_choice=='rock'):
                user_count = user_count + 1
            else:
                user_count = user_count + 1
                winner = 'Player'
    elif(user_choice=='rock'):
            if(computer_choice=='paper'):
                computer_count=computer_count + 1
                winner = 'Computer'
            else:
                user_count = user_count + 1
                winner = 'Player'
    else:
        print("Invalid Statement")
    output_dict[0 + i] = [user_choice, computer_choice, winner]
print("Points Earned by Player:",user_count)
print("Points Earned by Computer:",computer_count)
choice = int(input("\nEnter the Round number for details.\n"))
print("Player Choice:",{output_dict[choice][0]})
print("Computer Choice:", {output_dict[choice][1]})
print({output_dict[choice][2]},"has won round",choice)




