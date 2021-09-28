import sqlite3

conn=sqlite3.connect('database.db')

cursor=conn.cursor()
cursor.execute("DROP TABLE IF EXISTS HOSPITALS")

hospitals="""CREATE TABLE HOSPITALS(
            Hospital_Id INT PRIMARY KEY NOT NULL,
            Hospital_Name text NOT NULL,
            Bed_Count INT NOT NULL)"""
cursor.execute(hospitals)



cursor.execute("DROP TABLE IF EXISTS DOCTORS")

doctors="""CREATE TABLE DOCTORS(
            Doctor_Id INT PRIMARY KEY NOT NULL,
            Doctor_Name TEXT NOT NULL,
            Hospital_ID TEXT NOT NULL,
            Joining_Date DATE NOT NULL,
            Speciality TEXT  NOT NULL,
            Salary INT NOT NULL,
            Experience TEXT DEFAULT NULL,
            FOREIGN KEY(Hospital_ID) REFERENCES HOSPITALS(Hospital_ID))"""

cursor.execute(doctors)



hospital_details=[('1', 'Mayo Clinic', 200),
                  ('2', 'Cleveland Clinic', 400),
                  ('3', 'Johns Hopkins', 1000),
                  ('4', 'UCLA Medical Center', 1500)]

conn.executemany("INSERT INTO HOSPITALS VALUES(?,?,?)",hospital_details)

doctor_details=[('101', 'David', '1', '2005-02-10', 'Pediatric', 40000, None),
                ('102', 'Michael', '1', '2018-07-23', 'Oncologist', 20000, None),
                ('103', 'Susan', '2', '2016-05-19', 'Gynecologist', 25000, None),
                ('104', 'Robert', '2', '2017-12-28', 'Pediatric', 28000, None),
                ('105', 'Linda', '3', '2004-06-04', 'Gynecologist', 42000, None),
                ('106', 'William', '3', '2012-09-11', 'Dermatologist', 30000, None),
                ('107', 'Richard', '4', '2014-08-21', 'Gynecologist', 32000, None),
                ('108', 'Karen', '4', '2011-10-17', 'Radiologist', 30000, None)]

conn.executemany("INSERT INTO DOCTORS VALUES(?,?,?,?,?,?,?)",doctor_details)

speciality=input("Enter the Speciality of the Doctor")
salary=int(input("Enter the Salary of the Doctor"))
print("Displaying Doctors Details as per the User Input")
cursor.execute("SELECT * FROM DOCTORS WHERE Speciality =:sp and Salary >= :sal",{"sp":speciality, "sal":salary })
result=cursor.fetchall()
for row in result:
    print(row)


hospital_id=int(input("Enter the Hospital ID to Display List of Doctors"))
print("List of Doctors as per the User Inputted Hospital ID")
cursor.execute("SELECT Doctor_Name FROM DOCTORS WHERE Hospital_Id = :id", {"id": hospital_id})
result = cursor.fetchall()

for row in result:
    print(row)


print("Displaying Hospital Name Using Doctor Name")
name=input("Enter the Doctor Name")
cursor.execute("SELECT * FROM DOCTORS WHERE Doctor_Name = :dname", {"dname": name})
doctor_result=cursor.fetchone()
h_id=doctor_result[2]
cursor.execute("SELECT Hospital_Name FROM HOSPITALS WHERE Hospital_Id = :id", {"id":h_id})
hospital_name = cursor.fetchone()
print("{} working in Hospital {}".format(name,hospital_name ))

conn.commit()
conn.close()
