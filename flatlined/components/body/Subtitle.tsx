
interface SubtitleProps {
  content: string
}

const Subtitle: React.FC<SubtitleProps> = ({
  content,
}) => {
  return (
    <div className={`
      flex items-center 
      gap-2 responsive-text-lg w-[30%] text-cyber-1
      tracking-wide
    `}>
      <hr style={{
        color: 'white',
        backgroundColor: 'white',
        height: 2,
        width: 20,
        minWidth: 3
      }} />
      {content}
    </div>
  )
}

export default Subtitle