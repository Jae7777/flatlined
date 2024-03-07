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
      flex items-end pr-[30px] relative
      my-[10px] w-1/2
    ">
      <div className="timeline-item-content">
        <span className="" style={{ background: data.category.color }}>
          {data.category.tag}
        </span>
        
        <time>{`${data.startdate} - ${data.enddate}`}</time>
        <p>{data.text}</p>
        {data.link && (
          <a
            href={data.link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
              {data.link.text}
          </a>
        )}
        <span className="circle" />
      </div>
    </div>
  );
}
 
export default TimelineItem;