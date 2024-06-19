from flask import Blueprint, request
from app.models import User, Build, db
from flask_login import current_user, login_required

build_routes = Blueprint('builds', __name__)


@build_routes.route("/")
@login_required
def get_builds():
    """
        Returns all builds created by the current user
    """
    user_builds = Build.query.filter(Build.owner_id == current_user.id)
    return [build.to_dict() for build in user_builds]


@build_routes.route("/<int:id>")
@login_required
def get_build(id):
    """
        Returns one build based on an ID
    """
    build = Build.query.get(id)

    if not build:
        return {'errors': 'Build could not be found'}, 404

    return build.to_dict()


@build_routes.route("/", methods=["POST"])
@login_required
def create_build():
    """
        Creates and returns a new build
        WILL REFACTOR AS SITE BUILDS TO INCLUDE ALL RELATED
        TABLE CREATIONS IN THIS SINGLE ROUTE
    """
    data = request.get_json()

    name = data.get('name')
    owner_id = current_user.id

    if not name:
        return { 'errors': 'Name is required' }
    elif len(name) < 3 or len(name) > 25:
        return {'errors': 'Name must be 3 to 25 characters in length'}

    build = Build(
        name=name,
        owner_id=owner_id
    )
    db.session.add(build)
    db.session.commit()

    return build.to_dict(), 201


@build_routes.route("/<int:id>", methods=["PUT"])
@login_required
def edit_build(id):
    """
        Updates the name of a build
    """
    build = Build.query.get(id)

    if not build:
        return { 'errors': 'Build could not be found'}, 404


    data = request.get_json()
    name = data.get('name')

    if not name:
        return { 'errors': 'Name is required' }, 400
    elif len(name) < 3 or len(name) > 25:
        return { 'errors': 'Name must be 3 to 25 characters in length' }, 400
    elif build.owner_id != current_user.id:
        return { 'errors': 'Unauthorized Action' }, 403
    else:
        build.name = name
        db.session.commit()

        return {
            "id": build.id,
            "owner_id": build.owner_id,
            "name": build.name,
        }


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
