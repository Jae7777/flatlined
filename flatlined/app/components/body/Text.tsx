

interface TextProps {
  content: string
  styling?: string
}

const Text: React.FC<TextProps> =({
  content,
  styling=''
}) => {
  return (
    <div className={`${styling}`}>
      {content}
    </div>
  )
}

export default Text