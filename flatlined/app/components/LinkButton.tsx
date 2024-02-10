import Link from "next/link"

interface LinkButtonProps {
  url: string
}

const LinkButton: React.FC<LinkButtonProps> = ({
  url,
}) => {
  return (
    <div className='button-2'>
      <a href={url} target='_blank' rel='noopener noreferrer'>
        Visit Page
      </a>
    </div>
  )
}

export default LinkButton