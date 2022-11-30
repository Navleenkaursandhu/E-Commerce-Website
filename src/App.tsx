import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import './App.css'
import { PageMain } from './page_main/PageMain'
import { PageAboutUs } from './page_about_us/PageAboutUs'
import { PageLogin } from './page_login/PageLogin'
import { PageSignUp } from './page_sign_up/PageSignUp'
import { PageForgotPassword } from './page_forgot_password/PageForgotPassword'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<PageMain />} />
          <Route path='AboutUs' element={<PageAboutUs />} />
          <Route path='Login' element={<PageLogin />} />
          <Route path='SignUp' element={<PageSignUp/>}/>
          <Route path='ForgotPassword' element={<PageForgotPassword/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}