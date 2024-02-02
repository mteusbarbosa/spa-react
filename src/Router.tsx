import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import History from './pages/History'
import { DefaultLayoult } from './layoults/DefaultLayoult/DefaultLayoult'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayoult />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/history" element={<History />}></Route>
      </Route>
    </Routes>
  )
}
