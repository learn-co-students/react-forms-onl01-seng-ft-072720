import React from 'react';

class Form extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry",
    submittedData: [],
    box: false
  }

  handleFirstNameChange = event => {
    console.log(event.target.value)
    this.setState({
      firstName: event.target.value
    })
  }

  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    })
  }

  handleSubmit= (e) => {
    e.preventDefault();
    let formData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName
    }
    let dataArray = this.state.submittedData.concat(formData)
    this.setState({submittedData: dataArray})
  }

  listOfSubmissions = () => {
    return this.state.submittedData.map((data, index) => {
      return <div><span key={`first-name-${index}`}>{data.firstName}</span> <span key={`last-name-${index}`}>{data.lastName}</span></div>
    })
  }

  handleBoxCheck = (e) => {
    console.log('Before Change State ' + this.state.box)
    this.setState({
      box: e.target.checked
    }, () => console.log('After Change State ' + this.state.box))
    
  }

  render() {
    return (
      <div>
      <form onSubmit={e => this.handleSubmit(e)}>
        <input type="text" name="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
        <input type="text" name="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
        <input type='checkbox' name="box" onChange={event => this.handleBoxCheck(event)} checked={this.state.box}></input>
        <button type='submit'>Submit</button>
      </form>
      {this.listOfSubmissions()}
      </div>
    )
  }
}

export default Form;