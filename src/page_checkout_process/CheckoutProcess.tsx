import { useState } from "react"
import { PageAddress } from "./PageAddress"
import { PageStartCheckout } from "./PageStartCheckout"
import { PagePayment } from "./PagePayment"
import { PageOrderSummary } from "./PageOrderSummary"
import { PageOrderPlaced } from "./PageOrderPlaced"

export const CheckoutProcess = () => {
  const [page, setPage] = useState(0)
  const [address, setAddress] = useState('')
  const [creditCardNum, setCreditCardNum] = useState('')

  return (
    <>
      {page === 0 && <PageStartCheckout onNext={() => setPage(prev => prev + 1)} />}
      {page === 1 && <PageAddress onNext={(inputAddress) => {
        setPage(prev => prev + 1)
        setAddress(inputAddress)
      }} />}
      {page === 2 && <PagePayment onNext={(inputCreditCardNum) => {
        setPage(prev => prev + 1)
        setCreditCardNum(inputCreditCardNum)
      }} />}
      {page === 3 && <PageOrderSummary onNext={() => setPage(prev => prev + 1)}
        address={address}
        payment={creditCardNum}
      />}
      {page === 4 && <PageOrderPlaced />}
    </>
  )
}