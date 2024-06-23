from .db import db, environment, SCHEMA, add_prefix_for_prod

################################################################################

class Build(db.Model):
    __tablename__ = 'builds'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    name = db.Column(db.String(25), nullable=False)
    character_name = db.Column(db.String(25), nullable=False)
    origin = db.Column(db.String(25), nullable=False)
    race = db.Column(db.String(25), nullable=False)
    sub_race = db.Column(db.String(25), nullable=True)
    background = db.Column(db.String(25), nullable=False)
    strength = db.Column(db.Integer, nullable=False)
    dexterity = db.Column(db.Integer, nullable=False)
    constitution = db.Column(db.Integer, nullable=False)
    intelligence = db.Column(db.Integer, nullable=False)
    wisdom = db.Column(db.Integer, nullable=False)
    charisma = db.Column(db.Integer, nullable=False)
    plus_1 = db.Column(db.String(20), nullable=False)
    plus_2 = db.Column(db.String(20), nullable=False)
    helmet = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('equipment.id')), nullable=True)
    cloak = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('equipment.id')), nullable=True)
    armor = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('equipment.id')), nullable=True)
    gloves = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('equipment.id')), nullable=True)
    boots = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('equipment.id')), nullable=True)
    amulet = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('equipment.id')), nullable=True)
    ring_1 = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('equipment.id')), nullable=True)
    ring_2 = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('equipment.id')), nullable=True)
    main_hand = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('equipment.id')), nullable=True)
    off_hand = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('equipment.id')), nullable=True)
    ranged_mh = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('equipment.id')), nullable=True)
    ranged_oh = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('equipment.id')), nullable=True)
    armor_class = db.Column(db.Integer, nullable=False)
    level = db.Column(db.Integer, nullable=False)

    classes = db.relationship("BuildClass", backref="build", cascade="all, delete-orphan")
    comments = db.relationship("Comment", backref="build", cascade="all, delete-orphan")

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'name': self.name,
            'character_name': self.character_name,
            'origin': self.origin,
            'race': self.race,
            'sub_race': self.sub_race,
            'background': self.background,
            'strength': self.strength,
            'dexterity': self.dexterity,
            'constitution': self.constitution,
            'intelligence': self.intelligence,
            'wisdom': self.wisdom,
            'charisma': self.charisma,
            'plus_1': self.plus_1,
            'plus_2': self.plus_2,
            'helmet': self.helmet,
            'cloak': self.cloak,
            'armor': self.armor,
            'gloves': self.gloves,
            'boots': self.boots,
            'amulet': self.amulet,
            'ring_1': self.ring_1,
            'ring_2': self.ring_2,
            'main_hand': self.main_hand,
            'off_hand': self.off_hand,
            'ranged_mh': self.ranged_mh,
            'ranged_oh': self.ranged_oh,
            'armor_class': self.armor_class,
            'level': self.level,
            'classes': [build_class.to_dict() for build_class in self.classes],
            'comments': [comment.to_dict() for comment in self.comments]
        }

################################################################################

class Class(db.Model):
    __tablename__ = 'classes'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), db.Enum('Cleric', 'Druid', 'Fighter',
                                            'Monk', 'Paladin', 'Ranger',
                                            'Rogue', 'Sorcerer', 'Warlock',
                                            'Wizard'), nullable=False)
    description = db.Column(db.String(250), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description
        }

################################################################################

class BuildClass(db.Model):
    __tablename__ = 'build_classes'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    build_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('builds.id')), nullable=False)
    class_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('classes.id')), nullable=False)
    level = db.Column(db.Integer, nullable=False)
    sub_class = db.Column(db.String(50), nullable=True)

    def to_dict(self):
        return {
            'id': self.id,
            'build_id': self.build_id,
            'class_id': self.class_id,
            'level': self.level,
            'sub_class': self.sub_class
        }

################################################################################

class Origin(db.Model):
    __tablename__ = 'origins'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    description = db.Column(db.String(500), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description
        }

################################################################################

class Race(db.Model):
    __tablename__ = 'races'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    description = db.Column(db.String(500), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description
        }
