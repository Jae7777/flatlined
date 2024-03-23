import { useState } from "react"
import { IoMdMail } from "react-icons/io"
import Clipboard from 'clipboard'
import { Toaster } from "./ui/toaster"
import { useToast } from "./ui/use-toast"

interface EmailIconProps {
  email: string 
}

const EmailIcon: React.FC<EmailIconProps> = ({
  email,
}) => {
  const [copied, setCopied] = useState(false)
  const { toast } = useToast()

  function handleCopy () {
    const clipboard = new Clipboard('.email-icon', {
      text: () => email
    })

    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className=''>
      <IoMdMail
        className='email-icon navbar-item clickable-dark'
        color='#f6b080'
        onClick={() => {
          handleCopy()
          toast({
            title: 'Email Copied!',
            duration: 2000,          
          })
        }}
      />
    </div>
  )
}

export default EmailIcon