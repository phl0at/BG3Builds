from app.models import Helmet, Cloak, Armour, Glove, Boot, Amulet, Ring, Weapon
from flask import Blueprint

item_routes = Blueprint("items", __name__)


###########################GET ITEM BY TYPE##############################

@item_routes.route("/helmet")
def get_helmets():
    """
        Returns all helmets
    """
    helmets = Helmet.query.all()

    return [helmet.to_dict() for helmet in helmets], 200

###########################

@item_routes.route("/cloak")
def get_cloaks():
    """
        Returns all cloaks
    """
    cloaks = Cloak.query.all()

    return [cloak.to_dict() for cloak in cloaks], 200

###########################

@item_routes.route("/armour")
def get_armours():
    """
        Returns all armours
    """
    armours = Armour.query.all()

    return [armour.to_dict() for armour in armours], 200

###########################

@item_routes.route("/glove")
def get_gloves():
    """
        Returns all gloves
    """
    gloves = Glove.query.all()

    return [glove.to_dict() for glove in gloves], 200

###########################

@item_routes.route("/boot")
def get_boots():
    """
        Returns all boots
    """
    boots = Boot.query.all()

    return [boot.to_dict() for boot in boots], 200

###########################

@item_routes.route("/amulet")
def get_amulets():
    """
        Returns all amulets
    """
    amulets = Amulet.query.all()

    return [amulet.to_dict() for amulet in amulets], 200

###########################

@item_routes.route("/ring")
def get_rings():
    """
        Returns all rings
    """
    rings = Ring.query.all()

    return [ring.to_dict() for ring in rings], 200

###########################

@item_routes.route("/melee")
def get_melee_weapons():
    """
        Returns all melee weapons
    """
    weapons = Weapon.query.filter(Weapon.range == "Melee")

    return [weapon.to_dict() for weapon in weapons], 200

###########################

@item_routes.route("/ranged")
def get_ranged_weapons():
    """
        Returns all ranged weapons
    """
    weapons = Weapon.query.filter(Weapon.range == "Ranged")

    return [weapon.to_dict() for weapon in weapons], 200
