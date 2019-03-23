import React, { Component } from 'react';
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
}

class CustomizationForm extends Component {
  updateFeature(feature, newValue) {
    const selected = Object.assign({}, this.props.selected);
    selected[feature] = newValue;
    this.props.handleUpdate(selected);
  }

  render() {
    const features = Object.keys(this.props.features).map((itm, itmIndex) => {
      const options = this.props.features[itm].map((opt, optIndex) => {
        const selectedClass = opt.name === this.props.selected[itm].name ? 'feature__selected' : '';
        const featureClass = 'feature__option ' + selectedClass;
        return (
          <li className='feature__item' key={optIndex}>
            {/* Ask TJ about this */}
            <div className={featureClass} onClick={e => this.updateFeature(itm, opt)}>
              {opt.name}
              ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                .format(opt.cost) })
            </div>
          </li>
        )
      }) 
      return (
        <div className="feature" key={itmIndex}>
          <div className="feature__name">
            {itm}
          </div>
          <ul className="feature__list">
            { options }
          </ul>
        </div>
      )
    })

    return (
      <section className="main__form">
        <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
        {features}
      </section>
    )
  }
}

class Summary extends Component {
  render() {
    

    const total = Object.keys(this.props.selected)
      .reduce((acc, curr) => acc + this.props.selected[curr].cost, 0
    )



    return (
      <section className="main__summary">
        <h3>NEW GREENLEAF 2018</h3>
          <SummaryList selected={this.props.selected}/>
        <div className="summary__total">
          <div className="summary__total__label">Your Price: </div>
          <div className="summary__total__value">
            { new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(total) }
          </div>
        </div>
      </section>
    );
  }
}

class SummaryList extends Component {
  render() {
    const summary = Object.keys(this.props.selected).map(key => (
      <div className="summary__option" key={key}>
        <div className="summary__option__label">
          {key}
        </div>
        <div className="summary__option__value">
          {this.props.selected[key].name}
        </div>
        <div className="summary__option__cost">
          { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
            .format(this.props.selected[key].cost) }
        </div>
      </div>
    ))
    return (
      <div>
        {summary}
      </div>
    )
  }
}

export default App;  
