from app.models import db, User, Build, Class, BuildClass, Comment, Favorite, Equipment, environment, SCHEMA
from sqlalchemy.sql import text
from werkzeug.security import generate_password_hash

# Adds a demo user, you can add other users here if you want
def seed_all():
    ################ SEED USERS ################
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

    ################ SEED CLASSES ################
    class_list = [
        { 'id': 1, 'name': 'Barbarian', 'description': 'The strong embrace the wild that hides inside - keen instincts, primal physicality, and most of all, an unbridled, unquenchable rage.'},
        { 'id': 2, 'name': 'Bard', 'description': 'Bards know music is more than idle fancy - it is power. Through study and adventure, these traveling troudabours master song, speech, and the magic within'},
        { 'id': 3, 'name': 'Cleric', 'description': 'Clerics are representatives of the gods they worship, wielding potent divine magic for good or ill.'},
        { 'id': 4, 'name': 'Druid', 'description': 'Druids channel the elemental forces of nature and share a deep kinship with animals. Mastery of Wild Shape allows them to transform into beasts from all over the Realms.'},
        { 'id': 5, 'name': 'Fighter', 'description': 'Fighters have mastered the art of combat, wielding weapons with unmatched skill and wearing armor like a second skin.'},
        { 'id': 6, 'name': 'Monk', 'description': 'Some reach enlightenment by languid meditation - others do so in the heat of battle. Monks manipulate ki to empower their own strikes and debilitate their foes.'},
        { 'id': 7, 'name': 'Paladin', 'description': 'A promise made so deeply that it becomes divine in itself flows through a paladin, burning bright enough to inspire allies and smite foes.'},
        { 'id': 8, 'name': 'Ranger', 'description': 'Rangers are unrivalled scouts and trackers, honing a deep connection with nature in order to hunt their favored prey.'},
        { 'id': 9, 'name': 'Rogue', 'description': "With stealth, skill, and uncanny reflexes, rogues' versatility lets them get the upper hand in almost any situation."},
        { 'id': 10, 'name': 'Sorcerer', 'description': 'Sorcerers are natural spellcasters, drawing on inherent magic from a gift or bloodline.'},
        { 'id': 11, 'name': 'Warlock', 'description': 'Bound by a pact to an all-powerful patron, warlocks trade their loyalty for supernatural abilities and unique magic.'},
        { 'id': 12, 'name': 'Wizard', 'description': 'Wizards master the arcane by specializing in individual schools of magic, combining ancient spells with modern research.'},
    ]

    for classes in class_list:
        new_class = Class(
            id=classes['id'],
            name=classes['name'],
            description=classes['description']
        )
        db.session.add(new_class)

    ################ SEED EQUIPMENT ################
    equip_list = [
        { 'id': 1, 'type': 'helmet', 'name': 'Haste Helm', 'description': 'Movement Speed:3' },
        { 'id': 2, 'type': 'cloak', 'name': 'Cloak of Protection', 'description': 'PLUS_Armor Class:1, PLUS_Saving throw:1' },
        { 'id': 3, 'type': 'armor', 'name': 'Leather Armour', 'description': 'Armor Class:11' },
        { 'id': 4, 'type': 'gloves', 'name': 'Gloves of Dexterity', 'description': 'SET_Dexterity:18, PLUS_Attack:1' },
        { 'id': 5, 'type': 'boots', 'name': 'Drow Leather Boots', 'description': None },
        { 'id': 6, 'type': 'amulet', 'name': 'Bronze Necklace', 'description': None },
        { 'id': 7, 'type': 'ring', 'name': 'Caustic Band', 'description': 'PLUS_Acid Damage:2' },
        { 'id': 8, 'type': 'ring', 'name': 'Copper Ring', 'description': None },
        { 'id': 9, 'type': 'melee', 'name': 'Club of Hill Giant Strength', 'description': 'SET_Strength:19' },
        { 'id': 10, 'type': 'melee', 'name': 'Dagger', 'description': 'DAMAGE_Piercing:1-4' },
        { 'id': 11, 'type': 'ranged', 'name': 'Titan String Bow', 'description': 'DAMAGE_Piercing:1-8+1, PLUS_Weapon Damage: str_mod' },
    ]
    for item in equip_list:
        gear = Equipment(
            id=item['id'],
            type=item['type'],
            name=item['name'],
            description=item['description'],
        )
        db.session.add(gear)

    ################ SEED BUILDS ################
    build_list = [
        {
            'name': 'Build 1-1',
            'user_id': 1,
            'character_name': 'Tav',
            'origin': 'custom',
            'race': 'Human',
            'sub_race': None,
            'background': 'Soldier',
            "strength": 14,
            "dexterity": 10,
            "constitution": 16,
            "intelligence": 8,
            "wisdom": 10,
            "charisma": 16,
            "plus_1": "Constitution",
            "plus_2": "Charisma",
            "helmet": 1,
            "cloak": 2,
            "armor": 3,
            "gloves": 4,
            "boots": 5,
            "amulet": 6,
            "ring_1": 7,
            "ring_2": 8,
            "main_hand": 9,
            "off_hand": 10,
            "ranged_mh": 11,
            "ranged_oh": None,
            'armor_class': 15,
            "level": 5
        },
        {
            'name': 'Build 2-1',
            'user_id': 1,
            'character_name': 'Tav',
            'origin': 'custom',
            'race': 'Human',
            'sub_race': None,
            'background': 'Soldier',
            "strength": 14,
            "dexterity": 10,
            "constitution": 16,
            "intelligence": 8,
            "wisdom": 10,
            "charisma": 16,
            "plus_1": "Constitution",
            "plus_2": "Charisma",
            "helmet": 1,
            "cloak": 2,
            "armor": 3,
            "gloves": 4,
            "boots": 5,
            "amulet": 6,
            "ring_1": 7,
            "ring_2": 8,
            "main_hand": 9,
            "off_hand": 10,
            "ranged_mh": 11,
            "ranged_oh": None,
            'armor_class': 15,
            "level": 5
        },
        {
            'name': 'Build 1-2',
            'user_id': 2,
            'character_name': 'Tav',
            'origin': 'custom',
            'race': 'Human',
            'sub_race': None,
            'background': 'Soldier',
            "strength": 14,
            "dexterity": 10,
            "constitution": 16,
            "intelligence": 8,
            "wisdom": 10,
            "charisma": 16,
            "plus_1": "Constitution",
            "plus_2": "Charisma",
            "helmet": 1,
            "cloak": 2,
            "armor": 3,
            "gloves": 4,
            "boots": 5,
            "amulet": 6,
            "ring_1": 7,
            "ring_2": 8,
            "main_hand": 9,
            "off_hand": 10,
            "ranged_mh": 11,
            "ranged_oh": None,
            'armor_class': 15,
            "level": 5
        },
        {
            'name': 'Build 2-2',
            'user_id': 2,
            'character_name': 'Tav',
            'origin': 'custom',
            'race': 'Human',
            'sub_race': None,
            'background': 'Soldier',
            "strength": 14,
            "dexterity": 10,
            "constitution": 16,
            "intelligence": 8,
            "wisdom": 10,
            "charisma": 16,
            "plus_1": "Constitution",
            "plus_2": "Charisma",
            "helmet": 1,
            "cloak": 2,
            "armor": 3,
            "gloves": 4,
            "boots": 5,
            "amulet": 6,
            "ring_1": 7,
            "ring_2": 8,
            "main_hand": 9,
            "off_hand": 10,
            "ranged_mh": 11,
            "ranged_oh": None,
            'armor_class': 15,
            "level": 5
        }
    ]

    for build_data in build_list:
        build = Build(
            name=build_data['name'],
            user_id=build_data['user_id'],
            character_name=build_data['character_name'],
            origin=build_data['origin'],
            race=build_data['race'],
            sub_race=build_data['sub_race'],
            background=build_data['background'],
            strength=build_data['strength'],
            dexterity=build_data['dexterity'],
            constitution=build_data['constitution'],
            intelligence=build_data['intelligence'],
            wisdom=build_data['wisdom'],
            charisma=build_data['charisma'],
            plus_1=build_data['plus_1'],
            plus_2=build_data['plus_2'],
            helmet=build_data['helmet'],
            cloak=build_data['cloak'],
            armor=build_data['armor'],
            gloves=build_data['gloves'],
            boots=build_data['boots'],
            amulet=build_data['amulet'],
            ring_1=build_data['ring_1'],
            ring_2=build_data['ring_2'],
            main_hand=build_data['main_hand'],
            off_hand=build_data['off_hand'],
            ranged_mh=build_data['ranged_mh'],
            ranged_oh=build_data['ranged_oh'],
            armor_class=build_data['armor_class'],
            level=build_data['level']
        )
        db.session.add(build)


    ################ SEED BUILD CLASSES ################
    build_classes_list = [
        { 'build_id': 1, 'class_id': 8, 'level': 5, 'sub_class': 'Gloomstalker'},
        { 'build_id': 2, 'class_id': 8, 'level': 5, 'sub_class': 'Gloomstalker'},
        { 'build_id': 3, 'class_id': 8, 'level': 5, 'sub_class': 'Gloomstalker'},
        { 'build_id': 4, 'class_id': 8, 'level': 5, 'sub_class': 'Gloomstalker'},
    ]
    for build_class in build_classes_list:
        new_bc = BuildClass(
            build_id=build_class['build_id'],
            class_id=build_class['class_id'],
            level=build_class['level'],
            sub_class=build_class['sub_class']
        )
        db.session.add(new_bc)


    ################ SEED COMMENTS ################
    comment_list = [
        {'user_id': 1, 'build_id': 3,  'message': 'such a cool build!'},
        {'user_id': 2, 'build_id': 1,  'message': 'awesome build!'},
    ]

    for comment in comment_list:
        new_comment = Comment(
            user_id = comment['user_id'],
            build_id = comment['build_id'],
            message = comment['message'],
        )
        db.session.add(new_comment)

    ################ SEED FAVORITES ################
    fav_list = [
        { 'user_id': 1, 'build_id': 3 },
        { 'user_id': 2, 'build_id': 1 },
    ]
    for fav in fav_list:
        new_fav = Favorite(
            user_id=fav['user_id'],
            build_id=fav['build_id'],
        )
        db.session.add(new_fav)

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
        db.session.execute(f"TRUNCATE table {SCHEMA}.comments RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.favorites RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.equipment RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM users"))
        db.session.execute(text("DELETE FROM builds"))
        db.session.execute(text("DELETE FROM comments"))
        db.session.execute(text("DELETE FROM favorites"))
        db.session.execute(text("DELETE FROM equipment"))

    db.session.commit()
