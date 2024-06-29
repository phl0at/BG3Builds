from flask import Blueprint
from app.models import Class, Origin, Race, Background, Equipment

preload_routes = Blueprint("preload", __name__)


###########################GET ALL PRELOAD DATA##############################

@preload_routes.route("/")
def preload_data():
    """
        Returns all preloaded data the database
        (origins, races, classes, and backgrounds)
    """
    origins = Origin.query.all()
    races = Race.query.all()
    classes = Class.query.all()
    backgrounds = Background.query.all()
    equipment = Equipment.query.all()

    return {'origins': [origin.to_dict() for origin in origins],
            'races': [race.to_dict() for race in races],
            'classes': [_class.to_dict() for _class in classes],
            'backgrounds': [bg.to_dict() for bg in backgrounds],
            'equipment': [item.to_dict() for item in equipment]}
