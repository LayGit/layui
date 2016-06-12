import React from 'react'
import { NavBar, Container, modal } from 'layui'
const Block = Container.Block

export default class ModalView extends React.Component {

  handleAlert1() {
    modal.alert('Here goes alert text haha')
  }

  handleAlert2() {
    modal.alert('Here goes alert text', 'Custom Title!')
  }

  handleAlert3() {
    modal.alert('Here goes alert text', 'Custom Title!', function () {
      modal.alert('Button clicked!')
    })
  }

  handleAlert4() {
    modal.alert('Here goes alert text', function () {
      modal.alert('Button clicked!')
    });
  }

  handleConfirm1 () {
    modal.confirm('Are you sure?', function () {
      modal.alert('You clicked Ok button')
    })
  }

  handleConfirm2 () {
    modal.confirm('Are you sure?',
      function () {
        modal.alert('You clicked Ok button')
      },
      function () {
        modal.alert('You clicked Cancel button')
      }
    )
  }

  handleConfirm3 () {
    modal.confirm('Are you sure?', 'Custom Title', function () {
      modal.alert('You clicked Ok button')
    })
  }

  handleConfirm4 () {
    modal.confirm('Are you sure?', 'Custom Title',
      function () {
        modal.alert('You clicked Ok button')
      },
      function () {
        modal.alert('You clicked Cancel button')
      }
    )
  }

  handlePrompt1() {
    modal.prompt('What is your name?', function (value) {
      modal.alert('Your name is "' + value + '". You clicked Ok button')
    })
  }

  handlePrompt2() {
    modal.prompt('What is your name?',
      function (value) {
        modal.alert('Your name is "' + value + '". You clicked Ok button')
      },
      function (value) {
        modal.alert('Your name is "' + value + '". You clicked Cancel button')
      }
    )
  }

  handlePrompt3() {
    modal.prompt('What is your name?', 'Custom Title', function (value) {
      modal.alert('Your name is "' + value + '". You clicked Ok button')
    })
  }

  handlePrompt4() {
    modal.prompt('What is your name?', 'Custom Title',
      function (value) {
        modal.alert('Your name is "' + value + '". You clicked Ok button')
      },
      function (value) {
        modal.alert('Your name is "' + value + '". You clicked Cancel button')
      }
    )
  }

  handleCustom1() {
    modal.show({
      title:  'Modal with 3 buttons',
      text: 'Vivamus feugiat diam velit. Maecenas aliquet egestas lacus, eget pretium massa mattis non. Donec volutpat euismod nisl in posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae',
      buttons: [
        {
          text: 'B1',
          callback: function() {
            modal.alert('You clicked first button!')
          }
        },
        {
          text: 'B2',
          callback: function() {
            modal.alert('You clicked second button!')
          }
        },
        {
          text: 'B3',
          bold: true,
          callback: function() {
            modal.alert('You clicked third button!')
          }
        },
      ]
    })
  }

  handleCustom2() {
    modal.show({
      title:  'Vertical Buttons Layout',
      text: 'Vivamus feugiat diam velit. Maecenas aliquet egestas lacus, eget pretium massa mattis non. Donec volutpat euismod nisl in posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae',
      verticalButtons: true,
      buttons: [
        {
          text: 'Button 1',
          onClick: function() {
            modal.alert('You clicked first button!')
          }
        },
        {
          text: 'Button 2',
          onClick: function() {
            modal.alert('You clicked second button!')
          }
        },
        {
          text: 'Button 3',
          onClick: function() {
            modal.alert('You clicked third button!')
          }
        },
      ]
    })
  }

  handleShowLoading1() {
    modal.showLoading()
    setTimeout(function () {
      modal.hideLoading()
    }, 2000);
  }

  handleShowLoading2() {
    modal.showLoading('Custom Title')
    setTimeout(function () {
      modal.hideLoading()
    }, 2000);
  }

  render () {
    return (
      <div>
        <NavBar title="modal" />
        <Container>
          <Block>
            <p><a href='javascript:void(0)' onTouchTap={this.handleAlert1.bind(this)}>Alert with Text</a></p>
            <p><a href='javascript:void(0)' onTouchTap={this.handleAlert2.bind(this)}>Alert with Text and Title</a></p>
            <p><a href='javascript:void(0)' onTouchTap={this.handleAlert3.bind(this)}>Alert With Text and Title and Callback</a></p>
            <p><a href='javascript:void(0)' onTouchTap={this.handleAlert4.bind(this)}>Alert With Text and Callback</a></p>
          </Block>
          <Block>
            <p><a href="javascript:void(0)" onTouchTap={this.handleConfirm1.bind(this)}>Confirm with text and Ok callback</a></p>
            <p><a href="javascript:void(0)" onTouchTap={this.handleConfirm2.bind(this)}>Confirm with text, Ok and Cancel callbacks</a></p>
            <p><a href="javascript:void(0)" onTouchTap={this.handleConfirm3.bind(this)}>Confirm with text, title and Ok callback</a></p>
            <p><a href="javascript:void(0)" onTouchTap={this.handleConfirm4.bind(this)}>Confirm with text, title, Ok and Cancel callback</a></p>
          </Block>
          <Block>
            <p><a href="javascript:void(0)" onTouchTap={this.handlePrompt1.bind(this)}>Prompt with text and Ok callback</a></p>
            <p><a href="javascript:void(0)" onTouchTap={this.handlePrompt2.bind(this)}>Prompt with text, Ok and Cancel callbacks</a></p>
            <p><a href="javascript:void(0)" onTouchTap={this.handlePrompt3.bind(this)}>Prompt with text, title and Ok callback</a></p>
            <p><a href="javascript:void(0)" onTouchTap={this.handlePrompt4.bind(this)}>Prompt with text, title, Ok and Cancel callback</a></p>
          </Block>
          <Block>
            <p><a href="javascript:void(0)" onTouchTap={this.handleCustom1.bind(this)}>Modal With 3 Buttons</a></p>
            <p><a href="javascript:void(0)" onTouchTap={this.handleCustom2.bind(this)}>Modal With Vertical Buttons</a></p>
          </Block>
          <Block>
            <p><a href="javascript:void(0)" onTouchTap={this.handleShowLoading1.bind(this)}>Show Loading</a></p>
            <p><a href="javascript:void(0)" onTouchTap={this.handleShowLoading2.bind(this)}>Show Loading with custom title</a></p>
          </Block>
        </Container>
      </div>
    )
  }
}
module.exports = exports['default']
