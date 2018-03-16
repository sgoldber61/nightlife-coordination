import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import * as actions from '../actions';

// to do: destroy on unmount
class SearchBar extends Component {
  handleFormSubmit({location}) {
    this.props.searchBars(location);
  }
  
  renderField(field) {
    return (
      <input
        className='form-control'
        type='text'
        placeholder='Location'
        {...field.input}
      />
    );
  }
  
  render() {
    const {handleSubmit} = this.props; // this.props comes from redux form
    
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <Field name='location' component={this.renderField} />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}


export default reduxForm({
  form: 'search' // just an identifier for this form
})(
  connect(null, {...actions})(SearchBar)
);

