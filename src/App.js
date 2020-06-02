import React, {Component} from 'react';
import './Styling/style.css';
import Actors from './Components/Actors';


class App extends Component {
  render(){
  return (
    <div className="App">
      <Actors />
    </div>
  );
}
}
export default App;