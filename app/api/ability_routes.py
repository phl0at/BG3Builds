from flask import Blueprint, request
from app.models import User, Build, Ability, db
from flask_login import current_user, login_required

ability_routes = Blueprint('abilities', __name__)


@ability_routes.route("/<int:build_id>", methods=["PUT"])
@login_required
def edit_abilities(build_id):
    """
        Updates the values of an ability table
        for its associated build
    """
    build = Build.query.get(build_id)

    if not build:
        return { 'errors': 'Build could not be found' }, 404
    elif build.owner_id != current_user.id:
        return { 'errors': 'Unauthorized Action' }, 403

    data = request.get_json()
    errors = {}

    strength = data.get('strength')
    if not strength:
        errors['strength'] = "Required"

    dexterity = data.get('dexterity')
    if not dexterity:
        errors['dexterity'] = "Required"

    constitution = data.get('constitution')
    if not constitution:
        errors['constitution'] = "Required"

    intelligence = data.get('intelligence')
    if not intelligence:
        errors['intelligence'] = "Required"

    wisdom = data.get('wisdom')
    if not wisdom:
        errors['wisdom'] = "Required"

    charisma = data.get('charisma')
    if not charisma:
        errors['charisma'] = "charisma is required"

    plus_1 = data.get('plus_1')
    if not plus_1:
        errors['plus_1'] = "plus_1 is required"

    plus_2 = data.get('plus_2')
    if not plus_2:
        errors['plus_2'] = "plus_2 is required"

    if errors:
        return { 'errors': errors }

    abilities = Ability.query.filter(Ability.build_id == build_id)

    abilities[0].strength = strength
    abilities[0].dexterity = dexterity
    abilities[0].constitution = constitution
    abilities[0].intelligence = intelligence
    abilities[0].wisdom = wisdom
    abilities[0].charisma = charisma
    abilities[0].plus_1 = plus_1
    abilities[0].plus_2 = plus_2

    db.session.commit()

    return abilities[0].to_dict()


@ability_routes.route("/<int:build_id>", methods=["DELETE"])
@login_required
def delete_abilities(build_id):
    build = Build.query.get(build_id)

    if not build:
        return { 'errors': 'Build could not be found'}, 404
    elif build.owner_id != current_user.id:
        return { 'errors': 'Unauthorized Action' }, 403

    abilities = Ability.query.filter(Ability.build_id == build_id)

    ability = [ability.to_dict() for ability in abilities]

    if not len(ability):
        return { 'errors': f'No ability table found for build: {build_id}' }
    elif len(ability) > 1:
        """
            This condition should never be hit
            as it should not be possible to create
            more than one ability table per build.
            But this will delete all related ability
            tables if that does happen.
        """
        for item in abilities:
            db.session.delete(item)
    else:
        db.session.delete(abilities[0])

    db.session.commit()
    return { 'message': 'Successfully deleted'}, 200
