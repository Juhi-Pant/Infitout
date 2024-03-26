import React, { useState } from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryContainer } from 'victory';
 
const peakBarIndex = 9;
const generateChartData = () => {
    const totalBars = 17;
    const barHeight = 20; // Fixed height for all bars
    const peakBarIndex = 9; // The middle bar index
  
    let values = [];
  
    for (let i = 1; i <= totalBars; i++) {
      // Calculate the blue intensity
      const distanceFromPeak = Math.abs(i - peakBarIndex);
      const blueIntensity = 255 - (distanceFromPeak / (totalBars / 2)) * 200;
      
      const color = `rgba(0, 0, ${blueIntensity}, 1)`;
  
      values.push({
        id: i,
        value: barHeight,
        fill: color
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
        domain={{ y: [-middleValue, middleValue] }} //domain to allow bars to extend up and down
      >
        <VictoryAxis
          style={{
            axis: { stroke: 'transparent' },
            ticks: { stroke: 'transparent' },
            tickLabels: { fontSize: 10, fill: 'transparent' }
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