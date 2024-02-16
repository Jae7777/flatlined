import { useEffect, useState } from "react"
import File from "./File"
import portfolio from '../../data/portfolio.json'
import { useRouter, useSearchParams } from "next/navigation"

interface FileExplorerProps {

}

const FileExplorer: React.FC<FileExplorerProps> = ({
  
}) => {
  const projects = Object.keys(portfolio)

  return (
    <div className='
      justify-center items-center space-y-[1px]
    '>
      {
        projects.map((project) => { 
          return (
            <File
              key={project}
              filename={portfolio[project as keyof typeof portfolio].name}
              param={project}
            />
          )
        })
      }
    </div>
  )
}

export default FileExplorer