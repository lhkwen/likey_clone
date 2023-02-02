/* eslint-disable jsx-a11y/media-has-caption */

import React, {
  useEffect, useRef, useMemo, useState,
} from 'react';
import Hls from 'hls.js';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';


function CardVideo({ mediaData }) {
  const [volumnTemp, setVolumnTemp] = useState(1);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    console.log(video);
    if (!video) return;
    const src = mediaData?.content_url?.[720] || mediaData?.contpath?.[720] || mediaData?.contpath;
    console.log(mediaData)
    console.log('src',src)
    video.controls = true;
    const defaultOptions = {
      controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'airplay'],
      settings: ['captions', 'quality', 'speed', 'loop'],
      loop: {
        active: true,
      },
      autoplay: true,
      muted: true,
      fullscreen: { enabled: false },
    };

    if (Hls.isSupported()) {
      const hls = new Hls(
        {
          debug: true,
          xhrSetup: (xhr) => {
            xhr.withCredentials = true;
            xhr.setRequestHeader('Access-Control-Allow-Headers', 'Content-Type, Accept, X-Requested-With');
            xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
            xhr.setRequestHeader('Access-Control-Allow-Credentials', 'true');
          },
        },
      );

      hls.loadSource(src);
      hls.attachMedia(video);
      const player = new Plyr(video, defaultOptions);
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src;
      const player = new Plyr(video, defaultOptions);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mediaData, videoRef]);

// const plyrProps = {
//   //  source: mediaData.contentpkg[index].content_url[720] ,
//     options: undefined
// }

  return (
    <div style={{ position: 'relative' }}>
        {/* <Plyr {...plyrProps} /> */}
      <video
        ref={videoRef}
        playsInline
        controls
        autoPlay
        onVolumeChange={(e) => {
          if (e.target.muted === false && e.target.volume === 0) {
            if (volumnTemp !== 0) {
              setVolumnTemp(e.target.volume);
            }
          } else if (e.target.muted === true && e.target.volume === 0 && volumnTemp === 0) {
            e.target.muted = false;
            e.target.volume = 0.1;
          }
        }}
      />
    </div>
  );
}

export default CardVideo;
