import sqlite3

employee_details=[('Joe', 101, 35000, 1, 'Texas'),
                  ('Linda', 102, 25000, 2, 'Hawaaii'),
                  ('Monica', 103, 30000, 1, 'California'),
                  ('Joey', 104, 40000, 3, 'New York'),
                  ('Chandler', 105, 35000, 2, 'Washington')]

def connection():
    conn = sqlite3.connect('employee.db')
    return conn

def create_table_employee():
    con=connection()
    cursor=con.cursor()
    cursor.execute("DROP TABLE IF EXISTS Employee")
    employee="""CREATE TABLE Employee(
                Name CHAR(20) NOT NULL,
                ID INTEGER PRIMARY KEY NOT NULL,
                Salary INTEGER NOT NULL,
                Department_ID INTEGER NOT NULL)"""

    cursor.execute(employee)

    add_column="""ALTER TABLE Employee ADD COLUMN City TEXT"""
    cursor.execute(add_column)
    con.commit()
    con.close()

def add_employee_details():
    con=connection()
    cursor=con.cursor()
    cursor.executemany("INSERT INTO Employee VALUES(?,?,?,?,?)",employee_details)
    con.commit()
    con.close()

def display():
    con=connection()
    cursor=con.cursor()
    cursor.execute("SELECT Name, ID, Salary FROM Employee")
    result=cursor.fetchall()
    if (len(result) == 0):
        print("An Error Occured")
    else:
        for row in result:
            print(row)


    con.commit()
    con.close()


def letter():
    con = connection()
    cursor = con.cursor()
    letter = input("\nEnter the First Letter of the Employee to display the details of the Employee starting with it:")
    cursor.execute("SELECT * FROM Employee WHERE Name LIKE '{}%'".format(letter))
    result=cursor.fetchall()
    if (len(result) == 0):
        print(f"An Error Occured! No Employee with First letter {letter}")
    else:
        for row in result:
            print(row)
    con.commit()
    con.close()


def id():
    con = connection()
    cursor = con.cursor()
    employee_id=int(input("\nEnter the ID of the Employee to dislpay details"))
    cursor.execute("SELECT * FROM Employee WHERE ID= :id",{"id":employee_id})
    result=cursor.fetchall()
    if (len(result) == 0):
        print(f"An Error Occured! No Employee with ID {employee_id}")
    else:
        for row in result:
            print(row)
        name=input("\nEnter the new name to update")
        cursor.execute("UPDATE Employee SET Name='{}' WHERE ID='{}'".format(name,employee_id))
        print("\nThe Updated Database is:")
        cursor.execute("SELECT * FROM EMPLOYEE")
        result = cursor.fetchall()
        for row in result:
            print(row)

    con.commit()
    con.close()


choice='Y'
while choice=='Y':
    print("\nDisplaying Name, ID and Salary of the Employee from Employee Table ")
    create_table_employee()
    add_employee_details()
    display()
    letter()
    id()
    choice=input("Do you want to continue(Y/N)")


