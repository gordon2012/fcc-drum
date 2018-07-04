import React, { Component } from 'react';

class App extends Component {
  state = {
    playing: null,
    clips: [
      { name: 'Q', sound: 'boom' },
      { name: 'W', sound: 'clap' },
      { name: 'E', sound: 'hihat' },
      { name: 'A', sound: 'kick' },
      { name: 'S', sound: 'openhat' },
      { name: 'D', sound: 'ride' },
      { name: 'Z', sound: 'snare' },
      { name: 'X', sound: 'tink' },
      { name: 'C', sound: 'tom' }
    ]
  };

  playAudio = audio => {
    this[audio].play();
    this.setState({ playing: audio });
  };

  handleKeyDown = e => {
    console.log(e.keyCode);
    switch (e.keyCode) {
      case 81:
        this.playAudio('Q');
        break;
      case 87:
        this.playAudio('W');
        break;
      case 69:
        this.playAudio('E');
        break;
      case 65:
        this.playAudio('A');
        break;
      case 83:
        this.playAudio('S');
        break;
      case 68:
        this.playAudio('D');
        break;
      case 90:
        this.playAudio('Z');
        break;
      case 88:
        this.playAudio('X');
        break;
      case 67:
        this.playAudio('C');
        break;
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    return (
      <div
        className="App"
        onKeyDown={e => {
          console.log(e);
        }}
      >
        <div id="drum-machine">
          <div id="display">{this.state.playing}</div>

          {this.state.clips.map(drum => {
            return (
              <div
                key={drum.name}
                className="drum-pad"
                id={drum.sound}
                onClick={() => {
                  this.playAudio(drum.name);
                }}
              >
                {drum.name}
                <audio
                  ref={ref => {
                    this[drum.name] = ref;
                  }}
                  src={`audio/${drum.sound}.wav`}
                  className="clip"
                  id={drum.name}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
