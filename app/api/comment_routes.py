from flask import Blueprint, request
from app.models import Comment, Favorite, Build, db
from flask_login import current_user, login_required
from sqlalchemy.orm import joinedload


comment_routes = Blueprint('comments', __name__)

########################GET ALL COMMENTS FOR A BUILD##########################

@comment_routes.route("/<int:build_id>")
@login_required
def get_all_comments(build_id):
    """
        Returns all comments for a build specified by ID
    """
    build = Build.query \
                .options(joinedload(Build.comments)) \
                .get(build_id)

    return build.to_dict()['comments']

########################CREATE A COMMENT FOR A BUILD##########################

@comment_routes.route("/<int:build_id>", methods=["POST"])
@login_required
def create_comment(build_id):
    """
        Creates and returns a new comment on a build
    """
    data = request.get_json()
    owner_id = current_user.id

    message = data.get('message')

    if not message:
        return { 'errors': 'Message is required' }, 400
    elif len(message) < 1 or len(message) > 200:
        return { 'errors': 'Maximum length is 200 characters'}, 400
    else:
        comment = Comment(
            build_id=build_id,
            owner_id=owner_id,
            message=message
        )
        db.session.add(comment)
        db.session.commit()

        return comment.to_dict(), 201

########################EDIT A COMMENT##########################

@comment_routes.route("/<int:comment_id>", methods=["PUT"])
@login_required
def edit_comment(comment_id):
    """
        Updates and returns a comment
    """
    comment = Comment.query.get(comment_id)
    owner_id = comment.to_dict()['owner_id']

    if not comment:
        return { 'errors': 'Comment could not be found' }, 404
    elif owner_id != current_user.id:
        return { 'errors': 'Unauthorized Action' }, 403

    data = request.get_json()
    message = data.get('message')

    if not message:
        return { 'errors': 'Message is required' }, 400
    elif len(message) < 1 or len(message) > 200:
        return { 'errors': 'Maximum message length is 200 characters'}, 400
    else:
        comment.message = message
        db.session.commit()

        return comment.to_dict(), 200
