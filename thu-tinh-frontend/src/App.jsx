import { Routes, Route } from 'react-router-dom'
import WriteNormal from './pages/writenormal.jsx'
import WriteAnonymous from './pages/writeanonymous.jsx'
import WriteDiary from './pages/writediary.jsx'
import TimelineNormal from './pages/timeline.jsx'
import TimelineAnonymous from './pages/timelineanonymous.jsx'
import TimelineDiary from './pages/timelinediary.jsx'
import GentleHome from './pages/gentlehome.jsx'
import GentleMeditation from './pages/gentlemeditation.jsx'
import GentleSilentMusic from './pages/gentleSilentMusic.jsx'


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
    </Routes>
  )
}

export default App
