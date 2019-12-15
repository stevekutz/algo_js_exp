import React from 'react';
import {Dataset, Chart} from 'react-rainbow-components';


const containerStyles = {
    maxWidth: 600,
};



const renderDatasets = (testArr) => {
    
    return (
        <Dataset values = {testArr} />
    )
}



const ChartDataSet = ({testArr}) => {

    

    return (
        <div className="rainbow-p-vertical_xx-large rainbow-m_auto" style={containerStyles}>
        <Chart 
            type = "bar"
            labels = {['0', '5', '10', '15', '20']}
            className="rainbow-m-horizontal_xx-large rainbow-m-top_x-large"
        >

            <Dataset values = {testArr} />
           
                
        </Chart>
        </div>
    )

}

export default ChartDataSet;