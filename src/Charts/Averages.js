import React, { useState } from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryContainer } from 'victory';
 

const peakBarIndex = 9;
const generateChartData = () => {
    const totalBars = 17;
    const minHeight = 12;
    const heightIncrement = 4;
    let values = [];
  
    // Function to interpolate between two colors
    const interpolateColor = (color1, color2, factor) => {
      const result = color1.slice();
      for (let i = 0; i < 3; i++) {
        result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
      }
      return `rgba(${result[0]}, ${result[1]}, ${result[2]}, 1)`;
    };
  
    
    const orange = [255, 165, 0]; // RGB for orange
    const blue = [0, 0, 255]; // RGB for blue
  
    //Number of bars for the gradient transition
    const gradientTransitionCount = Math.ceil(totalBars / 2);
  
    for (let i = 1; i <= totalBars; i++) {
 
      const factor = (i <= gradientTransitionCount) ? 
                     (i - 1) / (gradientTransitionCount - 1) :
                     (totalBars - i) / (gradientTransitionCount - 1);
  

      const color = (i <= gradientTransitionCount) ? 
                    interpolateColor(orange, blue, factor) : 
                    interpolateColor(blue, orange, factor); 
  
      // Calculate the height of the bar
      const heightDifference = Math.abs(i - peakBarIndex);
      const height = minHeight + heightDifference * heightIncrement;
  
      values.push({
        id: i,
        value: height,
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