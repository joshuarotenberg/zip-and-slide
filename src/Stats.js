import {useState, useEffect} from 'react';

const Stats = ({images, activeSlide}) => {

    const initialState = images.map((_image, index) => {
        return (
            {id: index, count: 0}
        )
    });

    const [views, setViews] = useState(initialState);

    useEffect(() => {
       setViews((prevViews) => 
        prevViews.map((views) => {
            if (views.id === activeSlide) {
                return {
                    ...views,
                    count: views.count + 1
                }
            } else {
                return views;
            }
        })
       )
    }, [activeSlide]);

    return (
        <div className="counter"> 
          {views.map((view, index) => (
              <div className="stats" key={index}> 
                <span className="title">slide {index}</span> 
                <span className="count">{view.count}</span>
              </div>
          ))}
         </div>
    )
}

export default Stats;

