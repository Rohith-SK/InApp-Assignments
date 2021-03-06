import sqlite3

employee_details=[('Joe', 101, 35000, 1, 'Texas'),
                  ('Linda', 102, 25000, 2, 'Hawaaii'),
                  ('Monica', 103, 30000, 1, 'California'),
                  ('Joey', 104, 40000, 4, 'New York'),
                  ('Chandler', 105, 35000, 5, 'Washington')]

department_details=[(1,'Marketing'),
                    (2,'IT'),
                    (3,'Finance'),
                    (4,'Human Resources'),
                    (5,'QA')]

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


def create_table_department():
    con=connection()
    cursor=con.cursor()
    cursor.execute("DROP TABLE IF EXISTS Departments")
    departments="""CREATE TABLE Departments(
                      Department_ID INT PRIMARY KEY NOT NULL,
                      Department_Name CHAR(20) NOT NULL,
                      FOREIGN KEY(Department_ID) REFERENCES Employee(Department_ID))"""
    cursor.execute(departments)
    con.commit()
    con.close()



def add_department_details():
    con=connection()
    cursor=con.cursor()
    cursor.executemany("INSERT INTO Departments VALUES(?,?)",department_details)
    con.commit()
    con.close()

def display():
    con=connection()
    cursor=con.cursor()
    id=int(input("Enter Department ID(1-5)"))
    cursor.execute("SELECT DISTINCT * FROM Employee INNER JOIN Departments WHERE Departments.Department_ID == {} and Departments.Department_ID==Employee.Department_ID".format(id))
    result=cursor.fetchall()
    if(len(result)==0):
        print(f"Error Occured. No Department with Department ID {id}")
    else:
        for row in result:
            print(row)
    con.commit()
    con.close()

choice='Y'
while choice=='Y':
    create_table_employee()
    add_employee_details()
    create_table_department()
    add_department_details()
    display()
    choice=input("Do you want to continue(Y/N)")

