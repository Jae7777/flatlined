import { useState } from "react"
import { IoMdMail } from "react-icons/io"
import Clipboard from 'clipboard'

interface EmailIconProps {
  email: string 
}

const EmailIcon: React.FC<EmailIconProps> = ({
  email,
}) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
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
        onClick={handleCopy}
      />
      <div className={`
          absolute text-white text-[11px] 
        bg-cyber-2 px-2 py-1 rounded-lg 
          duration-00
        ${copied ? 'opacity-100' : 'opacity-0'}
      `}>
        Email Copied!
      </div>
    </div>
  )
}

export default EmailIcon