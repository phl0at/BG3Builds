from .db import db, environment, SCHEMA, add_prefix_for_prod



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

class Cantrip(db.Model):
    __tablename__ = 'cantrips'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    description = db.Column(db.String(250), nullable=False)
    duration = db.Column(db.Integer, nullable=True)
    range = db.Column(db.Integer, nullable=False)
    radius = db.Column(db.Integer, nullable=True)
    attack_save = db.Column(db.String(3), nullable=True)
    damage = db.Column(db.String(10), nullable=True)
    damage_type = db.Column(db.String(10), nullable=True)

    def to_dict(self):
        return {
            'name': self.name,
            'description': self.description,
            'duration': self.duration,
            'range': self.range,
            'radius': self.radius,
            'attack_save': self.attack_save,
            'damage': self.damage,
            'damage_type': self.damage_type
        }
