import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layoults/DefaultLayout/DefaultLayout'
import { Home } from './pages/Home'
import { History } from './pages/History'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}
