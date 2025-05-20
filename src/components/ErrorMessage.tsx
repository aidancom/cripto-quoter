import type { ReactNode } from "react"

type ErrorProps = {
  children: ReactNode
}

const ErrorMessage = ({children}: ErrorProps) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default ErrorMessage
