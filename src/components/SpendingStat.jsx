import React from 'react';
import { ComposedChart, Area, Line, XAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import classes from '../styles/SpendingStat.module.css'

const data = [
  { week: 'Week 1', uv: 100, pv: 20 },
  { week: 'Week 2', uv: 150, pv: 88 },
  { week: 'Week 3', uv: 120, pv: 30 },
  { week: 'Week 4', uv: 200, pv: 120 },
  { week: 'Week 5', uv: 180, pv: 95 },
  { week: 'Week 6', uv: 220, pv: 130 },
  { week: 'Week 7', uv: 250, pv: 160 },
  // Add more weeks and transaction data as needed
];

const currentWeekIndex = data.length - 1 ; // Index of the current week in the data array

export const WeeklyTransactionChart = () => {
  return (

    <div className={`${classes.mainWrapper}`}>

      <h6 style={{color :'#000013', marginBlock: '8px'}}>Spent Time</h6>
      <div>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={data}
            margin={{ top: 20, right: 30, left: 50, bottom: 10 }}
          >
            <XAxis dataKey="week" tickLine={false} tick={{ fill: '#C4BDD5' }} axisLine={false} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="uv"
              stroke="#FF0000"
              strokeWidth={3}

              dot={(props) => {
                if (props.index === currentWeekIndex) {
                  return (<circle r={4} cx={props.cx + 5} cy={props.cy - 3} fill="none" stroke="#FF0000" strokeWidth={3} />);
                }
                return null;
              }}
            />

            <Area type="monotone" dataKey='pv' strokeWidth={1.5}  stroke="#F5F5FC"  fill="#F5F5FC" />

            </ComposedChart>
        </ResponsiveContainer>
        
      </div>      
    </div>
  );
};

