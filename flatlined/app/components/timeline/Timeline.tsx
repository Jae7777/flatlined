import timelineData from '../../data/timeline.json'
import TimelineItem from './TimelineItem';
import './Timeline.css'

const Timeline = () => {
  return (  
    timelineData.length > 0 && (
      <div className='
        timeline-container
        flex flex-col relative my-[40px]
      '>
        {timelineData.map((data, i) => {
          return (
            <TimelineItem data={data} key={i} />
        )})}
      </div>
    )
  );
}
 
export default Timeline;