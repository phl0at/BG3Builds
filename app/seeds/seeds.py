from app.models import db, Origin, Background, Race, User, Build, Class, BuildClass, Comment, Favorite, Equipment, environment, SCHEMA
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

    ################ SEED ORIGINS ################
    origin_list = [
        {'id': 1, 'name': 'Astarion', 'description': 'After two hundred years of serving a cruel master, the vampire spawn Astarion is finally free - free to walk in the sun, free to chase power, and free to take revenge.'},
        {'id': 2, 'name': "Lae'zel", 'description': "Lae'zel was raised ready for a life amongst the stars, mercilessly conquering the cosmos as a githyanki soldier. Grounded, she must deal with a world she doesn't understand, and find a way to server her people in a plane that despises her militant kin."},
        {'id': 3, 'name': 'Gale', 'description': "Gale's wizarding prowess once earned him the love of Mystra, the goddess of magic, until his ambition led him to the brink of catastrophe..."},
        {'id': 4, 'name': 'Shadowheart', 'description': "Shadowheart willingly undertook a ritual to remove her memories in order to protect the secrets of her fellow Shar worshippers. Loss and pain are sacred to her, but her faith is now being tested like never before."},
        {'id': 5, 'name': 'Wyll', 'description': "Known as 'The Blade of Frontiers', Wyll uses his magic to fell the monsters and devils menacing the Sword Coast. In a moment of desperation, he accepted an offer of greater power, forcing him into an infernal game he is struggling to play."},
        {'id': 6, 'name': 'Karlach', 'description': "Karlach has escaped ten years of service in the Hells with nothing but the axe on her back - and the infernal engine blazing furiously where her heart used to be."},
        {'id': 7, 'name': 'The Dark Urge', 'description':  "You remember nothing but a path paved in blood. Unimaginable cruelty whispers to you from within. Can you escape it? Would you even want to?"},
        {'id': 8, 'name': 'Custom', 'description': "Choose your own origins and destiny!"},
    ]
    for origin in origin_list:
        new_origin = Origin(
            id=origin['id'],
            name=origin['name'],
            description=origin['description'],
        )
        db.session.add(new_origin)

    ################ SEED RACES ################
    race_list = [
        { 'id': 1, 'name': 'Elf', 'description': "With ethereal countenances and long lifespans, elves are at home with nature's power, flourishing in light and dark alike"},
        { 'id': 2, 'name': 'Tiefling', 'description': "Descended from devils of the Nine Hells, tieflings face constant suspicion in Faerûn. Thankfully, their arcane abilities make them natural survivors."},
        { 'id': 3, 'name': 'Drow', 'description': "Driven to the Underdark, most drow have adopted a ruthless pragmatism. While the Lolth-sworn delight in the goddess' evil tenets, the Seldarine reject Her attempt to overthrow the leader of the elven pantheon."},
        { 'id': 4, 'name': 'Human', 'description': "The most common face in Faerûn, humans are known for their tenacity, creativity, and endless capacity for growth."},
        { 'id': 5, 'name': 'Githyanki', 'description': "With a ruthlessness borne from mind flayer enslavement, githyanki ride the Astral Sea atop red dragons, bringing their silver swords and psionic might to bear against any trace of the illithid menace."},
        { 'id': 6, 'name': 'Dwarf', 'description': "As durable an unyielding as their homes of stone, dwarves are some of the finest warriors, miners, and smiths of Faerûn."},
        { 'id': 7, 'name': 'Half-Elf', 'description': "Curious, ambitious, and versatile, half-elves are welcome everywhere, but struggle without a community to call their own."},
        { 'id': 8, 'name': 'Halfling', 'description': "Small yet capable, halflings prefer the comforts of home and hearth - but their natural luck and dexterity makes them fine adventurers."},
        { 'id': 9, 'name': 'Gnome', 'description': "Small, clever, and energetic, gnomes use their long lives to explore Faerûn's brightest corners and darkest depths."},
        { 'id': 10, 'name': 'Dragonborn', 'description': "A proud race that values clan and skills above all else. Once enslaved by dragons, they strive to be self-sufficient, not wanting to be beholden to anyone, not even the gods."},
        { 'id': 11, 'name': 'Half-Orc', 'description': "Creatures of intense emotion, half-orcs are more inclined to act than contemplate - whether the rage burning in their bodies compels them to fight, or the love filling their hearts inspires acts of incredible kindness."},
    ]
    for race in race_list:
        new_race = Race(
            id=race['id'],
            name=race['name'],
            description=race['description'],
        )
        db.session.add(new_race)

    ################ SEED BACKGROUNDS ################
    background_list = [
        {'id': 1, 'name':"Acolyte", "description": "You have spent your life in service to a temple, learning sacred rites and providing sacrifices to the god or gods you worship. Serving the gods and discovering their sacred works will guide you to greatness." },
        {'id': 2, 'name':"Charlatan", "description": "You're an expert in manipulation, prone to exaggeration and more than happy to profit from it. Bending the truth and turning allies against each other will lead to greater success down the road." },
        {'id': 3, 'name':"Criminal", "description": "You have a history of breaking the law and survive by leveraging less-than-legal connections. Profiting from criminal enterprise will lead to greater opportunities in the future." },
        {'id': 4, 'name':"Entertainer", "description": "You live to sway and subvert your audience, engaging common crowds and high society alike. Preserving art and bringing joy to the hapless and downtrodden heightens your charismatic aura." },
        {'id': 5, 'name':"Folk Hero", "description": "You're a champion to the common people, challenging tyrants and monsters to protect the helpless. Saving innocents in imminent danger will make your legend grow." },
        {'id': 6, 'name':"Guild Artisan", "description": "Your skill in a particular craft has earned you membership in a mercantile guild, offering privileges and protection while engaging in your art. Repairing and discovering rare crafts will bring new inspiration." },
        {'id': 7, 'name':"Noble", "description": "You were raised in a family among the social elite, accustomed to power and privilege. Accumulating renown, power, and loyalty will raise your status." },
        {'id': 8, 'name':"Outlander", "description": "You grew up in the wilds, learning to survive far from the comforts of civilization. Surviving unusual hazards of the wild will enhance your prowess and understanding." },
        {'id': 9, 'name':"Sage", "description": "You are curious and well-read, with an unending thirst for knowledge. Learning about rare lore of the world will inspire you to put this knowledge to greater purpose." },
        {'id': 10, 'name':"Soldier", "description": "You are trained in battlefield tactics and combat, having served in a militia, mercenary company, or officer corps. Show smart tactics and bravery on the battlefield to enhance you prowess." },
        {'id': 11, 'name':"Urchin", "description": "After surviving a poor and bleak childhood, you know how to make the most out of every little. Using your street smarts bolsters your spirit for the journey ahead." },
    ]
    for background in background_list:
        new_background = Background(
            id = background['id'],
            name = background['name'],
            description = background['description'],
        )
        db.session.add(new_background)


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
            'origin': 8,
            'race': 1,
            'background': 11,
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
            'origin': 8,
            'race': 1,
            'background': 11,
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
            'origin': 8,
            'race': 1,
            'background': 11,
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
            'origin': 8,
            'race': 1,
            'background': 11,
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
        { 'build_id': 1, 'class_id': 8, 'level': 5},
        { 'build_id': 2, 'class_id': 8, 'level': 5},
        { 'build_id': 3, 'class_id': 8, 'level': 5},
        { 'build_id': 4, 'class_id': 8, 'level': 5},
    ]
    for build_class in build_classes_list:
        new_bc = BuildClass(
            build_id=build_class['build_id'],
            class_id=build_class['class_id'],
            level=build_class['level'],
            # sub_class=build_class['sub_class']
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
        db.session.execute(f"TRUNCATE table {SCHEMA}.classes RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.build_classes RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.origins RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.races RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.backgrounds RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM users"))
        db.session.execute(text("DELETE FROM builds"))
        db.session.execute(text("DELETE FROM comments"))
        db.session.execute(text("DELETE FROM favorites"))
        db.session.execute(text("DELETE FROM equipment"))
        db.session.execute(text("DELETE FROM classes"))
        db.session.execute(text("DELETE FROM build_classes"))
        db.session.execute(text("DELETE FROM origins"))
        db.session.execute(text("DELETE FROM races"))
        db.session.execute(text("DELETE FROM backgrounds"))

    db.session.commit()
