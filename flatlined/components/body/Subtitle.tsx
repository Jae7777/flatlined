import { Nunito_Sans} from "next/font/google"

const font = Nunito_Sans({
  subsets: ['latin'],
  weight: ['600']
})

interface SubtitleProps {
  content: string
}

const Subtitle: React.FC<SubtitleProps> = ({
  content,
}) => {
  return (
    <div className={`
      ${font.className} flex items-center 
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