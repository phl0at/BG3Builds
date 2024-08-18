from app.models import db, Origin, Background, Race, \
                        User, Favorite, Build, Comment, \
                        Class, BuildClass,  Helmet, Cloak, \
                        Armour, Glove, Boot, Amulet, Ring, Weapon, \
                        environment, SCHEMA

from sqlalchemy.sql import text
from werkzeug.security import generate_password_hash


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
        { 'id': 1, 'name': 'Barbarian', 'modifier': 'strength', 'description': 'The strong embrace the wild that hides inside - keen instincts, primal physicality, and most of all, an unbridled, unquenchable rage.'},
        { 'id': 2, 'name': 'Bard', 'modifier': 'charisma', 'description': 'Bards know music is more than idle fancy - it is power. Through study and adventure, these traveling troudabours master song, speech, and the magic within'},
        { 'id': 3, 'name': 'Cleric','modifier': 'wisdom', 'description': 'Clerics are representatives of the gods they worship, wielding potent divine magic for good or ill.'},
        { 'id': 4, 'name': 'Druid','modifier': 'wisdom', 'description': 'Druids channel the elemental forces of nature and share a deep kinship with animals. Mastery of Wild Shape allows them to transform into beasts from all over the Realms.'},
        { 'id': 5, 'name': 'Fighter','modifier': 'strength', 'description': 'Fighters have mastered the art of combat, wielding weapons with unmatched skill and wearing armor like a second skin.'},
        { 'id': 6, 'name': 'Monk','modifier': 'wisdom', 'description': 'Some reach enlightenment by languid meditation - others do so in the heat of battle. Monks manipulate ki to empower their own strikes and debilitate their foes.'},
        { 'id': 7, 'name': 'Paladin','modifier': 'charisma', 'description': 'A promise made so deeply that it becomes divine in itself flows through a paladin, burning bright enough to inspire allies and smite foes.'},
        { 'id': 8, 'name': 'Ranger','modifier': 'dexterity', 'description': 'Rangers are unrivalled scouts and trackers, honing a deep connection with nature in order to hunt their favored prey.'},
        { 'id': 9, 'name': 'Rogue','modifier': 'dexterity', 'description': "With stealth, skill, and uncanny reflexes, rogues' versatility lets them get the upper hand in almost any situation."},
        { 'id': 10, 'name': 'Sorcerer','modifier': 'charisma', 'description': 'Sorcerers are natural spellcasters, drawing on inherent magic from a gift or bloodline.'},
        { 'id': 11, 'name': 'Warlock','modifier': 'charisma', 'description': 'Bound by a pact to an all-powerful patron, warlocks trade their loyalty for supernatural abilities and unique magic.'},
        { 'id': 12, 'name': 'Wizard','modifier': 'intelligence', 'description': 'Wizards master the arcane by specializing in individual schools of magic, combining ancient spells with modern research.'},
    ]

    for classes in class_list:
        new_class = Class(
            id=classes['id'],
            name=classes['name'],
            description=classes['description'],
            modifier=classes['modifier']
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
        {'id': 12, 'name':"Haunted One", "description": "A wicked moment, person, or thing that cannot be slain by sword or spell haunts your mind and flickers in your peripheral vision. You carry it wherever your adventure takes you - or perhaps it carries you." },
    ]
    for background in background_list:
        new_background = Background(
            id = background['id'],
            name = background['name'],
            description = background['description'],
        )
        db.session.add(new_background)




    ################ SEED EQUIPMENT ################

    helmet_list = [
        {
         'name': 'Haste Helm',
         'type': 'Clothing',
         'rarity': 'Rare',
         'description': 'Smooth Start: At the start of combat, the wearer gains Momentum for 3 turns.',
         'modifiers': None,
         'spell': None,
         'img': 'Haste Helm'
        },
        {
         'name': 'Diadem of Arcane Synergy',
         'type': 'Clothing',
         'rarity': 'Uncommon',
         'description': 'Synergetic Moments: When you inflict a condition, gain Arcane Synergy for 2 turns.',
         'modifiers': None,
         'spell': 'Arcane Synergy',
         'img': 'Diadem of Arcane Synergy'
        },
        {

         'name': 'Mask of Soul Perception',
         'type': 'Clothing',
         'rarity': 'Very Rare',
         'description': 'Soul Perception: Gain a +2 bonus to Attack rolls, Initiative Rolls, and Perception Checks.',
         'modifiers': None,
         'spell': 'Detect Thoughts',
         'img': 'Mask of Soul Perception'
        },
        {
         'name': 'Circlet of Hunting',
         'type': 'Clothing',
         'rarity': 'Very Rare',
         'description': "Hunter's Eye: You gain a +1d4 bonus to Attack rolls against creatures marked by Hunter's Mark, True Strike, Faerie Fire, or Guiding Bolt.",
         'modifiers': None,
         'spell': None,
         'img': 'Tiara Grey'
        },
    ]

    for helmet in helmet_list:
        new_helmet = Helmet(
            name = helmet['name'],
            type = helmet['type'],
            rarity = helmet['rarity'],
            description = helmet['description'],
            modifiers = helmet['modifiers'],
            spell = helmet['spell'],
            img = helmet['img'],
            )
        db.session.add(new_helmet)


    ################################################

    cloak_list = [
        {
         'name': 'Cloak of Protection',
         'rarity': 'Uncommon',
         'description': 'Description: Grants a +1 bonus to Armor Class and Saving Throw.',
         'modifiers': 'armor_class+1',
         'spell': None,
         'img': 'Cloak of Protection'
        },
        {
         'name': 'The Deathstalker Mantle',
         'rarity': 'Rare',
         'description': 'The Shadow Itself: Once per turn when you kill an enemy, shroud yourself in primaeval darkness to become Invisible for 2 turns.',
         'modifiers': None,
         'spell': None,
         'img': "The Deathstalker Mantle"
        },
        {
         'name': 'Shade Slayer Cloak',
         'rarity': 'Very Rare',
         'description': 'Stealthy Critical: While Hiding, the number you need to roll a Critical Hit while attacking is reduced by 1. This effect can stack.',
         'modifiers': None,
         'spell': None,
         'img': 'Shade Slayer Cloak'
        },
        {
         'name': 'Cindermoth Cloak',
         'rarity': 'Uncommon',
         'description': 'Flaming Shroud: A creature that damages the wearer within 2m / 7ft receives Burning.',
         'modifiers': None,
         'spell': None,
         'img': "Cindermoth Cloak"
        },
        {
         'name': 'Reverse Rain Cloak',
         'rarity': 'Uncommon',
         'description': 'Description: The wearer is perpetually just a little bit damp.',
         'modifiers': 'Wet',
         'spell': None,
         'img': 'Reverse Rain Cloak'
        },
    ]

    for cloak in cloak_list:
        new_cloak = Cloak(
            name = cloak['name'],
            rarity = cloak['rarity'],
            description = cloak['description'],
            modifiers = cloak['modifiers'],
            spell = cloak['spell'],
            img = cloak['img'],
            )
        db.session.add(new_cloak)


    ################################################


    armour_list = [
        {
         'name': 'Leather Armour',
         'type': 'Light',
         'rarity': 'Common',
         'description': 'Description: Dark, messy stains line the armholes of the well-used leather breastplate.',
         'modifiers': None,
         'spell': None,
         'armour_class': 11,
         'img': 'Leather Armour'
        },
        {
         'name': 'Yuan Ti Scale Mail',
         'type': 'Medium',
         'rarity': 'Rare',
         'description': 'Exotic Material: Add your full Dexterity Modifier to your Armour Class. Additionally, this armour does not impose Disadvantage on Stealth Ability Checks.',
         'modifiers': 'armor_class+dexmod',
         'spell': None,
         'armour_class': 15,
         'img': 'Scale Mail_2'
        },
        {
         'name': 'Bhaalist Armor',
         'type': 'Light',
         'rarity': 'Very Rare',
         'description': 'Description: Bhaal, Lord of Murder, was forced to walk the world as a mortal man during a period of history called the Time of Troubles. He was more vulnerable than he had ever been. But Bhaal was cunning. He had contingencies in case he died.&*&Aura of Murder: Enemies within 2m / 6.5ft become Vulnerable to Piercing damage, unless they are Resistant or Immune to it.',
         'modifiers': 'Aura of Murder',
         'spell': None,
         'armour_class': 14,
         'img': 'Bhaalist Armor'
        },
        {
         'name': 'Dark Justiciar Half Plate',
         'type': 'Medium',
         'rarity': 'Rare',
         'description': "Description: Shar's aspect winds its way though the patterns and pauldrons of this half plate, and any light cast nearby seems to almost quiver away from it, afraid. For even the light knows that the clank of this armour is swiftly followed by the Dark Justiciar's silent blade.&*&Shar's Umbrae: While obscured, the wearer has Advantage on Stealth Checks. Additionally, gain advantage on Constitution Saving Throws",
         'modifiers': None,
         'spell': "Shar's Aegis",
         'armour_class': 16,
         'img': 'Dark Justiciar Half Plate'
        },
        {
         'name': 'Helldusk Armour',
         'type': 'Heavy',
         'rarity': 'Legendary',
         'description': "Description: Carixim, soul-stuffed forgemaster of hellish Avernus, hammers away ceaselessly at new creations. Questions of morality and destiny do not concern him. Conscience is for his betters. He works with cheer, his swollen skin moaning soothingly.&*&\
            Infernal Retribution: When you succeed a Saving Throw, the caster receives Burning for 3 turns.&*&\
            Prime Aegis of Fire: You have Resistance to Fire damage and cannot be Burned. Additionally, you are considered Proficient with this armor while wearing it and you take 3 less damage from all sources.",
         'modifiers': None,
         'spell': "Fly",
         'armour_class': 21,
         'img': 'Helldusk Armour'
        },
    ]

    for armour in armour_list:
        new_armour = Armour(
            name = armour['name'],
            type = armour['type'],
            rarity = armour['rarity'],
            description = armour['description'],
            modifiers = armour['modifiers'],
            spell = armour['spell'],
            armour_class = armour['armour_class'],
            img = armour['img'],
            )
        db.session.add(new_armour)


    ################################################

    glove_list = [

        {
         'name': 'Gloves of Dexterity',
         'type': 'Clothing',
         'rarity': 'Very Rare',
         'description': "Description: Set the wearer's Dexterity score to 18. This enchantment has no effect if their Dexterity is higher without it.",
         'modifiers': 'Dexterity=18,Attack+1',
         'spell': None,
         'img': 'Gloves of Dexterity'
        },
        {
         'name': 'Bhaalist Gloves',
         'type': 'Clothing',
         'rarity': 'Very Rare',
         'description': "Description: When the Lord of Murder, Bhaal, was rendered mortal, he knew his days were numbered. His vile machinations had gained him many enemies. Those days ran out and Bhaal was indeed killed, not by a god, but by a man with hawkish features named Cyric.&*&\
            Garrotte: Wrap a shadow rope around a Humanoid creature's throat to deal 1d10 Bludgeoning damage and start Garrotting it (DC 14 Strength saving throw to avoid becoming Garrotted for 3 turns).",
         'modifiers': "Attack+1",
         'spell': 'Garrote',
         'img': 'Bhaalist Gloves',
        },
        {
         'name': 'Craterflesh Gloves',
         'type': 'Clothing',
         'rarity': 'Rare',
         'description': "Description: Indents on the fingertips of these gloves are ringed with tiny meteorites, lined in a shimmering purple light rather than the rich red of astral flame.&*&\
            Craterous Wounds: Whenever you score a Critical Hit, deal an additional 1d6 Force damage.",
         'modifiers': "damage+1d6&*&Force",
         'spell': None,
         'img': 'Craterflesh Gloves',
        },
        {
         'name': 'Dark Justiciar Gauntlets',
         'type': 'Clothing',
         'rarity': 'Uncommon',
         'description': "Description: The grip of darkness is a fear felt by many. The grip of a Dark Justiciar's Gauntlets is a sacred fear reserved for an unfortunate few.&*&\
            Umbral Attack: Your weapon attacks deal an additional 1d4 Necrotic damage.",
         'modifiers': "damage+1d4&*&Necrotic",
         'spell': None,
         'img': 'Dark Justiciar Gauntlets'
        },

        {
         'name': 'Gloves of Archery',
         'type': 'Clothing',
         'rarity': 'Uncommon',
         'description': "Description: Banded in dark iron, these gloves are embossed with the brass likeness of an elf against a trio of arrows in flight.&*&\
            Corellon's Guiding Hand: You gain Proficiency with Longbows and Shortbows. Additionally, your ranged weapon attacks deal +2 damage.",
         'modifiers': "damage+2",
         'spell': None,
         'img': 'Gloves of Archery',
        },
    ]

    for glove in glove_list:
        new_glove = Glove(
            name = glove['name'],
            type = glove['type'],
            rarity = glove['rarity'],
            description = glove['description'],
            modifiers = glove['modifiers'],
            spell = glove['spell'],
            img = glove['img'],
            )
        db.session.add(new_glove)


    ################################################


    boot_list = [
        {
         'name': 'Drow Leather Boots',
         'type': 'Clothing',
         'rarity': 'Common',
         'description': 'Description: Shallow, web-like lines have been tooled into these boiled leather boots.',
         'modifiers': None,
         'spell': None,
         'img': 'Drow Leather Boots'
        },
        {
         'name': 'Boots of Stormy Clamour',
         'type': 'Clothing',
         'rarity': 'Uncommon',
         'description': "Description: Peals of thunder rumble at the back of your skull with every step taken in these boots.&*&Arcane Echomalefaction: When the wearer inflicts a condition upon a hostile creature, they also inflict 2 turns of Reverberation.",
         'modifiers': "Reverberation",
         'spell': None,
         'img': 'Boots of Stormy Clamour',
        },

        {
         'name': 'Dark Justiciar Boots',
         'type': 'Medium',
         'rarity': 'Rare',
         'description': "Description: Scratched in places, scorched in others, and worn thin at the heel, these boots bear the indelible marks of experience. &*&\
            Shadow Teleportation: Teleport to an unoccupied, obscured spot.",
         'modifiers': None,
         'spell': 'Shadow Teleportation',
         'img': 'Dark Justiciar Boots',
        },

        {
         'name': 'Disintegrating Night Walkers',
         'type': 'Clothing',
         'rarity': 'Very Rare',
         'description': "Description: Darker than a starless night, Night Walkers are made for secrecy in the honour of Shar. This particular pair was found deep in the ruins of an Underdark fortress. Though the leather is old and the magic is fading, the boots were recently cleaned and oiled with care.&*&\
            Night Walker: Can't be Enwebbed, Entangled, or Ensnared and can't slip on Grease or Ice.",
         'modifiers': None,
         'spell': "Misty Step",
         'img': 'Disintegrating Night Walkers',
        },

        {
         'type': 'Medium',
         'name': 'Boots of Persistence',
         'rarity': 'Very Rare',
         'description': "Description: 'If I had a copper for all the adventurin folk I seen gutted or cut up, or clawed like they was made of wet paper, just cause they couldn't move quick enough when speed might have saved em... well, I'd be suckin good brandy from crystal rather than this fuckin swill.' - Overheard in a tavern in Baldur's Gate.&*&\
            Legendary Mobility: You gain Freedom of Movement and Longstrider.",
         'modifiers': None,
         'spell': "Freedom of Movement&*&Longstrider",
         'img': 'Boots of Persistence',
        },
    ]

    for boot in boot_list:
        new_boot = Boot(
            name = boot['name'],
            type = boot['type'],
            rarity = boot['rarity'],
            description = boot['description'],
            modifiers = boot['modifiers'],
            spell = boot['spell'],
            img = boot['img'],
            )
        db.session.add(new_boot)


    ################################################

    amulet_list = [
        {
         'name': 'Amulet of Bhaal',
         'rarity': 'Legendary',
         'description': 'First Blood: On a hit, inflict Bleeding upon targets that have maximum Hit Points.',
         'modifiers': None,
         'spell': None,
         'img': 'Amulet of Bhaal'
        },

        {
         'name': 'Amulet of the Harpers',
         'rarity': 'Rare',
         'description': 'Description: Gives the wearer advantage with Wisdom Saving Throws. &*& Grants Ability: Shield',
         'modifiers': None,
         'spell': 'Shield',
         'img': 'Amulet of the Harpers'
        },

        {
         'name': 'Periapt of Wound Closure',
         'rarity': 'Rare',
         'description': 'Wound Closure: When Downed, automatically stabilize at the start of the turn &*& Potent Healing: Maximize the number of Hit Points restored.',
         'modifiers': None,
         'spell': None,
         'img': 'Periapt of Wound Closure',
        },

        {
         'name': 'Amulet of Greater Health',
         'rarity': 'Very Rare',
         'description': "Description: Set the wearer's Constitution score to 23. The enchantment has no effect if their Constitution score is higher without it. Additionally, gain Advantage on Constitution Saving Throws.",
         'modifiers': 'constitution=23',
         'spell': None,
         'img': 'Amulet of Greater Health',
        },

        {
         'name': 'Amulet of the Devout',
         'rarity': 'Very Rare',
         'description': "High Spellcasting: You gain a 2 bonus to Spell Save DC &*& Godswill: You gain an additional use of Channel Divinity.",
         'modifiers': None,
         'spell': 'Godswill',
         'img': 'Amulet of the Devout',
        },
    ]

    for amulet in amulet_list:
        new_amulet = Amulet(
            name = amulet['name'],
            rarity = amulet['rarity'],
            description = amulet['description'],
            modifiers = amulet['modifiers'],
            spell = amulet['spell'],
            img = amulet['img'],
            )
        db.session.add(new_amulet)

    ################################################

    ring_list = [
        {
         'name': 'Caustic Band',
         'rarity': 'Very Rare',
         'description': 'Malefic Excretion: Your weapon attacks also deal 2 Acid damage.',
         'modifiers': 'damage+2&*&Acid',
         'spell': None,
         'img': 'Caustic Band'
        },
        {
         'name': 'Callous Glow Ring',
         'rarity': 'Uncommon',
         'description': 'Callous Glow: The wearer deals an additional 2 points of Radiant damage against creatures that are illuminated.',
         'modifiers': 'damage+2&*&Radiant',
         'spell': None,
         'img': 'Callous Glow Ring'
        },

        {
         'name': "Killer's Sweetheart",
         'rarity': 'Very Rare',
         'description': 'Executioner: When you kill a creature, your next Attack roll will be a Critical Hit. This can only happen once per long rest.',
         'modifiers': None,
         'spell': "Executioner",
         'img': "Killer's Sweetheart",
        },

        {
         'name': 'Ring of Arcane Synergy',
         'rarity': 'Rare',
         'description': 'Synergetic Cantrip: When you deal damage with a Cantrip, you gain Arcane Synergy for 2 turns.',
         'modifiers': None,
         'spell': 'Arcane Synergy',
         'img': 'Ring of Arcane Synergy',
        },

        {
         'name': 'Ring of Free Action',
         'rarity': 'Rare',
         'description': 'Unwavering: You ignore the effects of Difficult Terrain, and cannot be Paralyzed or Restrained.',
         'modifiers': None,
         'spell': None,
         'img': 'Ring of Free Action',
        },
    ]
    for ring in ring_list:
        new_ring = Ring(
            name = ring['name'],
            rarity = ring['rarity'],
            description = ring['description'],
            modifiers = ring['modifiers'],
            spell = ring['spell'],
            img = ring['img'],
            )
        db.session.add(new_ring)

    ################################################

    weapon_list = [
        {
         'name': 'Club of Hill Giant Strength',
         'type': 'Club',
         'range': 'Melee',
         'rarity': 'Uncommon',
         'description': "Splinters of a Giant's Might: Increase Strength to 19.",
         'modifiers': 'strength=19',
         'spell': None,
         'damage': '1d4',
         'damage_bonus': 0,
         'damage_type': 'Bludgeoning',
         'damage_mod': 'Strength',
         'img': 'Club of Hill Giant Strength'
        },

        {
         'name': "Assassin's Touch",
         'type': 'Dagger',
         'range': 'Melee',
         'rarity': 'Uncommon',
         'description': 'Deathly Slumber: Deals an additional 1d4 Necrotic damage to creatures that are Knocked out or Sleeping.',
         'modifiers': None,
         'spell': None,
         'damage': '1d4',
         'damage_bonus': 1,
         'damage_type': 'Piercing',
         'damage_mod': 'Dexterity',
         'img': 'Dagger_1'
        },

        {
         'name': 'Titanstring Bow',
         'range': 'Ranged',
         'type': 'Long Bow',
         'rarity': 'Rare',
         'description': 'Titan Weapon: This weapon deals additional damage equal to your Strength Modifier.',
         'modifiers': None,
         'spell': None,
         'damage': '1d8',
         'damage_bonus': 1,
         'damage_type': 'Piercing',
         'damage_mod': 'Dexterity&*&Strength',
         'img': 'Long Bow_2'
        },

        {
         'name': 'Knife of the Undermountain King',
         'type': 'Shortsword',
         'range': 'Melee',
         'rarity': 'Very Rare',
         'description': 'Description: Snatched from the realm of the mad wizard Halaster Blackoak, this knife became a prized keepsake of a duergar king.&*&\
            Organ Rearranger: Reduce the number you need to roll a Critical Hit while attacking by 1. When you roll 2 damage or less, reroll the dice, taking the highest result &*& Shadow Blade: You have Advantage on Attack rolls against Lightly or Heavily Obscured targets when using this blade.',
         'modifiers': None,
         'spell': None,
         'damage': '1d6',
         'damage_bonus': 2,
         'damage_type': 'Piercing',
         'damage_mod': 'Dexterity***Strength',
         'img': 'Knife of the Undermountain King'
        },

        {
         'name': "Balduran's Giantslayer",
         'type': 'Greatsword',
         'range': 'Melee',
         'rarity': 'Legendary',
         'description': "Description: Wielded by Balduran, the founder of Baldur's Gate and friend to his guardian dragon, a great glittering wyrm called Ansur. Fellowship can be undone, though, as easily as you or I might unlace the strings of our shoes, and it was in a time of skullduggery and hardship that Balduran killed Ansur, carrying out the deed with this sword.&*&\
            Giantslayer: On a hit, double the damage from your Strength modifier. This weapon grants you Advantage on Attack rolls against Large, Huge or Gargantuan creatures.",
         'modifiers': 'damage+strmod',
         'spell': None,
         'damage': '2d6',
         'damage_bonus': 3,
         'damage_type': 'Slashing',
         'damage_mod': 'Strength',
         'img': "Balduran's Giantslayer"
        },

        {
         'name': 'Poo Scraper',
         'type': 'Dagger',
         'range': 'Melee',
         'rarity': 'Common',
         'description': 'Description: Fecund and revolting, the Abyss is not the worst place this has been.',
         'modifiers': None,
         'spell': None,
         'damage': '1d4',
         'damage_bonus': 0,
         'damage_type': 'Piercing',
         'damage_mod': 'Dexterity***Strength',
         'img': 'Poo Scraper'
        },

        {
         'name': 'Gontr Mael',
         'type': 'Longbow',
         'range': 'Ranged',
         'rarity': 'Legendary',
         'description': "Description: Gontr Mael blasted from the corpse of the Steelwatcher Titan: a bow formed from the boiling slag and weird whispering gyros inherent to the mechanical giant. It must have acted as the Titan's abdomen, exchanging muscle for immaculate steel.&*&\
            Promised Victory: On a hit, possibly inflict Guiding Bolt upon the target &*& Gontr Mael: This object shines with a glowing light radius of 6m / 20ft.",
         'modifiers': None,
         'spell': 'Haste',
         'damage': '1d8',
         'damage_bonus': 3,
         'damage_type': 'Piercing',
         'damage_mod': 'Dexterity',
         'img': 'Gontr Mael'
        },

        {
         'name': 'Hellfire Hand Crossbow',
         'type': 'Hand Crossbow',
         'range': 'Ranged',
         'rarity': 'Very Rare',
         'description': "Description: Rigged to draw on the skin-peeling hellfire of Avernus by a resourceful devil, this crossbow's size is no indication of its deadly potential.&*&\
            Hellstalker: Possibly inflict Burning when attacking while Hiding or Invisible.",
         'modifiers': None,
         'spell': 'Scorching Ray',
         'damage': '1d6',
         'damage_bonus': 2,
         'damage_type': 'Piercing',
         'damage_mod': 'Dexterity',
         'img': 'Hellfire Hand Crossbow'
        },

        {
         'name': "Ne'er Misser",
         'type': 'Hand Crossbow',
         'range': 'Ranged',
         'rarity': 'Rare',
         'description': "Description: On the stock, the crafter of this crossbow etched in tiny print: 'Ifn yer gonna miss, why dontchyae stop being a wally, and hit instead!'&*&Damage Type: Attacks with this weapon deal Force damage.",
         'modifiers': None,
         'spell': 'Magic Missile',
         'damage': '1d6',
         'damage_bonus': 1,
         'damage_type': 'Force',
         'damage_mod': 'Dexterity',
         'img': "Ne'er Misser"
        },

        {
         'name': 'Blightbringer',
         'type': 'Shortbow',
         'range': 'Ranged',
         'rarity': 'Very Rare',
         'description': 'Description: Conducting a series of increasingly sick rituals - involving the ashes of a gnome and silkworms fed fat on the corpse of a dwarven cleric - the goblin shaman Kirruk Redrats created this deadly bow.&*&\
            Blightbringer: Attacking Gnomes or Dwarves with this weapon receives a 1d4 bonus to Attack and Damage rolls &*& Prey Decelerator: When this weapon lands a Critical Hit, it also Slows the target.',
         'modifiers': 'Blightbringer',
         'spell': 'Prey Decelerator',
         'damage': '1d6',
         'damage_bonus': 1,
         'damage_type': 'Piercing',
         'damage_mod': 'Dexterity',
         'img': 'Blightbringer'
        },

    ]
    for weapon in weapon_list:
        new_weapon = Weapon(
            name = weapon['name'],
            range = weapon['range'],
            type = weapon['type'],
            rarity = weapon['rarity'],
            description = weapon['description'],
            modifiers = weapon['modifiers'],
            spell = weapon['spell'],
            damage = weapon['damage'],
            damage_bonus = weapon['damage_bonus'],
            damage_type = weapon['damage_type'],
            damage_mod = weapon['damage_mod'],
            img = weapon['img'],
            )
        db.session.add(new_weapon)



    ################ SEED BUILDS ################
    build_list = [
        {
            'name': 'Fiery Berserker',
            'user_id': 1,
            'character_name': 'Karlach',
            'origin': 6,
            'race': 2,
            'background': 8,
            "strength": 17,
            "dexterity": 14,
            "constitution": 16,
            "intelligence": 8,
            "wisdom": 8,
            "charisma": 10,
            "plus_1": "constitution",
            "plus_2": "strength",
            "helmet": None,
            "cloak": None,
            "armour": None,
            "glove": None,
            "boot": None,
            "amulet": None,
            "ring_1": None,
            "ring_2": None,
            "melee_mh": None,
            "melee_oh": None,
            "ranged_mh": None,
            "ranged_oh": None,
            'armor_class': 10,
            "level": 12
        },
        {
            'name': 'Shadow Assassin',
            'user_id': 1,
            'character_name': 'Tav',
            'origin': 8,
            'race': 1,
            'background': 11,
            "strength": 8,
            "dexterity": 17,
            "constitution": 10,
            "intelligence": 8,
            "wisdom": 16,
            "charisma": 14,
            "plus_1": "wisdom",
            "plus_2": "dexterity",
            "helmet": None,
            "cloak": None,
            "armour": None,
            "glove": None,
            "boot": None,
            "amulet": None,
            "ring_1": None,
            "ring_2": None,
            "melee_mh": None,
            "melee_oh": None,
            "ranged_mh": None,
            "ranged_oh": None,
            'armor_class': 10,
            "level": 12
        },
        {
            'name': 'Stabby Rogue',
            'user_id': 2,
            'character_name': 'Astarion',
            'origin': 1,
            'race': 1,
            'background': 2,
            "strength": 10,
            "dexterity": 16,
            "constitution": 14,
            "intelligence": 8,
            "wisdom": 10,
            "charisma": 16,
            "plus_1": "dexterity",
            "plus_2": "charisma",
            "helmet": None,
            "cloak": None,
            "armour": None,
            "glove": None,
            "boot": None,
            "amulet": None,
            "ring_1": None,
            "ring_2": None,
            "melee_mh": None,
            "melee_oh": None,
            "ranged_mh": None,
            "ranged_oh": None,
            'armor_class': 10,
            "level": 12
        },
        {
            'name': 'Eldrich Blastin',
            'user_id': 2,
            'character_name': 'Wyll',
            'origin': 5,
            'race': 4,
            'background': 5,
            "strength": 10,
            "dexterity": 16,
            "constitution": 14,
            "intelligence": 8,
            "wisdom": 10,
            "charisma": 16,
            "plus_1": "dexterity",
            "plus_2": "charisma",
            "helmet": None,
            "cloak": None,
            "armour": None,
            "glove": None,
            "boot": None,
            "amulet": None,
            "ring_1": None,
            "ring_2": None,
            "melee_mh": None,
            "melee_oh": None,
            "ranged_mh": None,
            "ranged_oh": None,
            'armor_class': 10,
            "level": 12
        },
        {
            'name': 'Wise Wizard',
            'user_id': 1,
            'character_name': 'Gale',
            'origin': 3,
            'race': 4,
            'background': 9,
            "strength": 8,
            "dexterity": 14,
            "constitution": 16,
            "intelligence": 16,
            "wisdom": 12,
            "charisma": 8,
            "plus_1": "constitution",
            "plus_2": "intelligence",
            "helmet": None,
            "cloak": None,
            "armour": None,
            "glove": None,
            "boot": None,
            "amulet": None,
            "ring_1": None,
            "ring_2": None,
            "melee_mh": None,
            "melee_oh": None,
            "ranged_mh": None,
            "ranged_oh": None,
            'armor_class': 10,
            "level": 12
        },
        {
            'name': 'Astral Combatant',
            'user_id': 1,
            'character_name': "Lae'zel",
            'origin': 2,
            'race': 5,
            'background': 10,
            "strength": 17,
            "dexterity": 16,
            "constitution": 14,
            "intelligence": 10,
            "wisdom": 8,
            "charisma": 8,
            "plus_1": "dexterity",
            "plus_2": "strength",
            "helmet": None,
            "cloak": None,
            "armour": None,
            "glove": None,
            "boot": None,
            "amulet": None,
            "ring_1": None,
            "ring_2": None,
            "melee_mh": None,
            "melee_oh": None,
            "ranged_mh": None,
            "ranged_oh": None,
            'armor_class': 10,
            "level": 12
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
            armour=build_data['armour'],
            glove=build_data['glove'],
            boot=build_data['boot'],
            amulet=build_data['amulet'],
            ring_1=build_data['ring_1'],
            ring_2=build_data['ring_2'],
            melee_mh=build_data['melee_mh'],
            melee_oh=build_data['melee_oh'],
            ranged_mh=build_data['ranged_mh'],
            ranged_oh=build_data['ranged_oh'],
            armor_class=build_data['armor_class'],
            level=build_data['level']
        )
        db.session.add(build)




    ################ SEED BUILD CLASSES ################
    build_classes_list = [
        { 'build_id': 1, 'class_id': 1, 'name': 'Barbarian', 'modifier': 'strength', 'level': 12, 'sub_class': None, 'order': 1},
        { 'build_id': 2, 'class_id': 8, 'name': 'Ranger', 'modifier': 'dexterity', 'level': 12, 'sub_class': None, 'order': 1},
        { 'build_id': 3, 'class_id': 9, 'name': 'Rogue', 'modifier': 'dexterity', 'level': 12, 'sub_class': None, 'order': 1},
        { 'build_id': 4, 'class_id': 11, 'name': 'Warlock', 'modifier': 'charisma', 'level': 12, 'sub_class': None, 'order': 1},
        { 'build_id': 5, 'class_id': 12, 'name': 'Wizard', 'modifier': 'intelligence', 'level': 12, 'sub_class': None, 'order': 1},
        { 'build_id': 6, 'class_id': 5, 'name': 'Fighter', 'modifier': 'strength', 'level': 12, 'sub_class': None, 'order': 1},
    ]
    for build_class in build_classes_list:
        new_bc = BuildClass(
            build_id=build_class['build_id'],
            class_id=build_class['class_id'],
            name=build_class['name'],
            level=build_class['level'],
            sub_class=build_class['sub_class'],
            order=build_class['order'],
            modifier=build_class['modifier']
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

    favorite_list = [
        {'user_id': 1, 'build_id': 3},
        {'user_id': 2, 'build_id': 1}
    ]

    for favorite in favorite_list:
        new_fav = Favorite(
            user_id = favorite['user_id'],
            build_id = favorite['build_id']
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
        db.session.execute(f"TRUNCATE table {SCHEMA}.favorites RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.comments RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.helmets RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.cloaks RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.armours RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.gloves RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.boots RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.amulets RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.rings RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.weapons RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.classes RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.build_classes RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.origins RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.races RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.backgrounds RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM users"))
        db.session.execute(text("DELETE FROM builds"))
        db.session.execute(text("DELETE FROM favorites"))
        db.session.execute(text("DELETE FROM comments"))
        db.session.execute(text("DELETE FROM helmets"))
        db.session.execute(text("DELETE FROM cloaks"))
        db.session.execute(text("DELETE FROM armours"))
        db.session.execute(text("DELETE FROM gloves"))
        db.session.execute(text("DELETE FROM boots"))
        db.session.execute(text("DELETE FROM amulets"))
        db.session.execute(text("DELETE FROM rings"))
        db.session.execute(text("DELETE FROM weapons"))
        db.session.execute(text("DELETE FROM classes"))
        db.session.execute(text("DELETE FROM build_classes"))
        db.session.execute(text("DELETE FROM origins"))
        db.session.execute(text("DELETE FROM races"))
        db.session.execute(text("DELETE FROM backgrounds"))

    db.session.commit()
