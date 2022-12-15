import { useState } from 'react'
import { PageForgotPassword } from './PageForgotPassword'
import { PageResetPassword } from './PageResetPassword'
import { PasswordIsReset } from './PasswordIsReset'

export const PasswordResetprocess = () => {
  const [page, setPage] = useState(0)
  const [emailEntered, setEmailEntered] = useState('')
  return (
    <>
      {page === 0 && <PageForgotPassword onNext={(enteredEmailToResetPassword) => {
        setPage(prev => prev + 1)
        setEmailEntered(enteredEmailToResetPassword)
      }
      }
      />}
      {page === 1 && <PageResetPassword emailEntered={emailEntered} onNext={() => setPage(prev => prev + 1)} />}

      {page === 2 && <PasswordIsReset />}
    </>
  )
}
