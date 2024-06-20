from .db import db, environment, SCHEMA, add_prefix_for_prod

################################################################################

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
    comments = db.relationship("Comment", backref="build", cascade="all, delete-orphan")

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
            'classes': [build_class.to_dict() for build_class in self.classes],
            'comments': [comment.to_dict() for comment in self.comments]
        }

################################################################################

class Class(db.Model):
    __tablename__ = 'classes'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    level = db.Column(db.Integer, nullable=False)
    name = db.Column(db.String(50), db.Enum('Cleric', 'Druid', 'Fighter',
                                            'Monk', 'Paladin', 'Ranger',
                                            'Rogue', 'Sorcerer', 'Warlock',
                                            'Wizard'), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'level': self.level,
            'name': self.name,
        }

################################################################################

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

################################################################################

