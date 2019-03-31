import React from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../actions/';

class CommentList extends React.Component {

    renderComments() {
        if (this.props.comments) {
            return this.props.comments.map(comment => {
                return <li key={comment}>{comment}</li>
            });
        }
    }

    render() {
        return (
            <div>
                <h4>CommentList</h4>
                <ul>{this.renderComments()}</ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { comments: state.comments };
}

export default connect(mapStateToProps, { fetchComments })(CommentList);