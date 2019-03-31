import React from 'react';
import { connect } from 'react-redux';

export default (ChildComponent) => {
    class ComposedComponent extends React.Component {

        componentDidMount() {
            this.shouldNavigateAway();
        }

        componentDidUpdate() {
            this.shouldNavigateAway();
        }

        shouldNavigateAway() {
            if (!this.props.auth) {
                console.log('I NEED TO LEAVE!!');
                this.props.history.push('/');
            }
        }

        render() {
            return <ChildComponent {...this.props} />
        }
    }

    const mapStateToProps = (state) => {
        return { auth: state.auth }
    }

    return connect(mapStateToProps)(ComposedComponent);
};

//Higher Order Component - HOC