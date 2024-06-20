from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from sqlalchemy import CheckConstraint

class User(db.Model, UserMixin):
    __tablename__ = 'users'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)

    builds = db.relationship("Build", backref="user", cascade="all, delete-orphan")

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
            'email': self.email,
            'builds': [build.to_dict() for build in self.builds]
        }


class Build(db.Model):
    __tablename__ = 'builds'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(25), nullable=False)
    owner_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    character_name = db.Column(db.String(25), nullable=False)
    origin = db.Column(db.String(25), nullable=False)
    armor_class = db.Column(db.Integer, nullable=False)
    strength = db.Column(db.Integer, nullable=False)
    dexterity = db.Column(db.Integer, nullable=False)
    constitution = db.Column(db.Integer, nullable=False)
    intelligence = db.Column(db.Integer, nullable=False)
    wisdom = db.Column(db.Integer, nullable=False)
    charisma = db.Column(db.Integer, nullable=False)
    plus_1 = db.Column(db.String(12), nullable=False)
    plus_2 = db.Column(db.String(12), nullable=False)

    classes = db.relationship("BuildClass", backref="build", cascade="all, delete-orphan")

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'owner_id': self.owner_id,
            'character_name': self.character_name,
            'origin': self.origin,
            'armor_class': self.armor_class,
            'strength': self.strength,
            'dexterity': self.dexterity,
            'constitution': self.constitution,
            'intelligence': self.intelligence,
            'wisdom': self.wisdom,
            'charisma': self.charisma,
            'plus_1': self.plus_1,
            'plus_2': self.plus_2,
            'classes': [build_class.to_dict() for build_class in self.classes]
        }

class Class(db.Model):
    __tablename__ = 'classes'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    level = db.Column(db.Integer, CheckConstraint('level<6'), nullable=False)
    name = db.Column(db.String(50), db.Enum('Ranger'), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'level': self.level,
            'name': self.name,
            'sub_class': self.sub_class
        }


class BuildClass(db.Model):
    __tablename__ = 'build_classes'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    build_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('builds.id')), nullable=False)
    class_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('classes.id')), nullable=False)

    def to_dict(self):
        return {
            'class_id': self.class_id
        }

























# class Proficiency(db.Model):
#     __tablename__ = 'proficiencies'

#     if environment == "production":
#         __table_args__ = {'schema': SCHEMA}

#     id = db.Column(db.Integer, primary_key=True)
#     build_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('builds.id')), nullable=False)
#     athletics = db.Column(db.Integer, nullable=True)
#     acrobatics = db.Column(db.Integer, nullable=True)
#     sleight_of_hand = db.Column(db.Integer, nullable=True)
#     stealth = db.Column(db.Integer, nullable=True)
#     arcana = db.Column(db.Integer, nullable=True)
#     history = db.Column(db.Integer, nullable=True)
#     investigation = db.Column(db.Integer, nullable=True)
#     nature = db.Column(db.Integer, nullable=True)
#     religion = db.Column(db.Integer, nullable=True)
#     animal_handling = db.Column(db.Integer, nullable=True)
#     insight = db.Column(db.Integer, nullable=True)
#     medicine = db.Column(db.Integer, nullable=True)
#     perception = db.Column(db.Integer, nullable=True)
#     survival = db.Column(db.Integer, nullable=True)
#     deception = db.Column(db.Integer, nullable=True)
#     intimidation = db.Column(db.Integer, nullable=True)
#     performance = db.Column(db.Integer, nullable=True)
#     persuasion = db.Column(db.Integer, nullable=True)

#     def to_dict(self):
#         return {
#             'build_id': self.build_id,
#             'athletics': self.athletics,
#             'acrobatics': self.acrobatics,
#             'sleight_of_hand': self.sleight_of_hand,
#             'stealth': self.stealth,
#             'arcana': self.arcana,
#             'history': self.history,
#             'investigation': self.investigation,
#             'nature': self.nature,
#             'religion': self.religion,
#             'animal_handling': self.animal_handling,
#             'insight': self.insight,
#             'medicine': self.medicine,
#             'perception': self.perception,
#             'survival': self.survival,
#             'deception': self.deception,
#             'intimidation': self.intimidation,
#             'performance': self.performance,
#             'persuasion': self.persuasion,
#         }
