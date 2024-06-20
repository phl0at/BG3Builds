from .db import db, environment, SCHEMA, add_prefix_for_prod


################################################################################

class Comment(db.Model):
    __tablename__ = 'comments'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    build_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('builds.id')), nullable=False)
    message = db.Column(db.String(200), nullable=False)

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
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    build_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('builds.id')), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'build_id': self.build_id,
        }
