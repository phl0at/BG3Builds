from .db import db, environment, SCHEMA

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
