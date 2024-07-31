from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)

    builds = db.relationship("Build", backref="user", cascade="all, delete-orphan")
    favorites = db.relationship("Favorite", back_populates="user", cascade="all, delete-orphan")


    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'builds': [build.to_dict() for build in self.builds]
        }

################################################################################

class Comment(db.Model):
    __tablename__ = 'comments'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    build_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('builds.id')), nullable=False)
    message = db.Column(db.String(140), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'build_id': self.build_id,
            'message': self.message
        }



################################################################################

class Favorite(db.Model):
    __tablename__ = 'favorites'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')))
    build_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('builds.id')))

    user = db.relationship('User', back_populates='favorites')
    build = db.relationship('Build', back_populates='favorites')

    def to_dict(self):
        return {
            'user_id': self.user_id,
            'build_id': self.build_id
        }

################################################################################

class Build(db.Model):
    __tablename__ = 'builds'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    name = db.Column(db.String(25), nullable=False)
    character_name = db.Column(db.String(25), nullable=False)
    origin = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('origins.id')), nullable=False)
    race = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('races.id')), nullable=False)
    sub_race = db.Column(db.String(20), nullable=True)
    background = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('backgrounds.id')), nullable=False)
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
    melee_mh = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('equipment.id')), nullable=True)
    melee_oh = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('equipment.id')), nullable=True)
    ranged_mh = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('equipment.id')), nullable=True)
    ranged_oh = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('equipment.id')), nullable=True)
    armor_class = db.Column(db.Integer, nullable=True)
    level = db.Column(db.Integer, nullable=False)

    classes = db.relationship("BuildClass", backref="build", cascade="all, delete-orphan")
    comments = db.relationship("Comment", backref="build", cascade="all, delete-orphan")
    favorites = db.relationship("Favorite", back_populates="build", cascade="all, delete-orphan")

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'name': self.name,
            'character_name': self.character_name,
            'origin': self.origin,
            'race': self.race,
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
            'melee_mh': self.melee_mh,
            'melee_oh': self.melee_oh,
            'ranged_mh': self.ranged_mh,
            'ranged_oh': self.ranged_oh,
            'armor_class': self.armor_class,
            'level': self.level,
            'build_classes': [build_class.to_dict() for build_class in self.classes],
            'comments': [comment.to_dict() for comment in self.comments]
        }

################################################################################


class BuildClass(db.Model):
    __tablename__ = 'build_classes'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    build_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('builds.id')), nullable=False)
    class_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('classes.id')), nullable=False)
    name = db.Column(db.String(50), db.Enum('Cleric', 'Druid', 'Fighter',
                                            'Monk', 'Paladin', 'Ranger',
                                            'Rogue', 'Sorcerer', 'Warlock',
                                            'Wizard'), nullable=False)
    level = db.Column(db.Integer, nullable=False)
    sub_class = db.Column(db.String(50), nullable=True)
    order = db.Column(db.Integer, nullable=False)
    modifier = db.Column(db.String(50), db.Enum('strength', 'dexterity', 'intelligence', 'wisdom', 'charisma'), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'build_id': self.build_id,
            'class_id': self.class_id,
            'name': self.name,
            'level': self.level,
            'sub_class': self.sub_class,
            'order': self.order,
            'modifier': self.modifier
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
    modifier = db.Column(db.String(50), db.Enum('strength', 'dexterity', 'intelligence', 'wisdom', 'charisma'), nullable=False)

    def to_dict(self):
        return {
            'class_id': self.id,
            'name': self.name,
            'description': self.description,
            'modifier': self.modifier
        }

################################################################################

class Origin(db.Model):
    __tablename__ = 'origins'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), db.Enum("Astarion", "Lae'zel", "Gale", "Shadowheart", "Wyll", "Karlach", "The Dark Urge", "Custom"), nullable=False)
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
    name = db.Column(db.String(50), db.Enum("Elf", "Tiefling","Drow", "Human", "Githyanki", "Dwarf", "Half-Elf", "Halfling", "Gnome", "Dragonborn", "Half-Orc"), nullable=False, unique=True)
    description = db.Column(db.String(500), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description
        }

################################################################################

class Background(db.Model):
    __tablename__ = 'backgrounds'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(25), db.Enum("Acolyte", "Charlatan", "Criminal", "Entertainer", "Folk Hero", "Guild Artisan", "Noble", "Outlander", "Sage", "Solder", "Urchin", "Haunted One"), unique=True, nullable=False)
    description = db.Column(db.String(500), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description
        }

################################################################################


class Equipment(db.Model):
    __tablename__ = 'equipment'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String(6), db.Enum("helmet", "cloak", "armor", "gloves",
                                         "boots", "amulet", "ring", "melee", "ranged"), nullable=False)
    name = db.Column(db.String(50), nullable=False, unique=True)
    description = db.Column(db.String(500), nullable=True, unique=True)

    def to_dict(self):
        return {
            'id': self.id,
            'type': self.type,
            'name': self.name,
            'description': self.description
        }
