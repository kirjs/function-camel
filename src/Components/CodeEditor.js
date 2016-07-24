import React from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/javascript/javascript';
import {updateCode} from '../actions';

export default function CodeEditor({dispatch, exercise}) {
  var options = {
    mode: 'javascript'
  };

  return <div style={{marginTop: '64px'}}>
    <CodeMirror value={exercise.code} options={options} onChange={code=>dispatch(updateCode(code))}/>
  </div>
}
