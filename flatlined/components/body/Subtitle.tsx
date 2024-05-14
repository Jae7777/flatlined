
interface SubtitleProps {
  content: string
}

const Subtitle: React.FC<SubtitleProps> = ({
  content,
}) => {
  return (
    <div 
      style={{ fontFamily: 'ibm-plex-mono, monospace'}}
    className={`
      flex items-center 
      gap-2 text-md w-[30%] text-cyber-1
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