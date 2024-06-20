from app.models import db, User, Build, Ability, environment, SCHEMA
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

    ## SEED BUILDS
    build_list = [
        {'name': 'Build 1-1', 'owner_id': 1},
        {'name': 'Build 2-1', 'owner_id': 1},
        {'name': 'Build 1-2', 'owner_id': 2},
        {'name': 'Build 2-2', 'owner_id': 2},
    ]

    for build_data in build_list:
        build = Build(
            name=build_data['name'],
            owner_id=build_data['owner_id']
        )
        db.session.add(build)


    ## SEED ABILITIES
    ability_list = [
        {
            'build_id': 1,
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
            'build_id': 2,
            "strength": 8,
            "dexterity": 16,
            "constitution": 14,
            "intelligence": 8,
            "wisdom": 12,
            "charisma": 16,
            "plus_1": "Charisma",
            "plus_2": "Dexterity"
         },
        {
            'build_id': 3,
            "strength": 8,
            "dexterity": 16,
            "constitution": 14,
            "intelligence": 8,
            "wisdom": 12,
            "charisma": 16,
            "plus_1": "Charisma",
            "plus_2": "Dexterity"
         },
        {
            'build_id': 4,
            "strength": 8,
            "dexterity": 16,
            "constitution": 14,
            "intelligence": 8,
            "wisdom": 12,
            "charisma": 16,
            "plus_1": "Charisma",
            "plus_2": "Dexterity"
         },
    ]

    for ability_data in ability_list:
        abilities = Ability(
            build_id=ability_data['build_id'],
            strength=ability_data['strength'],
            dexterity=ability_data['dexterity'],
            constitution=ability_data['constitution'],
            intelligence=ability_data['intelligence'],
            wisdom=ability_data['wisdom'],
            charisma=ability_data['charisma'],
            plus_1=ability_data['plus_1'],
            plus_2=ability_data['plus_2'],
        )
        db.session.add(abilities)



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
        db.session.execute(f"TRUNCATE table {SCHEMA}.abilities RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM users"))
        db.session.execute(text("DELETE FROM builds"))
        db.session.execute(text("DELETE FROM abilities"))

    db.session.commit()
