import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import './App.css'
import { PageMain } from './page_main/PageMain'
import { PageAboutUs } from './page_about_us/PageAboutUs'
import { PageLogin } from './page_login/PageLogin'
import { PasswordResetprocess } from './page_forgot_password/PasswordResetProcess'
import { PageProductDetails } from './page_product_details/PageProductDetails'
import { CheckoutProcess } from './page_checkout_process/CheckoutProcess'
import { SignUpProcess } from './page_sign_up/SignUpProcess'
import { PageOrderHistory } from './page_order_history/PageOrderHistory'
import { PageResetPassword } from './page_forgot_password/PageResetPassword'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<PageMain />} />
          <Route path="about-us" element={<PageAboutUs />} />
          <Route path="login" element={<PageLogin />} />
          <Route path="sign-up" element={<SignUpProcess />} />
          <Route path="forgot-password" element={<PasswordResetprocess />} />
          <Route path="product-details">
            <Route path=':id' element={<PageProductDetails />} />
          </Route>
          <Route path="start-checkout" element={<CheckoutProcess />} />
          <Route path="order-history" element={<PageOrderHistory />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
