import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

  const moodaudioMap={
    happy:{
      meditation:[
        "/puplic/audios/happy/meditation1.mp3",
        "/puplic/audios/happy/meditation2.mp3"],
      rain:[
        "/public/audios/happy/rain1.mp3",
        "/public/audios/happy/rain2.mp3"
      ],
      stream:[
        "/public/audios/happy/stream1.mp3",
        "/public/audios/happy/stream2.mp3"
      ],
      piano:[
        "/public/audios/happy/piano1.mp3",
        "/public/audios/happy/piano2.mp3"
      ]
    },
    sad:{
      meditation:[
        "/public/audios/sad/meditation1.mp3",
        "/public/audios/sad/meditation2.mp3"],
      rain:[
        "/public/audios/sad/rain1.mp3",
        "/public/audios/sad/rain2.mp3"
      ],
      stream:[
        "/public/audios/sad/stream1.mp3",
        "/public/audios/sad/stream2.mp3"
      ],
      piano:[
        "/public/audios/sad/piano1.mp3",
        "/public/audios/sad/piano2.mp3"
      ]
    },
    tired:{
      meditation:[
        "/public/audios/tired/meditation1.mp3",
        "/public/audios/tired/meditation2.mp3"],
      rain:[
        "/public/audios/tired/rain1.mp3",
        "/public/audios/tired/rain2.mp3"
      ],
      stream:[
        "/public/audios/tired/stream1.mp3",
        "/public/audios/tired/stream2.mp3"
      ],
      piano:[
        "/public/audios/tired/piano1.mp3",
        "/public/audios/tired/piano2.mp3"
      ]
    },
    grateful:{
      meditation:[
        "/public/audios/grateful/meditation1.mp3",
        "/public/audios/grateful/meditation2.mp3"],
      rain:[
        "/public/audios/grateful/rain1.mp3",
        "/public/audios/grateful/rain2.mp3"
      ],
      stream:[
        "/public/audios/grateful/stream1.mp3",
        "/public/audios/grateful/stream2.mp3"
      ],
      piano:[
        "/public/audios/grateful/piano1.mp3",
        "/public/audios/grateful/piano2.mp3"
      ]
    },
    anxious:{
      meditation:[
        "/public/audios/anxious/meditation1.mp3",
        "/public/audios/anxious/meditation2.mp3"],
      rain:[
        "/public/audios/anxious/rain1.mp3",
        "/public/audios/anxious/rain2.mp3"
      ],
      stream:[
        "/public/audios/anxious/stream1.mp3",
        "/public/audios/anxious/stream2.mp3"
      ],
      piano:[
        "/public/audios/anxious/piano1.mp3",
        "/public/audios/anxious/piano2.mp3"
      ]
    }
      
  }
export default function MoodAudio({mood="sad",isPaused}){
  const location = useLocation();
  const state = location.state || {};
  const{ subType = "meditation" } = state;

  const[audio, setAudio] = useState(null);

  useEffect(()=>{
    if(!mood || !subType) return;

    const trackList = moodAudioMap[mood]?.[subType];
    if(!trackList || trackList.length === 0) return;

    const randomTrack = trackList[Math.floor(Math.random() * trackList.length)];
    const newAudio = newAudio(randomTrack);
    newAudio.loop = true;

    if(!isPaused) newAudio.play();
    setAudio(newAudio);

    return()=>{
      newAudio.pause();
      newAudio.currentTime = 0;
    };
  },[mood,subType]);

  useEffect(()=>{
    if(!audio) return;
    if(isPaused) audio.pause();
    else audio.play();
  },[isPaused,audio])
  return null;
}