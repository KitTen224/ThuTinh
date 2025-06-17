import { Routes, Route } from 'react-router-dom'

import WriteNormal from './pages/write/writenormal.jsx'
import WriteAnonymous from './pages/write/writeanonymous.jsx'
import WriteDiary from './pages/write/writediary.jsx'

import TimelineNormal from './pages/timeline/timeline.jsx'
import TimelineAnonymous from './pages/timeline/timelineanonymous.jsx'
import TimelineDiary from './pages/timeline/timelinediary.jsx'

import GentleHome from './pages/gentle/gentlehome.jsx'
import GentleMeditation from './pages/gentle/gentlemeditation.jsx'
import GentleSilentMusic from './pages/gentle/gentleSilentMusic.jsx'

import InvisibleLetter from './pages/invisible/invisibleletter.jsx'

import WhisperSpace from './pages/whisper/whisper.jsx'


function App() {
  return (
    <Routes>
      <Route path="/timeline/normal" element={<TimelineNormal />} />
      <Route path="/timeline/anonymous" element={<TimelineAnonymous />} />
      <Route path="/timeline/diary" element={<TimelineDiary />} />
      <Route path="/write/normal" element={<WriteNormal />} />
      <Route path="/write/anonymous" element={<WriteAnonymous />} />
      <Route path="/write/diary" element={<WriteDiary />} />
      <Route path="/gentle/home" element={<GentleHome />} />
      <Route path="/gentle/meditation" element={<GentleMeditation />} />
      <Route path="/gentle/silentmusic" element={<GentleSilentMusic />} />
      <Route path="/letter" element={<InvisibleLetter/>}/>
      <Route path="/whisper" element={<WhisperSpace/>}/>
    </Routes>
  )
}

export default App
