import sqlite3

conn=sqlite3.connect('cars.db')
cursor=conn.cursor()

cursor.execute("DROP TABLE IF EXISTS CARS")

query="""CREATE TABLE CARS(
            Car_Name CHAR(20) NOT NULL,
            Owner_Name CHAR(20) NOT NULL)"""


cursor.execute(query)

i=0
while i<10:
    c_name = input("Enter Car Name:")
    n_name = input("Enter Owner Name of the Car:")
    cursor.execute("INSERT INTO CARS (Car_name, Owner_Name) " "VALUES(?, ?)", (c_name, n_name))
    i+=1

print("Car Table Created")
print("Data Inserted")
print("Car Name, Owner Name")
cursor.execute("SELECT * FROM CARS")
result= cursor.fetchall()
for row in result:
    print(row)

conn.commit()
conn.close()

