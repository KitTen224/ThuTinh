import { Routes, Route } from 'react-router-dom'
import Timeline from './pages/timeline.jsx'
import WriteNormal from './pages/writenormal.jsx'
import WriteAnonymous from './pages/writeanonymous.jsx'
import WriteDiary from './pages/writediary.jsx'

function App() {
  return (
    <Routes>
      <Route path="/timeline/normal" element={<Timeline />} />
      <Route path="/write/normal" element={<WriteNormal />} />
      <Route path="/write/anonymous" element={<WriteAnonymous />} />
      <Route path="/write/diary" element={<WriteDiary />} />
    </Routes>
  )
}

export default App
