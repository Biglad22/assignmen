import { useState } from 'react';
import classes from '../styles/candlestickchat.module.css';
import chevron from '../assets/SVGs/chevron-right copy.svg';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Cell,
  ResponsiveContainer
} from 'recharts';
const colors = [
  '#1f77b4',
  '#ff7f0e',
  '#2ca02c',
  '#d62728',
  '#9467bd',
  '#8c564b',
  '#e377c2',
  '#7f7f7f',
  '#bcbd22',
  '#17becf',
];


const rawData = [
  {
    high: 25,
    low: 10,
    open: 15,
    close: 25,
    ts: 'May',
  },
  {
    high: 27,
    low: 12,
    open: 17,
    close: 27,
    ts: 'Jun',
  },
  {
    high: 20,
    low: 5,
    open: 10,
    close: 20,
    ts: 'Jul',
  },
  {high: 25,
    low: 15,
    open: 20,
    close: 25,
    ts: 'Aug',
  },
  {
    high: 16,
    low: 6,
    open: 6,
    close: 16,
    ts: 'Sept',
  },
  {
    high: 20,
    low: 5,
    open: 10,
    close: 20,
    ts: 'Oct',
  },
  { 
    high: 32,
    low: 24,
    open: 29,
    close: 32,
    ts: 'Nov',
  },
  {
    high: 10,
    low: 2,
    open: 5,
    close: 10,
    ts: 'Dec',

  },
  {
    high: 25,
    low: 10,
    open: 15,
    close: 23,
    ts: 'Jan',
  },
  {
    high: 22,
    low: 12,
    open: 17,
    close: 22,
    ts: 'Feb',
  },
  {
    high: 19,
    low: 7,
    open: 10,
    close: 19,
    ts: 'Mar',
  },
  {
    high: 25,
    low: 15,
    open: 20,
    close: 25,
    ts: 'Apr',
  },
  
];




///candle stick pattern
const Candlestick = props => {
  const {
    x,
    y,
    width,
    height,
    low,
    high,
    openClose: [open, close],
  } = props;

  
  const isGrowing = open < close;
  const color = props.index  ? '#3326AE' : '#3326AE';
  const ratio = Math.abs(height / (open - close));
  
  return (
    <g stroke={color} fill="#3326AE" style={{borderRadius: '5'}} strokeWidth="2">
      <path
        d={`
          M ${x},${y}
          L ${x},${y + height}
          L ${x + width},${y + height}
          L ${x + width},${y}
          L ${x},${y}
        `}
      />
      {/* bottom line */}
      {isGrowing ? (
        <path
          d={`
            M ${x + width / 2}, ${y + height}
            v ${(open - low) * ratio}
          `}
        />
      ) : (
        <path
          d={`
            M ${x + width / 2}, ${y}
            v ${(close - low) * ratio}
          `}
        />
      )}
      {/* top line */}
      {isGrowing ? (
        <path
          d={`
            M ${x + width / 2}, ${y}
            v ${(close - high) * ratio}
          `}
        />
      ) : (
        <path
          d={`
            M ${x + width / 2}, ${y + height}
            v ${(open - high) * ratio}
          `}
        />
      )}
    </g>
  );
};



const prepareData = data => {
  return data.map(({ open, close, ...other }) => {
    return {
      ...other,
      openClose: [open, close],
    };
  });
};


export const CustomShapeBarChart = () => {
  const data = prepareData(rawData);
  data.reduce((acc, item) => console.log(item), 0);


  const minValue = data.reduce(
    (minValue, { low, openClose: [open, close] }) => {
      const currentMin = Math.min(low, open, close);
      return minValue === null || currentMin < minValue ? currentMin : minValue;
    },
    null,
  );


  const maxValue = data.reduce(
    (maxValue, { high, openClose: [open, close] }) => {
      const currentMax = Math.max(high, open, close);
      return currentMax > maxValue ? currentMax : maxValue;
    },
    minValue,
  );


  ///event listeners
  const [activeIndex, setActiveIndex] = useState(null);

  const handleBarMouseOver = (data, index) => {
    setActiveIndex(index);
  };

  const handleBarMouseLeave = () => {
    setActiveIndex(null);
  };


  return (

    <div className={`${classes.mainWrapper}`}>
      <div className={`${classes.headerWrapper}`}>
        <h6>
          Statistics
        </h6>
        <button type="button">
          <p>Year</p>
          <img src={chevron} alt="icon" style={{transform : 'rotate(90deg)'}} />
        </button>
      </div>

      <div className={`${classes.mainBodyWrapper}`}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            cx={0}
            data={data}
            margin={{ top: 0, right: 0, left: -30, bottom: 10 }}
          >
            <XAxis dataKey="ts" axisLine={false} tickLine={false} margin={{ top: 40}}  tick={{ fill: '#C4BDD5' }}/>
            <YAxis axisLine={false} tickLine={false} domain={[minValue, maxValue]}  margin={{right: 40 }} tick={{ fill: '#C4BDD5' }} />

            <Bar
              dataKey="openClose"
              fill="#8884d8"
              shape={<Candlestick />}
              radius={15}
              barSize={2}
              // label={{ position: 'top' }}
              onMouseOver={handleBarMouseOver}
              onMouseLeave={handleBarMouseLeave}
              activeIndex={activeIndex}
              animationDuration={300}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

