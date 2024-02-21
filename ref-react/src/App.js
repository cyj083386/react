import React, {Component} from 'react';
import ValidationSample from './ValidationSample';
import MoveBox from './MoveBox';


class App extends Component {
  render() {
    return (
      <div>
       <ValidationSample />
       <MoveBox ref={(ref) => {this.moveBox=ref}}/>
       <button onClick={() => {this.moveBox.move(200,200)}}>외부에서move</button>
      </div>
    )
  }
}
export default App;