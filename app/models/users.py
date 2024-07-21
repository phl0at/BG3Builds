from .db import db, environment, SCHEMA
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
    favorites = db.relationship("Favorite", backref="user")

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
            'builds': [build.to_dict() for build in self.builds],
            'favorites': [fav.to_dict() for fav in self.favorites]
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
