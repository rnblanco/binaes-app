// Source: https://github.com/Taimoorkhan1122/React-Dashboard
const calculatePoint = (i, intervalSize, colorRangeInfo) => {
  let { colorStart, colorEnd, useEndAsStart } = colorRangeInfo;
  return useEndAsStart
    ? colorEnd - i * intervalSize
    : colorStart + i * intervalSize;
};

/* Must use an interpolated color scale, which has a range of [0, 1] */
const interpolateColors = (dataLength, colorScale, colorRangeInfo) => {
  const { colorStart, colorEnd } = colorRangeInfo;
  const colorRange = colorEnd - colorStart;
  const intervalSize = colorRange / dataLength;
  let i;
  let colorPoint;
  const colorArray = [];

  for (i = 0; i < dataLength; i++) {
    colorPoint = calculatePoint(i, intervalSize, colorRangeInfo);
    colorArray.push(colorScale(colorPoint));
  }

  return colorArray;
};

/* Must use an interpolated color scale, which has a range of [0, 1] */
export const interpolateCustomColors = (
  dataLength: number,
  colorScale: string[],
  colorRangeInfo: any
) => {
  const { colorStart, colorEnd } = colorRangeInfo;
  const colorRange = colorEnd - colorStart;
  const intervalSize = colorRange / dataLength;
  let i;
  let colorPoint;
  const colorArray = [];

  for (i = 0; i < dataLength; i++) {
    colorPoint = calculatePoint(i, intervalSize, colorRangeInfo);
    colorArray.push(colorScale[i]);
  }

  return colorArray;
};

export default interpolateColors;
