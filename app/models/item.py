from .db import db, environment, SCHEMA, add_prefix_for_prod


class Helmet(db.Model):
    __tablename__ = 'helmets'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False, unique=True)
    type = db.Column(db.String(50), nullable=True)
    rarity = db.Column(db.String(50), nullable=False)
    description = db.Column(db.String(1000), nullable=True, unique=True)
    modifiers = db.Column(db.String(100), nullable=True)
    spell = db.Column(db.String(50), nullable=True)
    img = db.Column(db.String(50), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'type': self.type,
            'rarity': self.rarity,
            'description': self.description,
            'modifiers': self.modifiers,
            'spell': self.spell,
            'img': self.img,
        }

################################################################################

class Cloak(db.Model):
    __tablename__ = 'cloaks'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False, unique=True)
    rarity = db.Column(db.String(50), nullable=False)
    description = db.Column(db.String(1000), nullable=True, unique=True)
    modifiers = db.Column(db.String(100), nullable=True)
    spell = db.Column(db.String(50), nullable=True)
    img = db.Column(db.String(50), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'rarity': self.rarity,
            'description': self.description,
            'modifiers': self.modifiers,
            'spell': self.spell,
            'img': self.img,
        }

################################################################################

class Armour(db.Model):
    __tablename__ = 'armours'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False, unique=True)
    type = db.Column(db.String(50), nullable=True)
    rarity = db.Column(db.String(50), nullable=False)
    description = db.Column(db.String(1000), nullable=True, unique=True)
    modifiers = db.Column(db.String(100), nullable=True)
    spell = db.Column(db.String(50), nullable=True)
    armour_class = db.Column(db.Integer, nullable=False)
    img = db.Column(db.String(50), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'type': self.type,
            'rarity': self.rarity,
            'description': self.description,
            'modifiers': self.modifiers,
            'spell': self.spell,
            'armour_class': self.armour_class,
            'img': self.img,
        }

################################################################################

class Glove(db.Model):
    __tablename__ = 'gloves'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False, unique=True)
    type = db.Column(db.String(50), nullable=True)
    rarity = db.Column(db.String(50), nullable=False)
    description = db.Column(db.String(1000), nullable=True, unique=True)
    modifiers = db.Column(db.String(100), nullable=True)
    spell = db.Column(db.String(50), nullable=True)
    img = db.Column(db.String(50), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'type': self.type,
            'rarity': self.rarity,
            'description': self.description,
            'modifiers': self.modifiers,
            'spell': self.spell,
            'img': self.img,
        }

################################################################################

class Boot(db.Model):
    __tablename__ = 'boots'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False, unique=True)
    type = db.Column(db.String(50), nullable=True)
    rarity = db.Column(db.String(50), nullable=False)
    description = db.Column(db.String(1000), nullable=True, unique=True)
    modifiers = db.Column(db.String(100), nullable=True)
    spell = db.Column(db.String(50), nullable=True)
    img = db.Column(db.String(50), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'type': self.type,
            'rarity': self.rarity,
            'description': self.description,
            'modifiers': self.modifiers,
            'spell': self.spell,
            'img': self.img,
        }

################################################################################

class Amulet(db.Model):
    __tablename__ = 'amulets'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False, unique=True)
    rarity = db.Column(db.String(50), nullable=False)
    description = db.Column(db.String(1000), nullable=True, unique=True)
    modifiers = db.Column(db.String(100), nullable=True)
    spell = db.Column(db.String(50), nullable=True)
    img = db.Column(db.String(50), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'rarity': self.rarity,
            'description': self.description,
            'modifiers': self.modifiers,
            'spell': self.spell,
            'img': self.img,
        }

################################################################################

class Ring(db.Model):
    __tablename__ = 'rings'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False, unique=True)
    rarity = db.Column(db.String(50), nullable=False)
    description = db.Column(db.String(1000), nullable=True, unique=True)
    modifiers = db.Column(db.String(100), nullable=True)
    spell = db.Column(db.String(50), nullable=True)
    img = db.Column(db.String(50), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'rarity': self.rarity,
            'description': self.description,
            'modifiers': self.modifiers,
            'spell': self.spell,
            'img': self.img,
        }

################################################################################


class Weapon(db.Model):
    __tablename__ = 'weapons'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False, unique=True)
    type = db.Column(db.String(50), nullable=True)
    range = db.Column(db.String(6), db.Enum("Melee", "Ranged"), nullable=False)
    rarity = db.Column(db.String(50), nullable=False)
    description = db.Column(db.String(1000), nullable=True, unique=True)
    modifiers = db.Column(db.String(100), nullable=True)
    spell = db.Column(db.String(50), nullable=True)
    damage = db.Column(db.String(50), nullable=True)
    damage_bonus = db.Column(db.Integer, nullable=False)
    damage_type = db.Column(db.String(50), nullable=True)
    damage_mod = db.Column(db.String(50), db.Enum('strength', 'dexterity'))
    img = db.Column(db.String(50), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'type': self.type,
            'range': self.range,
            'rarity': self.rarity,
            'description': self.description,
            'modifiers': self.modifiers,
            'spell': self.spell,
            'damage': self.damage,
            'damage_type': self.damage_type,
            'img': self.img,
        }
