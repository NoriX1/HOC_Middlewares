import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'

class CommentBox extends React.Component {
    state = { comment: '' }

    handleChange = (event) => {
        this.setState({ comment: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.saveComment(this.state.comment);
        this.setState({ comment: '' });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Add a Comment</h2>
                <textarea onChange={this.handleChange} name="area" id="1" cols="20" rows="5" value={this.props.comment}></textarea>
                <div><button>Submit Comments</button></div>
                <div><button onClick={this.props.fetchComments}>Fetch Comments</button></div>
            </form>
        );
    }
}

export default connect(null, actions)(CommentBox);