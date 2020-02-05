import React, { Component } from 'react';

class Splash extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      visible: true
    };
  };

  handleClickSplash() {
    this.setState({visible: false});
  };

  componentDidMount() {
    this.setTimer();
  }

  setTimer() {
    // clear any existing timer
    if (this._timer != null) {
      clearTimeout(this._timer)
    }

    // hide after `delay` milliseconds
    this._timer = setTimeout(function(){
      this.setState({visible: false});
      this._timer = null;
    }.bind(this), this.props.delay);
  }

  componentWillUnmount() {
    clearTimeout(this._timer);
  }

  render() {
    return this.state.visible ? 
			<div className="splash-container" onClick={() => this.handleClickSplash()}>
				<div className="splash-content">
					<div className="splash-logo-block">
						<p className="splash-logo">SOUNDROWN</p>
					</div>
					<p className="splash-text">relax. focus. escape.</p>
				</div>
			</div>
    : '';
  };
}

export default Splash;
