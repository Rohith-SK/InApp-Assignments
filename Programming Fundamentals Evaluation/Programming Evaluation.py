import random

class Pet():
    species_list=['Dog','Cat','Horse','Hamster']
    def __init__(self,species,name=''):
        self.species=species
        self.name=name
        if(self.species in Pet.species_list):
            pass
        else:
            print("Error Occured!No such species")



    def __str__(self):
        if(self.name==''):
            return f"Species of {self.species} unnamed"
        else:
            return f"Species of {self.species} name {self.name}"

class Dog(Pet):
    def __init__(self,name='',chases='Cats') :
        super().__init__(name=name,chases=chases)

    def __str__(self):
        if (self.name==''):
            return f'Species of Dog name {Pet.species} chases {self.chases}'
        else:
            return f'Species of Dog unnamed chases {self.chases})'

class Cat(Pet):
    def __init__(self,name='',hates='Dogs'):
        super().__init__( name=name,hates=hates)

    def __str__(self):
        if (self.name==''):
            return f'Species of Cat name {Pet.species} hates {self.hates}'
        else:
            return f'Species of Dog unnamed hates {self.hates})'


#main()
c='Y'
d1=Dog(Pet)
d2=Dog(Pet)
d3=Dog(Pet)
d4=Dog(Pet)
d5=Dog(Pet)
c1=Cat(Pet)
c2=Cat(Pet)
c3=Cat(Pet)
while c=='Y':
    list_name={Dog:['Vicky','Blacky','Don','Puppy','Chiller'],Cat:['Rui','Leo','Milo']}
    print(list_name)
    choice=int(input("Do you want to enter for Dog or Cat\n 1 for Dog and 2 for Cat"))
    if (choice==1):
        species_name=input("Enter Species Name")
        dog_name=input("Enter any one of the Dog name")
        if(len(dog_name==0)):
            dog_name=''
        else:
            list_name[Dog].append(dog_name)
        pet=Pet(species=species_name,name=dog_name)
        Dog(Pet)
    elif(choice==2):
        cat_name=input("Enter any one of the Cat name")
        if(len(cat_name)==0):
            cat_name=''
            species_name=input("Enter Species Name")
        else:
            list_name[Cat].append(cat_name)
        pet=Pet(species=species_name,name=cat_name)
        Cat(Pet)
    else:
        print("Invalid Choice")
    
    c=input("Do you want to Continue(Y/N)")

print("Thank You")






