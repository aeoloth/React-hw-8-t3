import React, {Component} from 'react';
import './App.css';

class App extends Component {
state = {
  data: [
    { name: 'Learn React', active: true },
    { name: 'Drink tea', active: false }
  ]
};

updateState(idx) {
  const arr = this.state.data;

  if (!arr[idx].active) {
  // const result = [
  //   ...arr.slice(0, idx),
  //   { ...arr[idx], active: true },
  //   ...arr.slice(idx + 1)
  // ];

  const result = arr.map((el, i) => {
    return idx === i ? { ...el, active: true } : el;
  })
  this.setState({ data: result })
}
}

render() {
  return (
    <div> {this.updateState(1)} 
     {this.state.data[1].active ? this.state.data[1].name : 'Ничего не получилось'} 
    </div>
  );
}
  
}

export default App;
