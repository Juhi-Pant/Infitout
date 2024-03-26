import React, { useState } from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryContainer } from 'victory';
 
// Generate chart data
const peakBarIndex = 9;
const generateChartData = () => {
  const totalBars = 17;
  const minHeight = 12;
  const heightIncrement = 4; 
  let values = [];

  for (let i = 1; i <= totalBars; i++) {
    const heightDifference = Math.abs(i - peakBarIndex);
    const height = minHeight + heightDifference * heightIncrement;
    let red, green, blue;

    if (i <= peakBarIndex) {
      // Gradient from red to blue as we move towards the center
      red = 255;
      green = Math.round(255 * (i / peakBarIndex)); // Increasing as we go towards the center
      blue = Math.round(128 * (i / peakBarIndex)); // Halfway towards full blue at the center
    } else {
      // Gradient from blue to green as we move away from the center
      red = 0;
      green = 255;
      blue = Math.round(255 - 127 * ((i - peakBarIndex) / (totalBars - peakBarIndex))); // Decreasing as we go towards the edges
    }

    const alpha = 1; // Non-transparent

    values.push({
      id: i,
      value: height,
      fill: `rgba(${red}, ${green}, ${blue}, ${alpha})`
    });
  }

  return values;
};


const chartData = generateChartData();
const middleValue = Math.max(...chartData.map(d => d.value)) / 2;

const App = ({ selectedIndex}) => {
  const [selectedBarId, setSelectedBarId] = useState(peakBarIndex);
  const pointerXPosition = selectedIndex * 20 + 50; 

  return (
    <div>
      <VictoryChart
        domainPadding={{ x: 20 }}
        containerComponent={<VictoryContainer responsive={true} />}
        width={600}
        height={300}
        domain={{ y: [-middleValue, middleValue] }} // Set domain to allow bars to extend up and down
      >
        <VictoryAxis
          style={{
            axis: { stroke: 'transparent' },
            ticks: { stroke: 'transparent' },
            tickLabels: { fontSize: 10, fill: 'transparent' } // Hide tick labels
          }}
        />
        {chartData.map((data, index) => (
          <g key={data.id}>
            {/* Positive part of the bar */}
            <rect
              x={index * 20 + 50} // Position the bar along the x-axis
              y={150 - data.value} // Start from the center and extend upwards
              width={5}
              height={data.value}
              fill={data.fill}
              onClick={() => setSelectedBarId(data.id)}
              style={{ cursor: 'pointer' }}
            />
            {/* Negative part of the bar */}
            <rect
              x={index * 20 + 50} // Same x position
              y={150} // Start from the center and extend downwards
              width={5}
              height={data.value}
              fill={data.fill}
              onClick={() => setSelectedBarId(data.id)}
              style={{ cursor: 'pointer' }}
            />
          </g>
        ))}
        {/* Pointer on the chart */}
        <circle
          cx={pointerXPosition} 
          cy={150} 
          r={5} 
          fill="white" 
          stroke="blue"
          strokeWidth={2} 
        />
      </VictoryChart>
    </div>
  );
};

export default App;