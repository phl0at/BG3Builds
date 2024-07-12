from flask import Blueprint
from app.models import Favorite, db
from flask_login import current_user, login_required


favorite_routes = Blueprint('favorites', __name__)


########################FAVORITE A BUILD##########################

@favorite_routes.route("/<int:build_id>", methods=["POST"])
@login_required
def favorite_build(build_id):
    """
        Adds a build to the current_users favorites
    """

    favorite = Favorite.query \
        .filter(Favorite.user_id == current_user.id, Favorite.build_id == build_id)


    if len([fav.to_dict() for fav in favorite]):
        return { 'errors': 'User has already favorited this build' }, 400
    else:
        new_favorite = Favorite(
            user_id=current_user.id,
            build_id=build_id
        )
        db.session.add(new_favorite)
        db.session.commit()

        return new_favorite.to_dict(), 201


########################UN-FAVORITE A BUILD##########################

@favorite_routes.route("/<int:build_id>", methods=["DELETE"])
@login_required
def un_favorite_build(build_id):
    """
        Removes a build from the current_users favorites
    """

    favoritesList = Favorite.query \
        .filter(Favorite.user_id == current_user.id, Favorite.build_id == build_id)

    favorite = [fav.to_dict() for fav in favoritesList][0]

    if not favorite:
        return { 'errors': 'Favorite could not be found' }, 404
    elif favorite["user_id"] != current_user.id:
        return { 'errors': 'Unauthorized Action' }, 403
    else:
        db.session.delete(favoritesList[0])
        db.session.commit()

    return { 'message': 'Successfully deleted' }, 200
