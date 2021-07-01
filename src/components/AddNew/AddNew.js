import React from 'react';
import { Button, Input } from 'semantic-ui-react';


class AddNew extends React.Component {
  constructor() {
    super();
    this.state = {
      note: '',
      time: ''
    }
  }

  onNoteChange = (event) => {
    this.setState({note: event.target.value})
  }

  onTimeChange = (event) => {
    this.setState({time: event.target.value})
  }

  onAddNew = () => {
    fetch('https://timerapi1.herokuapp.com/addNew', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        note: this.state.note,
        time: this.state.time
      })
    }).then(response => response.json()).then(data => console.log(data)).catch(err => console.log(err));
  }

  render() {
    return(
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Add New Note</legend>

              <br/>

              <div className="mt3">
                <Input
                  icon='bars'
                  iconPosition='left'
                  placeholder='Enter your note'
                  onChange={this.onNoteChange}
                />
              </div>

              <div className="mt3">
                <Input
                  icon='time'
                  iconPosition='left'
                  placeholder='Enter your time'
                  onChange={this.onTimeChange}
                />
              </div>
              
              <div className="mt3">
                <Button content='Submit' icon='send' labelPosition='left' onClick={this.onAddNew} />
              </div>
            </fieldset>
          </div>
        </main>
      </article>
    	);
    }
  }

export default AddNew;