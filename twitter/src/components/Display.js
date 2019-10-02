import React from 'react'
import Container from 'react-bootstrap/Container'

class Display extends React.Component {
  render() {
return (
<div className='popup'>
<div className='popup\_inner'>
<h1>{this.state.selectedTweet}</h1>
<button onClick={this.props.closePopup}>close me</button>
</div>
</div>
);
}
}

export default Display;
