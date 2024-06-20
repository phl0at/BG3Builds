from flask import Blueprint, request
from app.models import Build, db
from flask_login import current_user, login_required
from sqlalchemy.orm import joinedload


build_routes = Blueprint('builds', __name__)

###########################GET ALL BUILDS##############################

@build_routes.route("/")
@login_required
def get_all_builds():
    """
        Returns all builds created by all users
    """
    builds = Build.query \
        .options(joinedload(Build.classes)) \
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
        .filter(Build.owner_id == current_user.id)
    return [build.to_dict() for build in user_builds]

###########################GET ONE BUILD##############################

@build_routes.route("/<int:id>")
@login_required
def get_build(id):
    """
        Returns one build based on an ID
    """
    build = Build.query \
        .options(joinedload(Build.classes)) \
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
    owner_id = current_user.id

    name = data.get('name')
    character_name = data.get('character_name')
    origin = data.get('origin')
    armor_class = data.get('armor_class')
    strength = data.get('strength')
    dexterity = data.get('dexterity')
    constitution = data.get('constitution')
    intelligence = data.get('intelligence')
    wisdom = data.get('wisdom')
    charisma = data.get('charisma')
    plus_1 = data.get('plus_1')
    plus_2 = data.get('plus_2')

    errors = {}

    if not name:
        errors['name'] = 'Required'
    elif len(name) < 3 or len(name) > 25:
        errors['name'] = 'Name must be 3 to 25 characters in length'
    elif not character_name:
        errors['character_name'] = 'Required'
    elif len(character_name) < 3 or len(character_name) > 25:
        errors['character_name'] = 'Character name must be 3 to 25 characters in length'

    if errors:
        return { 'errors': errors }, 400
    else:
        build = Build(
            name = name,
            owner_id = owner_id,
            character_name = character_name,
            armor_class = armor_class,
            origin = origin,
            strength = strength,
            dexterity = dexterity,
            constitution = constitution,
            intelligence = intelligence,
            wisdom = wisdom,
            charisma = charisma,
            plus_1 = plus_1,
            plus_2 = plus_2
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
    elif build.owner_id != current_user.id:
        return { 'errors': 'Unauthorized Action' }, 403

    data = request.get_json()

    name = data.get('name')
    character_name = data.get('character_name')
    origin = data.get('origin')
    strength = data.get('strength')
    dexterity = data.get('dexterity')
    constitution = data.get('constitution')
    intelligence = data.get('intelligence')
    wisdom = data.get('wisdom')
    charisma = data.get('charisma')
    plus_1 = data.get('plus_1')
    plus_2 = data.get('plus_2')

    errors = {}

    if not name:
        errors['name'] = 'Required'
    elif len(name) < 3 or len(name) > 25:
        errors['name'] = 'Name must be 3 to 25 characters in length'
    elif not character_name:
        errors['character_name'] = 'Required'
    elif len(character_name) < 3 or len(character_name) > 25:
        errors['character_name'] = 'Character name must be 3 to 25 characters in length'

    if errors:
        return { 'errors': errors }, 400
    else:
        build.name = name
        build.character_name = character_name,
        build.origin = origin,
        build.strength = strength,
        build.dexterity = dexterity,
        build.constitution = constitution,
        build.intelligence = intelligence,
        build.wisdom = wisdom,
        build.charisma = charisma,
        build.plus_1 = plus_1,
        build.plus_2 = plus_2
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
    elif build.owner_id != current_user.id:
        return { 'errors': 'Unauthorized Action' }, 403
    else:
        db.session.delete(build)
        db.session.commit()
        return { 'message': 'Successfully deleted' }, 200
