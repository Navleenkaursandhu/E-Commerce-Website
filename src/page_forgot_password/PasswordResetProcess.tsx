import { useState } from "react"
import { PageForgotPassword } from "./PageForgotPassword"
import { PageResetPassword } from "./PageResetPassword"

export const PasswordResetprocess = () => {

  const [page, setPage] = useState(0)
  return (
    <>
      {page === 0 && <PageForgotPassword onNext={() => setPage(prev => prev + 1)} />}
      {page === 1 && <PageResetPassword/>}
    </>
  )
}