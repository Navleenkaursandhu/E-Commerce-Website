import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import './App.css'
import { PageMain } from './page_main/PageMain'
import { PageAboutUs } from './page_about_us/PageAboutUs'
import { PageLogin } from './page_login/PageLogin'
import { PageForgotPassword } from './page_forgot_password/PageForgotPassword'
import { PageProductDetails } from './page_product_details/PageProductDetails'
import { CheckoutProcess } from './page_checkout_process/CheckoutProcess'
import { SignUpProcess } from './page_sign_up/SignUpProcess'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<PageMain />} />
          <Route path="about-us" element={<PageAboutUs />} />
          <Route path="login" element={<PageLogin />} />
          <Route path="sign-up" element={<SignUpProcess />} />
          <Route path="forgot-password" element={<PageForgotPassword />} />
          <Route path="product-details">
            <Route path=':id' element={<PageProductDetails />} />
          </Route>
          <Route path="start-checkout" element={<CheckoutProcess />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}