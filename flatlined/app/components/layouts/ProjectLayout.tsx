import SideBar from "../sidebar/Sidebar"
import portfolio from '../../data/portfolio.json'
import Showcase from "../body/Showcase"
import LinkButton from "../LinkButton"
import LogoGrid from "../body/LogoGrid"
import Subtitle from "../body/Subtitle"
import logoURLs from '../../data/logos.json'
import Text from "../body/Text"

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

      <div className='py-4 space-y-4'>
        <div className='flex justify-between gap-4 '>
          <Text
            content={project.role}
            styling='text-left responsive-text-sm text-cybercyan'
          />
          <div className='text-right space-y-2'>
            <Text
              content={`${project.startDate} - ${project.endDate}`}
              styling='responsive-text-xs text-cyber-2'
            />
            <Text
              content={`Status: ${project.status}`}
              styling='text-cyberviolet responsive-text-xs'
            />
          </div>
        </div>

        <Text
          content={'description' in project ? project.description : ''}
          styling='text-offwhite responsive-text-xs'
        />
        <Text
          content={`Collaborators: 
          ${'collaborators' in project 
          ? project.collaborators.join(', ')
          : 'None'}`}
          styling='text-cyber-2 text-sm'
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