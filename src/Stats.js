import {useState} from 'react';

const Stats = ({images}) => {

    const initialState = images.map((_image, index) => {
        return (
            {id: index, count: 0}
        )
    });

    const [views, setViews] = useState(initialState);

    return (
        <div>Stats</div>
    )
}

export default Stats;

