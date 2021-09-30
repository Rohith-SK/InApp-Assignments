import sqlite3


def connection():
    conn=sqlite3.connect('database.sqlite')
    return conn

def question1b():
    con=connection()
    cursor=con.cursor()
    print("\nDisplaying names of both the Home Teams and Away Teams in each match played in 2015 and Full time Home Goals (FTHG) = 5")
    print("\nHome Team \t\t\tAway Team")
    cursor.execute("Select HomeTeam,AwayTeam From Matches Where Season=2015 and FTHG=5")
    result=cursor.fetchall()
    for row in result:
        print(f'{row[0]}\t\t\t{row[1]}\n')
    con.commit()
    con.close()
    
def question1c():
    con=connection()
    cursor=con.cursor()
    print("\nDisplaying details of the matches where Arsenal is the Home Team and  Full Time Result (FTR) is “A” (Away Win)")
    cursor.execute("Select * From Matches Where HomeTeam='Arsenal' and FTR='A' ")
    result=cursor.fetchall()
    print("\nMatch ID\tDiv \tSeason\tDate\t\tHome Team\tAway Team\tFTHG\tFTAG\tFTR")
    for row in result:
        print(f'{row[0]}\t\t{row[1]} \t{row[2]}\t{row[3]}\t{row[4]}\t\t{row[5]}\t\t{row[6]}\t{row[7]}\t{row[8]}\n')
    con.commit()
    con.close()

def question1d():
    con=connection()
    cursor=con.cursor()
    print("\nDisplayin the details of all the matches from the 2012 season till the 2015 season where Away Team is Bayern Munich and Full time Away Goals (FTHG) > 2")
    cursor.execute("Select * From Matches Where Season Between 2012 and 2015 and AwayTeam='Bayern Munich' and FTHG>2")
    result=cursor.fetchall()
    print("\nMatch ID\tDiv \tSeason\tDate\t\tHome Team\tAway Team\tFTHG\tFTAG\tFTR")
    for row in result:
        print(f'{row[0]}\t\t{row[1]} \t{row[2]}\t{row[3]}\t{row[4]}\t{row[5]}\t{row[6]}\t{row[7]}\t{row[8]}\n')
    con.commit()
    con.close()

def question1e():
    con=connection()
    cursor=con.cursor()
    print("Displaying the details of all the matches where the Home Team name begins with “A” and Away Team name begins with “M”")
    cursor.execute("Select * From Matches Where HomeTeam Like 'A%' and AwayTeam Like 'M%'")
    result=cursor.fetchall()
    print("\nMatch ID\tDiv \tSeason\tDate\t\tHome Team\tAway Team\tFTHG\tFTAG\tFTR")
    for row in result:
        print(f'{row[0]}\t\t{row[1]} \t{row[2]}\t{row[3]}\t{row[4]}\t{row[5]}\t{row[6]}\t{row[7]}\t{row[8]}\n')
    con.commit()
    con.close()

def question2a():
    con=connection()
    cursor=con.cursor()
    cursor.execute("Select Count(*) From Teams")
    result=cursor.fetchone()
    print(f"\nThe Count of all the rows in the Team Table are {result[0]}")
    con.commit()
    con.close()

def question2b():
    con=connection()
    cursor=con.cursor()
    cursor.execute("Select Distinct Season From Teams")
    result=cursor.fetchall()
    print("\nThe Unique Values that are included in the Season Column in the Team Table are")
    for row in result:
        print(row[0])
    con.commit()
    con.close()


def question2c():
    con=connection()
    cursor=con.cursor()
    cursor.execute("Select Max(StadiumCapacity),Min(StadiumCapacity) From Teams")
    result=cursor.fetchall()
    print(f"\nThe Largest Stadium Capacity is {result[0][0]} and Minimum Stadium Capacity is {result[0][1]}")
    con.commit()
    con.close()

def question2d():
    con=connection()
    cursor=con.cursor()
    cursor.execute("Select Sum(KaderHome) From Teams Where Season=2014")
    result=cursor.fetchone()
    print(f"\nThe sum of squad players for all teams during the 2014 season from the Teams table is {result[0]}")
    con.commit()
    con.close()

def question2e():
    con=connection()
    cursor=con.cursor()
    cursor.execute("Select Avg(FTHG) From Matches Where HomeTeam='Man United'")
    result=cursor.fetchall()
    print("\nAverage number of goals Man United score during home games is {}".format(result[0][0]))
    con.commit()
    con.close()

def question3a():
    con=connection()
    cursor=con.cursor()
    print("\nDisplaying HomeTeam, FTHG and FTAG")
    cursor.execute("Select HomeTeam, FTHG, FTAG From Matches Where Season=2010 and HomeTeam='Aachen' Order By FTHG Desc")
    result=cursor.fetchall()
    print("\nHome Team\tFTHG \tFTAG")
    for row in result:
        print(f"{row[0]} \t\t{row[1]} \t{row[2]}")
    con.commit()
    con.close()

def question3b():
    con=connection()
    cursor=con.cursor()
    print("\nDisplaying the total number of home games each team won during the 2016 season in descending order")
    cursor.execute("Select Count(*),HomeTeam From Matches Where Season=2016 and FTR='H' Group By HomeTeam Order By Count(*) DESC ")
    result=cursor.fetchall()
    for row in result:
        print(f"\nHome Team is {row[1]} and Total Number of Games Won is {row[0]}")
    con.commit()
    con.close()


def question3c():
    con=connection()
    cursor=con.cursor()
    cursor.execute("Select * From Unique_Teams Limit 10")
    result=cursor.fetchall()
    print("\nThe First 10 rows from Unique Teams Table are:\nTeam Name \tunique_Team_ID")
    for row in result:
        print(f'{row[0]} \t{row[1]}\n')
    con.commit()
    con.close()


def question3d():
    con=connection()
    cursor=con.cursor()
    print("\nDisplaying result using Where Statement")
    print("\nMatch_Id \tUnique Team ID \tTeam Name")
    cursor.execute("Select Teams_in_Matches.Match_ID,Unique_Teams.Unique_Team_ID,Unique_Teams.TeamName From Teams_in_Matches,Unique_Teams Where Unique_Teams.Unique_Team_ID=Teams_in_Matches.Unique_Team_ID Order By Teams_in_Matches.Match_ID Limit 20 ")
    result=cursor.fetchall()
    for row in result:
        print(f'{row[0]}\t\t{row[1]}\t\t{row[2]}')

    print("\nDisplaying result using Join")
    print("\nMatch_Id \tUnique Team ID \tTeam Name")
    cursor.execute("Select Teams_in_Matches.Match_ID,Unique_Teams.Unique_Team_ID,Unique_Teams.TeamName From Teams_in_Matches Inner Join Unique_Teams On Teams_in_Matches.Unique_Team_ID=Unique_Teams.Unique_Team_ID Order By Teams_in_Matches.Match_ID Limit 20 ")
    result=cursor.fetchall()
    for row in result:
        print(f'{row[0]}\t\t{row[1]}\t\t{row[2]}')

    con.commit()
    con.close()

def question3e():
    con=connection()
    cursor=con.cursor()
    print("\nDisplaying Match_ID, Unique_Team_ID and TeamName ofthe first 10 rows by Joining Unique_Teams and Teams Tables")
    cursor.execute("Select Teams_in_Matches.Match_ID,Unique_Teams.Unique_Team_ID,Unique_Teams.TeamName From Unique_Teams Inner Join Teams_in_Matches On Unique_Teams.Unique_Team_Id=Teams_in_Matches.Unique_Team_ID Limit 10")
    print("\nMatch_ID \tUnique_Team_ID \tTeamcName")
    result=cursor.fetchall()
    for row in result:
        print(f'{row[0]}\t\t{row[1]}\t\t\t{row[2]}')
    
    con.commit()
    con.close()

def question3f():
    con=connection()
    cursor=con.cursor()
    cursor.execute("Select Unique_Teams.Unique_Team_ID,Unique_Teams.TeamName,Teams.AvgAgeHome,Teams.Season,Teams.ForeignPlayersHome From Unique_Teams,Teams Order By Unique_Teams.Unique_Team_ID  Limit 5")
    result=cursor.fetchall()
    print("\nUnique_Team_ID\tTeam Name\tAvgAgeHome\tSeason\tForeignPlayersHome")
    for row in result:
        print(f'{row[0]}\t\t{row[1]}\t{row[2]}\t\t{row[3]}\t{row[4]}')
    
    con.commit()
    con.close()

def question3g():
    con=connection()
    cursor=con.cursor()
    print("\nDisplaying Unique Team ID,Team Name and Highest Match ID")
    print("\nUnique Team ID\tTeam Name\tHighest Match ID")
    cursor.execute("Select Max(Teams_in_Matches.Match_ID),* From Unique_Teams Inner Join Teams_in_Matches On Unique_Teams.Unique_Team_ID=Teams_in_Matches.Unique_Team_ID Where Unique_Teams.TeamName Like '%y' or Unique_Teams.TeamName Like '%a' Group By Teams_in_Matches.Unique_Team_ID Order By Teams_in_Matches.Match_ID")
    result=cursor.fetchall()
    for row in result:
        print(f'{row[2]}\t\t{row[1]}\t\t{row[0]}')
    con.commit()
    con.close()

    
connection()
question1b()
question1c()
question1d()
question1e()
question2a()
question2b()
question2c()
question2d()
question2e()
question3a()
question3b()
question3c()
question3d()
question3e()
question3f()
question3g()
 