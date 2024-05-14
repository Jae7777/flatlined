import Logo from "./Logo"
import LogoURLs from '../../lib/logos.json'

interface LogoGridProps {
  names: string[]
}

const LogoGrid: React.FC<LogoGridProps> = ({
  names
}) => {
  const logos: {name: string, path: string}[] = names.map((name) => {
    return {
      name: name,
      path: LogoURLs[name as keyof typeof LogoURLs]
    }
  })
  return (
    <div style={{boxShadow: "0 0 40px #24242E"}} 
      className={` 
      grid dark-dot-pattern py-4 px-2 gap-y-3 rounded-sm grid-cols-4 xs:grid-cols-5
    `}>
        {logos.map((logo) => {
          return (
            <Logo
              key={logo.name}
              imgSrc={logo.path}
              name={logo.name}
              backdrop
            />
          )
        })}
    </div>
  )
}

export default LogoGrid