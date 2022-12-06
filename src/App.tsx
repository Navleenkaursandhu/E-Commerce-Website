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
import { PageProductDetails } from './page_product_details/PageProductDetails'
import { PageStartCheckout } from './page_start_checkout/PageStartCheckout'
import { Address } from './page_address/Address'
import { Payment } from './page_payment/Payment'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<PageMain />} />
          <Route path="about-us" element={<PageAboutUs />} />
          <Route path="login" element={<PageLogin />} />
          <Route path="sign-up" element={<PageSignUp />} />
          <Route path="forgot-password" element={<PageForgotPassword />} />
          <Route path="product-details">
            <Route path=':id' element={<PageProductDetails />} />
          </Route>
          <Route path="start-checkout" element={<PageStartCheckout />} />
          <Route path="address" element={<Address />} />
          <Route path="payment" element={<Payment />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}