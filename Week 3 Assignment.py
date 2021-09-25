import random
from random import randrange


class Pet():
    hungry_reduce = 3
    boredom_reduce = 2
    threshold_boredom = 5
    threshold_hungry = 8
    sounds = {1: [], 2: [], 3: []}

    def __init__(self, name, type):
        self.name = name
        self.type = type
        self.hunger = randrange(self.threshold_hungry)
        self.boredom = randrange(self.threshold_boredom)

    def clock_tick(self):
        self.boredom += 2
        self.hunger += 3

    def teach(self, word):
        self.sounds[pet_number].append(word)
        print(self.sounds[pet_number])
        self.reduce_boredom()

    def hi(self):
        if (self.sounds[pet_number]) == []:
            print("\nHello! Teach me a word!")
        else:
            print(f"\nHi! My favorite word is {random.choice(self.sounds[pet_number])}")
        self.reduce_boredom()

    def feed(self):
        self.reduce_hunger()

    def reduce_hunger(self):
        print("Thank You for the food")
        self.hunger -= Pet.hungry_reduce

    def reduce_boredom(self):
        self.boredom -= Pet.boredom_reduce

    def state(self):
        if self.hunger <= self.threshold_hungry and self.boredom <= self.threshold_boredom:
            return "Happy"
        elif self.hunger > self.threshold_hungry:
            return "Hungry"
        else:
            return "Bored"

    def __str__(self):
        return f'I am {self.name}, My type is {self.type} and I feel {self.state()}'


class Dog1(Pet):
    def __init__(self, name="Don", type="Dog1"):
        super().__init__(name=name, type=type)
        l = len(user_pets)
        self.sounds[l]=[]
        self.sounds[l]= ["Bow"]
        print(self.sounds)

class Dog2(Pet):
    def __init__(self, name="Don", type="Dog2"):
        super().__init__(name=name, type=type)
        l=len(user_pets)
        self.sounds[l]=[]
        self.sounds[l] = ["Woof!"]
        print(self.sounds[l])


class Cat(Pet):
    def __init__(self, name="Don", type="Cat"):
        super().__init__(name=name, type=type)
        l=len(user_pets)
        self.sounds[l] = []
        self.sounds[l] = ["Meow!"]
        print(self.sounds)



class Dog(Dog2, Dog1):
    def __init__(self, name="Don", type="Dog"):
        super().__init__(name=name, type=type)

user_pets = ["Vicky", "Blacky", "Max"]
pet_type_name = ["Dog", "Dog", "Cat"]


def adopt_pet():
    print(f"Existing Pets are {user_pets}")
    pet_name = input("Enter Pet Name")
    pet_type = input("Enter the type of the pet")

    if (pet_type == "Dog1"):
        user_pets.append(pet_name)
        pet_type_name.append(pet_type)
        d1 = Dog1(pet_name, pet_type)
    elif (pet_type == "Dog2"):
        user_pets.append(pet_name)
        pet_type_name.append(pet_type)
        d2 = Dog2(pet_name, pet_type)
    elif (pet_type == "Cat"):
        user_pets.append(pet_name)
        pet_type_name.append(pet_type)
        c = Cat(pet_name, pet_type)
    elif type == "Dog":
        user_pets.append(pet_name)
        pet_type_name.append(pet_type)
        d = Dog(pet_name, pet_type)
    else:
        user_pets.append(pet_name)
        pet_type_name.append(pet_type)
    print(f"Pets list after adopting:{user_pets}")
    pet_name = Pet(name=pet_name, type=pet_type)



print("\nWelcome!\n")
print("List of Pets: \n1.Vicky\n2.Black\n3.Max")
print("Commands Available for User are:Teach, Greet and Feed")

game = True
while game:
    choice = int(input("Enter User Choice \n 1. Adopt a pet 2. Interact with the existing pet"))
    if (choice == 1):
        adopt_pet()


    elif (choice == 2):
        user_choice = int(input("Enter your Command 1. Teach 2. Greet 3. Feed"))
        pet_number = int(input(f"Enter the pet number to interact with the pet {user_pets}"))
        if (user_choice == 1):
            pet_name = user_pets[pet_number - 1]
            pet_type = pet_type_name[pet_number - 1]
            print(f'Hello I am {pet_name}')
            word = input("Enter the word User want to Teach")
            pet_name = Pet(name=pet_name, type=pet_type)
            pet_name.teach(word)
        elif (user_choice == 2):
            pet_name = user_pets[pet_number - 1]
            pet_type = pet_type_name[pet_number - 1]
            pet_name = Pet(name=pet_name, type=pet_type)
            pet_name.hi()
        elif (user_choice == 3):
            pet_name = user_pets[pet_number - 1]
            pet_type = pet_type_name[pet_number - 1]
            pet_name = Pet(name=pet_name, type=pet_type)
            pet_name.feed()
        else:
            print("Invalid Choice!")
    else:
        print("Invalid Choice!")

    for i, j in zip(user_pets, pet_type_name):
        p = Pet(name=i, type=j)
        p.clock_tick()
        print(p)

    con = input("Do you want to continue(Y/N)")
    if (con == 'Y'):
        game = True
    else:
        game = False

print("Thank You!")
