import { useState } from "react"
import { PageAddress } from "./PageAddress"
import { PageStartCheckout } from "./PageStartCheckout"
import { PagePayment } from "./PagePayment"
import { PageOrderSummary } from "./PageOrderSummary"

export const CheckoutProcess = () => {
  const [page, setPage] = useState(0)
  const [address, setAddress] = useState('')
  const [creditCardNum, setCreditCardNum] = useState('')

  console.log(address)
  return (
    <>
      {page === 0 && <PageStartCheckout onNext={() => setPage(prev => prev + 1)} />}
      {page === 1 && <PageAddress onNext={(inputAddress) => {
        setPage(prev => prev + 1)
        setAddress(inputAddress)
      }} />}
      {page === 2 && <PagePayment onNext={(inputCreditCardNum, inputExpiryMonth, inputExpiryYear, inputCvv) => {
        setPage(prev => prev + 1)
        setCreditCardNum(inputCreditCardNum)
      }} />}
      {page === 3 && <PageOrderSummary
        address={address}
        payment={creditCardNum}
        />}
    </>
  )
}