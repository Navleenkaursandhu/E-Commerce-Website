import { useState } from "react"
import { PageAddress } from "./PageAddress"
import { PageStartCheckout } from "./PageStartCheckout"
import { PagePayment } from "./PagePayment"
import { PageOrderSummary } from "./PageOrderSummary"

export const CheckoutProcess = () => {
  const [page, setPage] = useState(0)
  return (
    <>
      {page === 0 && <PageStartCheckout onNext={() => setPage(prev => prev + 1)} />}
      {page === 1 && <PageAddress onNext={() => setPage(prev => prev + 1)} />}
      {page === 2 && <PagePayment onNext={() => setPage(prev => prev + 1)} />}
      {page === 3 && <PageOrderSummary />}
    </>
  )
}