import React from 'react'
import { Chart } from 'react-charts'
 
function MyChart() {
  const data = React.useMemo(
    () => [
      {
        label: 'Series 1',
        data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
      },
    //   {
    //     label: 'Series 2',
    //     data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
    //   }
    ],
    []
  )
 
//   const axes = React.useMemo(
//     () => [
//       { primary: true, type: 'linear', position: 'bottom' },
//       { type: 'linear', position: 'left' }
//     ],
//     []
//   )
    const series = React.useMemo(
        () => ({
        type: 'bar'
        }),
        []
    )
    const axes = React.useMemo(
        () => [
        { primary: true, type: 'ordinal', position: 'bottom' },
        { position: 'left', type: 'linear', stacked: false }
        ],
        []
    )


    return (
        <div
          style={{
            width: '400px',
            height: '300px'
          }}
        >
          <Chart data={data} series={series} axes={axes} />
        </div>




    )
    // A react-chart hyper-responsively and continuusly fills the available
    // space of its parent element automatically
  



}

export default MyChart;