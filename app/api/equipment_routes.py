from app.models import Equipment
from flask import Blueprint

equipment_routes = Blueprint("equipment", __name__)


###########################GET EQUIPMENT BY TYPE##############################
@equipment_routes.route("/<string:type>")
def get_type(type):
    valid_types = [
        "helmet", "cloak", "armor",
        "gloves", "boots", "amulet",
        "ring", "melee", "ranged"
        ]
    if not type in valid_types:
        return { "errors": "Must be a valid equipment type"}, 400
    else:
        equipment = Equipment.query.filter(Equipment.type == type)
        return [item.to_dict() for item in equipment]
