import './Timeline.css'

interface TimelineItemProp {
  data: {
    text: string,
    date: string,
    category: {
      tag: string[]
      color: string,
    },
    link: {
      url: string,
      text: string,
    }
  }
}

const TimelineItem: React.FC<TimelineItemProp> = ({
  data
}) => {
  return ( 
    <div className="
      timeline-item
    ">
      <div className="
        timeline-item-content
      ">
        {data.category.tag.map((item, i) => {
          return (
            <span className="" key={i} style={{ background: data.category.color }}>
              {item}
            </span>
          )
        })}
        
        <time>{data.date}</time>
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