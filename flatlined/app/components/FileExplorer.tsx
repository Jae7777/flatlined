import { useEffect, useState } from "react"
import File from "./File"
import data from '../portfolio.json'
import { useRouter } from "next/navigation"

interface FileExplorerProps {

}

const FileExplorer: React.FC<FileExplorerProps> = ({
  
}) => {
  const router = useRouter()
  const websites = data.projects.webdevelopment
  const games = data.projects.gamedevelopment
  return (
    <div className='
      justify-center items-center space-y-[1px]
    '>
      {
        Object.keys(websites).map((key) => { 
          const website = websites[key as keyof typeof websites]         
          return (
            <File
              key={key}
              filename={website.name}
              data={website}
              onClick={() => {router.push(`/projects/webdevelopment/${key}`)}}
            />
          )
        })
      }
    </div>
  )
}

export default FileExplorer