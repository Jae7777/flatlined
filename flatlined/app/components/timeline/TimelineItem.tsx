import './Timeline.css'

interface TimelineItemProp {
  data: {
    text: string,
    startdate: string,
    enddate: string,
    category: {
      tag: string
      color: string,
    },
    link?: {
      url: string,
      text: string,
    } | null
  }
}

const TimelineItem: React.FC<TimelineItemProp> = ({
  data
}) => {
  return ( 
    <div className="
      timeline-item
    ">
      <div className="timeline-item-content w-full">
        <span 
          className="px-2 rounded-md mb-3 text-xs" 
          style={{ background: data.category.color }}
        >
          {data.category.tag}
        </span>
        
        <time className='text-xs text-neutral-400'>
          {`${data.startdate} - ${data.enddate}`}
        </time>
        <p className='py-4 text-sm'>
          {data.text}
        </p>
        {data.link && (
          <a
            href={data.link.url}
            target="_blank"
            rel="noopener noreferrer"
            className='text-xs hover:underline'
          >
              {`${data.link.text} ►`}
          </a>
        )}
        <span className="circle" />
      </div>
    </div>
  );
}
 
export default TimelineItem;