import React, { Component } from 'react';
import { soundManager } from 'soundmanager2';

//Assets
import iconMute from '../images/icon/icon_mute.svg';

class MuteAll extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      muteAll: false
    };
  };

  handleClickMuteAll() {
    if (this.state.muteAll) {
      soundManager.unmute();
      this.setState({
        muteAll: false
      })
    } else {
      soundManager.mute();
      this.setState({
        muteAll: true
      })
    }
  };

  render() {
    return (
      <div className="mute-frame">
        <div className={`mute ${this.state.muteAll ? 'muted': ''}`} onClick={() => this.handleClickMuteAll()}>
          <img src={iconMute} alt="Mute Button" />
          <span>mute all</span>
        </div>
      </div>
    );
  };
};

export default MuteAll;
