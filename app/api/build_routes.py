from flask import Blueprint, request
from app.models import Build, db
from flask_login import current_user, login_required
from sqlalchemy.orm import joinedload


build_routes = Blueprint('builds', __name__)

###########################GET ALL BUILDS##############################

@build_routes.route("/")
def get_all_builds():
    """
        Returns all builds created by all users
    """
    builds = Build.query \
        .options(joinedload(Build.classes)) \
        .options(joinedload(Build.comments)) \
        .all()
    return [build.to_dict() for build in builds]

###########################GET USERS BUILDS##############################

@build_routes.route("/current")
@login_required
def get_owned_builds():
    """
        Returns all builds created by the current user
    """
    user_builds = Build.query \
        .options(joinedload(Build.classes)) \
        .options(joinedload(Build.comments)) \
        .filter(Build.user_id == current_user.id)
    return [build.to_dict() for build in user_builds]

###########################GET ONE BUILD##############################

@build_routes.route("/<int:id>")
def get_build(id):
    """
        Returns one build based on an ID
    """
    build = Build.query \
        .options(joinedload(Build.classes)) \
        .options(joinedload(Build.comments)) \
        .get(id)

    if not build:
        return {'errors': 'Build could not be found'}, 404

    return build.to_dict()

###########################CREATE BUILD##############################

@build_routes.route("/", methods=["POST"])
@login_required
def create_build():
    """
        Creates and returns a new build
        WILL REFACTOR AS SITE BUILDS TO INCLUDE ALL RELATED
        TABLE CREATIONS IN THIS SINGLE ROUTE
    """
    data = request.get_json()
    user_id = current_user.id

    name = data.get('name')
    character_name = data.get('character_name')
    origin = data.get('origin')
    race = data.get('race')
    sub_race = data.get('sub_race')
    background = data.get('background')
    strength = data.get('strength')
    dexterity = data.get('dexterity')
    constitution = data.get('constitution')
    intelligence = data.get('intelligence')
    wisdom = data.get('wisdom')
    charisma = data.get('charisma')
    plus_1 = data.get('plus_1')
    plus_2 = data.get('plus_2')
    helmet = data.get('helmet')
    cloak = data.get('cloak')
    armor = data.get('armor')
    gloves = data.get('gloves')
    boots = data.get('boots')
    amulet = data.get('amulet')
    ring_1 = data.get('ring_1')
    ring_2 = data.get('ring_2')
    main_hand = data.get('main_hand')
    off_hand = data.get('off_hand')
    ranged_mh = data.get('ranged_mh')
    ranged_oh = data.get('ranged_oh')
    armor_class = data.get('armor_class')

    errors = {}

    if not name:
        errors['name'] = 'Required'
    elif len(name) < 3 or len(name) > 25:
        errors['name'] = 'Name must be 3 to 25 characters in length'
    elif not character_name:
        errors['character_name'] = 'Required'
    elif len(character_name) < 3 or len(character_name) > 25:
        errors['character_name'] = 'Character name must be 3 to 25 characters in length'
    elif not origin:
        errors['origin'] = 'Required'
    elif not race:
        errors['race'] = 'Required'
    elif not background:
        errors['background'] = 'Required'




    if errors:
        return { 'errors': errors }, 400
    else:
        build = Build(
            name = name,
            user_id = user_id,
            character_name = character_name,
            origin = origin,
            race = race,
            sub_race = sub_race,
            background = background,
            strength = strength,
            dexterity = dexterity,
            constitution = constitution,
            intelligence = intelligence,
            wisdom = wisdom,
            charisma = charisma,
            plus_1 = plus_1,
            plus_2 = plus_2,
            helmet = helmet,
            cloak = cloak,
            armor = armor,
            gloves = gloves,
            boots = boots,
            amulet = amulet,
            ring_1 = ring_1,
            ring_2 = ring_2,
            main_hand = main_hand,
            off_hand = off_hand,
            ranged_mh = ranged_mh,
            ranged_oh = ranged_oh,
            armor_class = armor_class
        )
        db.session.add(build)
        db.session.commit()

        return build.to_dict(), 201

###########################EDIT BUILD##############################

@build_routes.route("/<int:id>", methods=["PUT"])
@login_required
def edit_build(id):
    """
        Updates the name of a build
    """
    build = Build.query.get(id)

    if not build:
        return { 'errors': 'Build could not be found'}, 404
    elif build.user_id != current_user.id:
        return { 'errors': 'Unauthorized Action' }, 403

    data = request.get_json()

    name = data.get('name')
    character_name = data.get('character_name')
    origin = data.get('origin')
    race = data.get('race')
    sub_race = data.get('sub_race')
    background = data.get('background')
    strength = data.get('strength')
    dexterity = data.get('dexterity')
    constitution = data.get('constitution')
    intelligence = data.get('intelligence')
    wisdom = data.get('wisdom')
    charisma = data.get('charisma')
    plus_1 = data.get('plus_1')
    plus_2 = data.get('plus_2')
    helmet = data.get('helmet')
    cloak = data.get('cloak')
    armor = data.get('armor')
    gloves = data.get('gloves')
    boots = data.get('boots')
    amulet = data.get('amulet')
    ring_1 = data.get('ring_1')
    ring_2 = data.get('ring_2')
    main_hand = data.get('main_hand')
    off_hand = data.get('off_hand')
    ranged_mh = data.get('ranged_mh')
    ranged_oh = data.get('ranged_oh')
    armor_class = data.get('armor_class')

    errors = {}

    if not name:
        errors['name'] = 'Required'
    elif len(name) < 3 or len(name) > 25:
        errors['name'] = 'Name must be 3 to 25 characters in length'
    elif not character_name:
        errors['character_name'] = 'Required'
    elif len(character_name) < 3 or len(character_name) > 25:
        errors['character_name'] = 'Character name must be 3 to 25 characters in length'
    elif not origin:
        errors['origin'] = 'Required'
    elif not race:
        errors['race'] = 'Required'
    elif not background:
        errors['background'] = 'Required'



    if errors:
        return { 'errors': errors }, 400
    else:
        build.armor_class = armor_class
        build.name = name
        build.character_name = character_name
        build.origin = origin
        build.race = race
        build.sub_race = sub_race
        build.background = background
        build.strength = strength
        build.dexterity = dexterity
        build.constitution = constitution
        build.intelligence = intelligence
        build.wisdom = wisdom
        build.charisma = charisma
        build.plus_1 = plus_1
        build.plus_2 = plus_2
        build.helmet = helmet
        build.cloak = cloak
        build.armor = armor
        build.gloves = gloves
        build.boots = boots
        build.amulet = amulet
        build.ring_1 = ring_1
        build.ring_2 = ring_2
        build.main_hand = main_hand
        build.off_hand = off_hand
        build.ranged_mh = ranged_mh
        build.ranged_oh = ranged_oh

        db.session.commit()

        return build.to_dict()

###########################DELETE BUILD##############################

@build_routes.route("/<int:id>", methods=["DELETE"])
@login_required
def delete_build(id):
    """
        Deletes a users build by its ID
    """
    build = Build.query.get(id)

    if not build:
        return { 'errors': 'Build could not be found'}, 404
    elif build.user_id != current_user.id:
        return { 'errors': 'Unauthorized Action' }, 403
    else:
        db.session.delete(build)
        db.session.commit()
        return { 'message': 'Successfully deleted' }, 200
