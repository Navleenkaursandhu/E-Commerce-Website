import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import './App.css'
import { PageMain } from './page_main/PageMain'
import { PageAboutUs } from './page_about_us/PageAboutUs'
import { PageLogin } from './page_login/PageLogin'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<PageMain />} />
          <Route path='AboutUs' element={<PageAboutUs />} />
          <Route path='Login' element={<PageLogin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}