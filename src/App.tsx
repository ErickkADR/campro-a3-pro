import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import LicensePage from './pages/LicensePage'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/1981" element={<LicensePage licenseId="1981" />} />
        <Route path="/0981" element={<LicensePage licenseId="0981" />} />
        <Route path="*" element={<Navigate to="/1981" replace />} />
      </Routes>
    </HashRouter>
  )
}
