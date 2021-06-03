import React, {PureComponent} from 'react';
import {Svg, G, Line, Rect, Text} from 'react-native-svg';
import * as d3 from 'd3';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const GRAPH_MARGIN = width * 0.02;
const GRAPH_BAR_WIDTH = width * 0.02;
const colors = {
  axis: '#E4E4E4',
  bars: '#15AD13',
};

export default class BarChart extends PureComponent {
  render() {
    // Dimensions
    const SVGHeight = height * 0.5;
    const SVGWidth = width * 0.95;
    const graphHeight = SVGHeight - 5 * GRAPH_MARGIN;
    const graphWidth = SVGWidth - 4 * GRAPH_MARGIN;
    const data = this.props.data;

    // X scale point
    const xDomain = data.map(item => item.label);
    const xRange = [0, graphWidth];
    const x = d3.scalePoint().domain(xDomain).range(xRange).padding(1);

    // Y scale linear
    const maxValue = d3.max(data, d => d.value);
    const topValue = Math.ceil(maxValue / this.props.round) * this.props.round;
    const yDomain = [0, topValue];
    const yRange = [0, graphHeight];
    const y = d3.scaleLinear().domain(yDomain).range(yRange);

    // top axis and middle axis
    const middleValue = topValue / 2;

    return (
      <Svg width={SVGWidth} height={SVGHeight}>
        <G y={graphHeight + GRAPH_MARGIN}>
          {/* Top value label */}
          <Text
            x={graphWidth}
            textAnchor="end"
            y={y(topValue) * -0.9}
            fontSize={width * 0.035}
            fill="black"
            fillOpacity={0.4}>
            {topValue + ' ' + this.props.unit}
          </Text>

          {/* top axis */}
          <Line
            x1={GRAPH_MARGIN}
            y1={y(topValue) * -1}
            x2={graphWidth}
            y2={y(topValue) * -1}
            stroke={colors.axis}
            strokeDasharray={[3, 3]}
            strokeWidth="0.5"
          />

          {/* middle axis */}
          <Line
            x1={GRAPH_MARGIN}
            y1={y(middleValue) * -1}
            x2={graphWidth}
            y2={y(middleValue) * -1}
            stroke={colors.axis}
            strokeDasharray={[3, 3]}
            strokeWidth="0.5"
          />

          {/* bottom axis */}
          <Line
            x1={GRAPH_MARGIN}
            y1="2"
            x2={graphWidth}
            y2="2"
            stroke={colors.axis}
            strokeWidth="0.5"
          />

          {/* bars */}
          {data.map(item => (
            <Rect
              key={'bar' + item.label}
              x={x(item.label) - GRAPH_BAR_WIDTH / 2}
              y={y(item.value) * -1}
              rx={2.5}
              width={GRAPH_BAR_WIDTH}
              height={y(item.value)}
              fill={colors.bars}
            />
          ))}

          {/* labels */}
          {data.map(item => (
            <Text
              fill="red"
              key={'label' + item.label}
              fontSize={width * 0.025}
              x={x(item.label)}
              y="20"
              textAnchor="middle">
              {item.label}
            </Text>
          ))}
        </G>
      </Svg>
    );
  }
}
