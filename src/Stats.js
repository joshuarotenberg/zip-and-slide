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
        <div>Stats</div>
    )
}

export default Stats;

