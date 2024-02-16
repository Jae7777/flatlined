import SideBar from "./Sidebar"
import portfolio from '../data/portfolio.json'
import Showcase from "./Showcase"
import LinkButton from "./LinkButton"
import LogoGrid from "./LogoGrid"
import Subtitle from "./Subtitle"
import logoURLs from '../data/logos.json'

interface ProjectLayoutProps {
  isToggled: boolean
  project_key: string
}

const ProjectLayout: React.FC<ProjectLayoutProps> = ({
  isToggled,
  project_key
}) => {
  const project = portfolio[project_key as keyof typeof portfolio]
  const skills = project.skillset
  const logoObjects = skills.map((skill) => {
    const url = logoURLs[skill as keyof typeof logoURLs]
    return {name: skill, path: url}
  })

  return (
    <div className=''>
      <Showcase
        url={project.caniframe ? project.url : ('preview' in project ? project.preview : '')}
        isToggled={isToggled}
        isLive={project.caniframe}
        name={project.name}
      />
      
      <div className='flex flex-wrap max-w-[250px] mx-auto py-3'>
        <LinkButton
          url={project.url}
        />
      </div>

      <div className='pt-6'>
        <Subtitle content='SKILLS' />
      </div>
      <LogoGrid
        logos={logoObjects}
        isToggled={isToggled}
      />
    </div>
  )
}

export default ProjectLayout