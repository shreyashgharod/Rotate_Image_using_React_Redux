import React from "react";

import { connect } from "react-redux";
import rotateAction from "../actions/rotateAction";

class App extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRD0T8beDHN2gyp9pFMiWGk1-ExtYcLPN8IhkRNpUx7qhSmsW0o"
          className={
            "App-logo" + (this.props.rotating ? "" : " App-logo-paused")
          }
          alt="logo"
          onClick={() => this.props.rotateAction(!this.props.rotating)}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  rotating: state.rotateReducer.rotating
});
const mapDispatchToProps = dispatch => ({
  rotateAction: payload => dispatch(rotateAction(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
