
interface FileProps {
    filename: String
    data: {}
    onClick: () => void
}

const File: React.FC<FileProps> = ({
  filename,
  data,
  onClick,
}) => {

  return (
    <div 
      className='
        text-sm bg- py-3 cursor-pointer text-white clickable-dark
        bg-null-sidebar-body
      '
      onClick={onClick}  
    >
      {filename}
    </div>
  )
}

export default File