
import classes from '../styles/BlogCard.module.css'
import play from '../assets/SVGs/play-circle.svg';
import star from '../assets/SVGs/star.svg';
import clock from '../assets/SVGs/clock.svg';
import chevron from '../assets/SVGs/chevron-right.svg';
import woman from '../assets/images/woman.jpg'


const Chip = ({icon, name}) =>{
    return(
        <div className={`${classes.chipWrapper}`}>
            <img src={icon} alt={`${name} icon`} />
            <small>{name}</small>
        </div>
    )
}


export const BlogCard = () =>{

    const chipList =[
        {
            name: 'video',
            icon : play
        },
        {
            name: '15 mins',
            icon : clock
        },
        {
            name: '12 likes',
            icon : star
        }
    ]

    return (
        <>
            <div className={`${classes.cardWrapper}`}>
                <div className={`${classes.blogPosterDetail}`}>
                    <img src={woman} alt="author" />
                    <div className={`${classes.blogPosterName}`}>
                        <p>lilly donovan</p>
                        <small>Business trainer</small>
                    </div>
                </div>
                <h6>how to properly manage your personal budget?</h6>
                <div className={`${classes.cardBlogDetails}`}>
                    {
                        chipList.map(i =>(
                            <Chip {...i} />
                        ))
                    }
                </div>
                <div className={`${classes.cardBlogActionArea}`}>
                    <p>
                        5 days ago
                    </p>
                    <button type="button">
                        connect 
                        <img src={chevron} alt="chevron right" />
                    </button>
                </div>
            </div>
        </>
    )
}