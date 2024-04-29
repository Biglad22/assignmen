import classes from "../styles/Home.module.css";
import { BlogCard } from "../components/BlogCard";
import searchIcon from "../assets/SVGs/magnifying-glass.svg";
import { TransactionHistory } from "../components/TranscHistory";
import man from '../assets/images/man.jpg'
import { WeeklyTransactionChart } from "../components/SpendingStat";
import { ProgressBarComp } from "../components/progressBar";
import { CustomShapeBarChart } from "../components/candleSticks";
import CreditCard from "../assets/SVGs/CreditCard.svg"


import {
    AreaChart,
    Area,
    ResponsiveContainer,
} from 'recharts';



////mini chart data 

const keys = [
  {
    key : 'uv',
    title: 'visitor',
    figure: '10,320',
    isActive: false
  },
  {
    key : 'pv',
    title: 'customers',
    figure: '4,628',
    isActive: false
  },
  {
    key : 'amt',
    title: 'orders',
    figure: '2,980',
    isActive: true
  }
]
const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];


//top bar
const TopBar = () =>{
    const links = [
        {title: 'feedback',
         link: '#search-box'
        },
        {title: 'contacts',
         link: '#search-box'
        },
        {title: 'help',
         link: '#search-box'
        }
    ];

    return(
      <div  className={`${classes.topBarWapper}`}>
        <div  className={`${classes.searchArea}`}>

          <div className={`${classes.searchinput}`} >
            <img src={searchIcon} alt="search" />
            <input type="search" name="search-box" id="search-box" placeholder="search" />
          </div>

          {
            links.map(i =>(
                <a href={i.link} key={i.title} >{i.title}</a>
            ))
          }
          
        </div>
        <div className={`${classes.searchAreaUserProfile}`}>
          <img src={man} alt="user" />
        </div>
          
      </div>
    )
}


///mini graph
const MiniGraph = ({dataSet, objKey}) =>{

    return(
        <div className={`${classes.miniGraph}`} style={{backgroundColor : objKey.isActive ? "#FF0000" : "#ffffff" }}>
            <div>
              <ResponsiveContainer width="100%" height='100%'>
                <AreaChart
                  data={dataSet}
                  syncId="anyId"
                  margin={{
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <Area type="monotone" dataKey={`${objKey.key}`} strokeWidth={1.5}  stroke={objKey.isActive ? "#ffffff" : "#3326AE"}  fill={objKey.isActive ? "#F5F5FC" : "#F5F5FC"} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className={`${classes.miniGraphTitle}`}>
              <small>
                {objKey.title}
              </small>
              <p style={{color : objKey.isActive ? "#ffffff" : "#000013" }}>
                {objKey.figure}
              </p>
            </div>
        </div>
    )
}

const MiniGraphCollection = () =>{
  return(
    <div className={`${classes.miniGraphCollection}`}>
      {
        keys.map(i =>(
          <MiniGraph dataSet={data} objKey={i}/>
        ))
      }
    </div>
  )
}

export const Home = () =>{
    return(
      <section  className={`${classes.homeWrapper}`}>
        <TopBar />  

        <div className={`${classes.mainBody}`}>

          <div className={`${classes.firstHalf}`}>
            <MiniGraphCollection />
            <CustomShapeBarChart />
            <div className={`${classes.firstHalfBottom}`}>
              <WeeklyTransactionChart />
              <BlogCard />
            </div>
          </div>

          <div className={`${classes.secHalf}`}>
            <ProgressBarComp  progress={60}/>
            <div className={`${classes.secHalfCard}`}>
              <h6>
                My Card
              </h6>
              <img src={CreditCard} alt="creadit card" />
            </div>
            
            <TransactionHistory />
          </div>

        </div >
        
      </section>
    )
}