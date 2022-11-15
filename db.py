import mysql.connector

db = mysql.connector.connect(
    host='mysql.cs.uky.edu',
    database='inis223', #database
    user='inis223', #username
    password='JATID123'
)
if db.is_connected():
    db_Info = db.get_server_info()
    print("Connected to MySQL Server version", db_Info)
    cursor = db.cursor()
    cursor.execute("select database();")
    record = cursor.fetchone()
    print("You're connected to database:", record)
    cursor.execute("CREATE TABLE IF NOT EXISTS user_leaderboard(name VARCHAR(50), score int, time TIME, id int PRIMARY KEY AUTO_INCREMENT)")
    cursor.execute("SHOW TABLES;")                           
    tableRecords = cursor.fetchall()
    print("Tables in database:", tableRecords)
    cursor.close()