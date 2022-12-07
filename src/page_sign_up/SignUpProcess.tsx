import { useState } from "react"
import { PageUserSignedUp } from "./PageUserSignedUp"
import { PageSignUp } from "./PageSignUp"
import { PageLogin } from "../page_login/PageLogin"

export const SignUpProcess = () => {

  const [page, setPage] = useState(0)

  return (
    <>
      {page === 0 && <PageSignUp onNext={() => setPage(prev => prev + 1)} />}
      {page === 1 && <PageUserSignedUp onNext={() => setPage(prev => prev + 1)} />}
      {page === 2 && <PageLogin/>}

    </>
  )
}