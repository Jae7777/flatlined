import { useSearchParams, useRouter } from "next/navigation"
import qs from "query-string"
import { useCallback } from "react"

interface FileProps {
  filename: string
  param: string
  setToggledFalse: () => void
}

const File: React.FC<FileProps> = ({
  filename,
  param,
  setToggledFalse
}) => {
  const router = useRouter()
  const params = useSearchParams()

  const handleClick = useCallback(() => {
    let currentQuery = {}

    if (params) {
      currentQuery = qs.parse(params.toString())
    }

    const updatedQuery: any = {
      ...currentQuery,
      project: param
    }
    
    const url = qs.stringifyUrl({
      url: '/',
      query: updatedQuery
    }, { skipNull: true })

    // reset toggle state to false if xs screen
    const width = window.innerWidth
    if (width < 540) setToggledFalse()

    router.push(url)
  }, [param, params, router])

  return (
    <div 
      className='
        text-sm py-3 cursor-pointer text-white clickable-dark
        bg-null-sidebar-body
      '
      onClick={handleClick}  
    >
      {filename}
    </div>
  )
}

export default File