import React, { Component } from 'react';
import Summary from './Summary/Summary';
import CustomizationForm from './CustomizationForm/CustomizationForm';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: {
        Processor: {
            name: '17th Generation Intel Core HB (7 Core with donut spare)',
            cost: 700
        },
        "Operating System": {
            name: 'Ubuntu Linux 16.04',
            cost: 200
        },
        "Video Card":{
            name: 'Toyota Corolla 1.5v',
            cost: 1150.98
        },
        Display: {
            name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
            cost: 1500
        }
      }
    }
  }

  handleUpdate = (selected) => {
    this.setState({ selected })
  };

  render() {
    return (
      <div className="App">    
        <main>
          <CustomizationForm 
            features={this.props.features}
            selected={this.state.selected}
            handleUpdate={this.handleUpdate}
          />
          <Summary 
            selected={this.state.selected}
          />
        </main>
      </div>
    );
  }
};

export default App;  
