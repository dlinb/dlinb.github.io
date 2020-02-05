import React, { Component } from 'react';
import { soundManager } from 'soundmanager2';
import Slider, { Range } from 'rc-slider';

// Assets
import iconPause from '../images/icon/icon_pause.svg';

class SoundCard extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      show: props.show,
      isPlaying: true,
    };

    this.handleVolumeSliderChange = this.handleVolumeSliderChange.bind(this);
  };

  componentDidMount() {
    const { id } = this.props;
    var trackId = this.props.trackId;
    var clientId = '3c1222aaa64b9dc73bc257260a5497cb';
    var streamUrl = 'http://api.soundcloud.com/tracks/' + trackId + '/stream?client_id=' + clientId;

    soundManager.setup({
      url: '../swf/',
      useHTML5Audio: true,
      ignoreMobileRestrictions: true,
      onready: function () {
        soundManager.createSound({
          id: id,
          url: streamUrl,
        })
      },
      ontimeout: function () {
        console.log("ERROR ERROR ERROR");
      }
    });
  };

  handleClickSoundCard() {
    const { id } = this.props;
    soundManager.togglePause(id);
    if (soundManager.getSoundById(id).paused) {
      this.setState({ isPlaying: true });
    } else {
      this.setState({ isPlaying: false });
    }
    console.log(id + " Meow meow meow")
  };

  handleVolumeSliderChange(value) {
    const { id } = this.props;
    soundManager.setVolume(id, value);
  };

  render() {
    return (
      <div id={this.props.id} className="sound-card-container">
        <div className={`sound-card ${this.state.isPlaying ? 'paused' : 'playing'}`} onClick={() => this.handleClickSoundCard()}>
          <img className="icon-drop" src={this.props.icon} alt={this.props.id} />
          <img className="icon-drop pauseicon" src={iconPause} alt="Pause" />
          <p className="sound-name">{this.props.id}</p>
        </div>
        <Slider className="sound-volume-slider" min={0} max={100} defaultValue={100} onChange={this.handleVolumeSliderChange}/>
      </div>
    );
  };
}

export default SoundCard;
