import classes from '../styles/transactions.module.css';
import cross from '../assets/SVGs/plus-small.svg';
import shopping from '../assets/SVGs/amazon_icon.svg';
import taxi from '../assets/SVGs/uber_icon.svg';
import netflix from '../assets/SVGs/netflix_icon.svg';

//======== past transaction data ======//
const transactionHistory = [
    {
        name : 'taxi',
        time : '01:21 pm',
        amount : '-$9.20',
        img: taxi
    },
    {
        name : 'shopping',
        time : '11:15 am',
        amount : '-$142.00',
        img: shopping
    },
    {
        name : 'netflix',
        time : 'jan 10, 2020',
        amount : '-$24.99',
        img: netflix
    },
]


//====== transction chip ====//

const TranscChip = ({name, time, amount, img}) => {
    return(
        <div className={`${classes.transcChipWrapper}`}>
            <img src={img} alt="transaction icon" />
            <div className={`${classes.transcSubDetail}`}>
                <p>{name}</p>
                <small>{time}</small>
            </div>
            <p>
                {amount}
            </p>
        </div>
    )
}

export const TransactionHistory = () =>{
    return(
        <div className={`${classes.transHistoryWrapper}`}>
            <div className={`${classes.transHistoryHeader}`}>
                <h6>
                    transction
                </h6>
                <button type="button">
                    <img src={cross} alt="button icon" />
                </button>
            </div>
            
            {
                transactionHistory.map((transc, index) => (
                    <TranscChip {...transc} key={index} />
                ))
            }
        </div>
    )
}