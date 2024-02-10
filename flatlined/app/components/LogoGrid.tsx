import Logo from "./Logo"


interface LogoGridProps {
  logos: {path: string, name: string}[],
  isToggled: boolean
}

const LogoGrid: React.FC<LogoGridProps> = ({
  logos,
  isToggled
}) => {
  return (
    <div style={{boxShadow: "0 0 40px #24242E"}} 
      className={` 
      grid dark-dot-pattern mt-2 py-4 px-2 rounded-sm
      ${isToggled 
        ? 'grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10'
        : 'grid-cols-4 xs:grid-cols-5 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-9 xl:grid-cols-11 2xl:grid-cols-13'}
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