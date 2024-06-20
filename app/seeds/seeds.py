from app.models import db, User, Build, Class, BuildClass, environment, SCHEMA
from sqlalchemy.sql import text
from werkzeug.security import generate_password_hash

# Adds a demo user, you can add other users here if you want
def seed_all():
    ## SEED USERS
    user_list = [
        {'username':'Demo', 'email':'demo@aa.com', 'password':generate_password_hash("password")},
        {'username':'marnie', 'email':'marnie@aa.com', 'password':generate_password_hash("password")},
    ]

    for user_data in user_list:
        user = User(
            username=user_data['username'],
            email=user_data['email'],
            hashed_password=user_data['password'],
        )
        db.session.add(user)

    ## SEED CLASSES
    class_list = [
        { 'level': 1, 'name': 'Ranger'},
        { 'level': 2, 'name': 'Ranger'},
        { 'level': 3, 'name': 'Ranger'},
        { 'level': 4, 'name': 'Ranger'},
        { 'level': 5, 'name': 'Ranger'},
    ]

    for classes in class_list:
        new_class = Class(
            level=classes['level'],
            name=classes['name']
        )
        db.session.add(new_class)

    ## SEED BUILDS
    build_list = [
        {
            'name': 'Build 1-1',
            'owner_id': 1,
            'character_name': 'Tav',
            'origin': 'custom',
            'armor_class': 15,
            "strength": 14,
            "dexterity": 10,
            "constitution": 16,
            "intelligence": 8,
            "wisdom": 10,
            "charisma": 16,
            "plus_1": "Constitution",
            "plus_2": "Charisma"
            },
        {
            'name': 'Build 2-1',
            'owner_id': 1,
            'character_name': 'Tav',
            'origin': 'custom',
            'armor_class': 15,
            "strength": 14,
            "dexterity": 10,
            "constitution": 16,
            "intelligence": 8,
            "wisdom": 10,
            "charisma": 16,
            "plus_1": "Constitution",
            "plus_2": "Charisma"},
        {
            'name': 'Build 1-2',
            'owner_id': 2,
            'character_name': 'Tav',
            'origin': 'custom',
            'armor_class': 15,
            "strength": 14,
            "dexterity": 10,
            "constitution": 16,
            "intelligence": 8,
            "wisdom": 10,
            "charisma": 16,
            "plus_1": "Constitution",
            "plus_2": "Charisma"},
        {
            'name': 'Build 2-2',
            'owner_id': 2,
            'character_name': 'Tav',
            'origin': 'custom',
            'armor_class': 15,
            "strength": 14,
            "dexterity": 10,
            "constitution": 16,
            "intelligence": 8,
            "wisdom": 10,
            "charisma": 16,
            "plus_1": "Constitution",
            "plus_2": "Charisma"},
    ]

    for build_data in build_list:
        build = Build(
            name=build_data['name'],
            owner_id=build_data['owner_id'],
            character_name=build_data['character_name'],
            origin=build_data['origin'],
            armor_class=build_data['armor_class'],
            strength=build_data['strength'],
            dexterity=build_data['dexterity'],
            constitution=build_data['constitution'],
            intelligence=build_data['intelligence'],
            wisdom=build_data['wisdom'],
            charisma=build_data['charisma'],
            plus_1=build_data['plus_1'],
            plus_2=build_data['plus_2']
        )
        db.session.add(build)


    ## SEED BUILD CLASSES
    build_classes_list = [
        { 'build_id': 1, 'class_id': 1},
        { 'build_id': 1, 'class_id': 2},
        { 'build_id': 1, 'class_id': 3},
        { 'build_id': 1, 'class_id': 4},
        { 'build_id': 1, 'class_id': 5},
        { 'build_id': 2, 'class_id': 1},
        { 'build_id': 2, 'class_id': 2},
        { 'build_id': 2, 'class_id': 3},
        { 'build_id': 2, 'class_id': 4},
        { 'build_id': 2, 'class_id': 5},
        { 'build_id': 3, 'class_id': 1},
        { 'build_id': 3, 'class_id': 2},
        { 'build_id': 3, 'class_id': 3},
        { 'build_id': 3, 'class_id': 4},
        { 'build_id': 3, 'class_id': 5},
        { 'build_id': 4, 'class_id': 1},
        { 'build_id': 4, 'class_id': 2},
        { 'build_id': 4, 'class_id': 3},
        { 'build_id': 4, 'class_id': 4},
        { 'build_id': 4, 'class_id': 5},
    ]
    for build_class in build_classes_list:
        new_bc = BuildClass(
            build_id=build_class['build_id'],
            class_id=build_class['class_id'],
        )
        db.session.add(new_bc)




    db.session.commit()



# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_all():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.builds RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM users"))
        db.session.execute(text("DELETE FROM builds"))

    db.session.commit()
