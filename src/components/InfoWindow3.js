import React, { Component } from 'react'
import { InfoWindow } from 'google-maps-react'
import ReactDOM from 'react-dom'

export default class InfoWindowEx extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.infoWindowRef = React.createRef();
    this.containerElement = document.createElement(`div`);
  }

  componentDidUpdate(prevProps) {
    if (this.props.children !== prevProps.children) {
      ReactDOM.render(
        React.Children.only(this.props.children),
        this.containerElement
      );
      this.infoWindowRef.current.infowindow.setContent(this.containerElement);
      this.setState({
        isOpen: true
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.isOpen) {
      return this.state.activeMarker.position.toString() !== nextProps.activeMarker.position.toString();
    }
    return true;
  }

  infoWindowClose(){
    this.setState({
      isOpen: false
    });
  }


  render() {
    return <InfoWindow onClose={this.infoWindowClose.bind(this)} ref={this.infoWindowRef} {...this.props} />;
  }
}
