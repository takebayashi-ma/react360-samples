// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance} from 'react-360-web';
function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('PanoramaVideo', { /* initial props */ }),
    r360.getDefaultSurface()
  );

  // Creating a Video Player
  const player = r360.compositor.createVideoPlayer('myplayer');
  // Set the video to be played, and its format
  player.setSource('static_assets/video.mp4', '2D');

  // To play a video as your background, reference it by its unique id
  r360.compositor.setBackgroundVideo('myplayer');
}

window.React360 = {init};
