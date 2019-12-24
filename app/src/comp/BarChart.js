import React from 'react';
import {Chart, Dataset} from 'react-rainbow-components';

const BarChart = ({title, labels, values}) => {

    return (
        <Chart labels = {labels} type = 'bar'>
            <Dataset title = {title} values = {values} backgroundColor = 'lightblue'/>
            </Chart>

    )

}


export default BarChart;

// <Dataset title = {title} values = {values} backgroundColor = 'lightblue'/>
// <Dataset title = 'active' values = {[undefined, 1.5]} backgroundColor = 'pink'/>


