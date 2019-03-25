import React, { Component } from 'react';
import './CustomizationForm.css';

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

  export default CustomizationForm;