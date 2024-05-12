import Logo from "./Logo"


interface LogoGridProps {
  logos: {path: string, name: string}[]
}

const LogoGrid: React.FC<LogoGridProps> = ({
  logos
}) => {
  return (
    <div style={{boxShadow: "0 0 40px #24242E"}} 
      className={` 
      grid dark-dot-pattern mt-2 py-4 px-2 rounded-sm
      grid-cols-4 xs:grid-cols-5 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-9 xl:grid-cols-11 2xl:grid-cols-13
    `}>
        {logos.map((logo) => {
          return (
            <Logo
              key={logo.name}
              imgSrc={logo.path}
              name={logo.name}
            />
          )
        })}
    </div>
  )
}

export default LogoGrid