import { useRouter,  } from "next/navigation"
import { useEffect, useState } from "react"
import LandingLayout from "./LandingLayout"
import ProjectLayout from "./ProjectLayout"

interface BodyContentProps {
  isToggled: boolean
  project_slug: string | undefined
}

const BodyContent: React.FC<BodyContentProps> = ({
  isToggled,
  project_slug
}) => {
  const router = useRouter()
  const [project, setProject] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    project_slug ? setProject(project_slug) : setProject('')
    setIsLoading(false)
  }, [router, project_slug, project, isLoading])

  if (isLoading) {
    // todo: skeleton of page
    return <div>Loading...</div>
  }

  return (
    <div>
      {project == ''
        ? <LandingLayout
            isToggled={isToggled}
          />
        : <ProjectLayout
            isToggled={isToggled}
            project_key={project}
          />
      }
    </div>
  )
}

export default BodyContent