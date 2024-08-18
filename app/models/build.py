from .db import db, environment, SCHEMA, add_prefix_for_prod



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
    helmet = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('helmets.id')), nullable=True)
    cloak = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('cloaks.id')), nullable=True)
    armour = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('armours.id')), nullable=True)
    glove = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('gloves.id')), nullable=True)
    boot = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('boots.id')), nullable=True)
    amulet = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('amulets.id')), nullable=True)
    ring_1 = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('rings.id')), nullable=True)
    ring_2 = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('rings.id')), nullable=True)
    melee_mh = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('weapons.id')), nullable=True)
    melee_oh = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('weapons.id')), nullable=True)
    ranged_mh = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('weapons.id')), nullable=True)
    ranged_oh = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('weapons.id')), nullable=True)
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
            'armor': self.armour,
            'gloves': self.glove,
            'boots': self.boot,
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
