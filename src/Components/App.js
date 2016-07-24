import React, {Component} from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {connect} from 'react-redux';
import {GridList, GridTile} from 'material-ui/GridList'
import CodeEditor from './CodeEditor';
import Runner from './runner/Runner';

class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
          <div className="App">
            <AppBar
                title="Function Camel"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
            <GridList cols={6} padding={1} height="800">
              <GridTile title='JavaScript' actionPosition="left" titlePosition="top" cols={3}>
                <CodeEditor dispatch={this.props.dispatch} exercise={this.props.exercise}></CodeEditor>
              </GridTile>
              <GridTile title='Preview' actionPosition="left" titlePosition="top"/>
              <GridTile title='Result' actionPosition="left" titlePosition="top" cols={2}>
                <Runner code={this.props.exercise.code}></Runner>
              </GridTile>
            </GridList>
          </div>

        </MuiThemeProvider >
    );
  }
}


function mapStateToProps({exercise, dispatch}) {

  return {
    exercise,
    dispatch
  };
}

export default connect(mapStateToProps)(App);
