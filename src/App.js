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

  render() {
    return (
      <div className="App">
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
