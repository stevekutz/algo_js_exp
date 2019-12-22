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