// Source: https://github.com/Taimoorkhan1122/React-Dashboard
import interpolateColors from './chromaticColors';
import * as d3 from 'd3-scale-chromatic';

export const chartData = (chartConfig: any) => {
  const { labels, data, colorRangeInfo, scale, dataLabel } = chartConfig;

  // chromatic color data
  const dataLength = labels.length;

  // sets d3 interpolate color range
  const randomColor = interpolateColors(dataLength, scale, colorRangeInfo);

  return {
    labels: labels,
    datasets: [
      {
        label: dataLabel,
        data: data,
        backgroundColor: randomColor,
        borderColor: randomColor,
        borderWidth: 0,
      },
    ],
  };
};

export const generateColors = (dataLength: number) => {
  const colorScale = d3.interpolateRainbow;

  const colorRangeInfo = {
    colorStart: 0.83,
    colorEnd: 1.639,
    useEndAsStart: false,
  };

  const colors = interpolateColors(dataLength, colorScale, colorRangeInfo);
  
  colors.forEach((color) => {
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
  });
  
  return colors;
};

