from flask import Blueprint, request
from app.models import Comment, db
from flask_login import current_user, login_required
from sqlalchemy.orm import joinedload


comment_routes = Blueprint('comments', __name__)


########################CREATE A COMMENT##########################

@comment_routes.route("/<int:build_id>", methods=["POST"])
@login_required
def create_comment(build_id):
    """
        Creates and returns a new comment on a build
    """
    data = request.get_json()
    user_id = current_user.id

    message = data.get('message')

    if not message:
        return { 'errors': 'Message is required' }, 400
    elif len(message) < 1 or len(message) > 200:
        return { 'errors': 'Maximum length is 200 characters'}, 400
    else:
        comment = Comment(
            build_id=build_id,
            user_id=user_id,
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


    if not comment:
        return { 'errors': 'Comment could not be found' }, 404
    elif comment.user_id != current_user.id:
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


########################DELETE A COMMENT##########################

@comment_routes.route("/<int:comment_id>", methods=["DELETE"])
@login_required
def delete_comment(comment_id):
    """
        Deletes a comment
    """

    comment = Comment.query.get(comment_id)


    if not comment:
        return { 'errors': 'Comment could not be found' }, 404
    elif comment.user_id != current_user.id:
        return { 'errors': 'Unauthorized Action' }, 403
    else:
        db.session.delete(comment)
        db.session.commit()

        return { 'message': 'Successfully deleted' }, 200
