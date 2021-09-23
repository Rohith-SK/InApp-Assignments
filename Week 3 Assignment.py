import random
from random import randrange

hungry_reduce = 3
boredom_reduce = 2

class Pet():

    threshold_boredom = 5
    threshold_hungry=8
    all_pet_name = []
    sounds = {1: [], 2: [], 3: [],4: [],5: [],6: [],7: []}

    def __init__(self,name):
        self.name=name
        self.all_pet_name.append(self.name)
        self.hunger = randrange(self.threshold_hungry)
        self.boredom = randrange(self.threshold_boredom)


    def clock_tick(self):
        self.boredom += 2
        self.hunger += 3

    def teach(self,word):
        self.sounds[pet_number].append(word)
        print(self.sounds[pet_number])
        self.reduce_boredom()


    def hi(self):
        if (self.sounds[pet_number]) == []:
            print("\nHello! Teach me a word!")
        else:
            print(f"\nHi! My favorite word is {random.choice(self.sounds[pet_number])}")
        self.reduce_boredom()

        return random.choice(self.sounds)
        self.reduce_boredom()

    def feed(self):
        self.reduce_hunger()


    def reduce_hunger(self):
        print("Thank You for the food")
        self.hunger-= hungry_reduce

    def reduce_boredom(self):
        self.boredom-=boredom_reduce


    def state(self):
        if self.hunger <= self.threshold_hungry and self.boredom <= self.threshold_boredom:
            return "Happy"
        elif self.hunger > self.threshold_hungry:
            return "Hungry"
        else:
            return "Bored"
    def __str__(self):
        return f'I am {self.name}. I feel {self.state()}'


print("\nWelcome!\n")
print("List of Pets: \n1.Vicky\n2.Black\n3.Max")
print("Commands Available for User are:Teach, Greet and Feed")


user_pets=["Vicky","Blacky","Max"]

game = True
while game:
    choice=int(input("Enter User Choice \n 1. Adopt a pet 2. Interact with the existing pet"))
    if(choice==1):
        print(f"Existing Pets are {user_pets}")
        pet_name=input("Enter Pet Name")
        user_pets.append(pet_name)
        print(f"Pets list after adopting:{user_pets}")
        pet_name = Pet(name=pet_name)
    elif(choice==2):
        user_choice=int(input("Enter your Command 1. Teach 2. Greet 3. Feed"))
        pet_number = int(input(f"Enter the pet number to interact with the pet {user_pets}"))
        if(user_choice==1):
            pet_name = user_pets[pet_number - 1]
            print(f'Hello I am {pet_name}')
            word=input("Enter the word User want to Teach")
            pet_name = Pet(name=pet_name)
            pet_name.teach(word)
        elif(user_choice==2):
            pet_name = user_pets[pet_number - 1]
            pet_name = Pet(name=pet_name)
            pet_name.hi()
            print(pet_name)
        elif(user_choice==3):
            pet_name = user_pets[pet_number-1]
            pet_name = Pet(name=pet_name)
            pet_name.feed()
        else:
            print("Invalid Choice!")
    else:
        print("Invalid Choice!")

    for i in user_pets:
        name=Pet(i)
        name.clock_tick()
        print(name)


    con=input("Do you want to continue(Y/N)")
    if(con=='Y'):
        game=True
    else:
        game=False
        
print("Thank You!")


