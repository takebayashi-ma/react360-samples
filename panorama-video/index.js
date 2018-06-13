import React from 'react';
import {
  AppRegistry,
  View,
  Environment,
  NativeModules
} from 'react-360';

const {VideoModule} = NativeModules;

export default class PanoramaVideo extends React.Component {
  // Once the component mounts, run the increment method every second
  componentDidMount() {
    Environment.setBackgroundVideo('myplayer');
    VideoModule.resume('myplayer'); // Start playback
  }

  render() {
    return (
      <View></View>
    );
  }
};

AppRegistry.registerComponent('PanoramaVideo', () => PanoramaVideo);
