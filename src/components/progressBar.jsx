
import ProgressBar from 'react-customizable-progressbar';
import classes from '../styles/progress.module.css'


export const ProgressBarComp = ({progress = 50} ) => {
    return(
        <ProgressBar
            radius={50}
            progress={progress}
            strokeWidth={2}
            strokeColor="#3326AE"
            trackStrokeWidth={2}
            pointerRadius={4}
            pointerStrokeWidth={2}
            pointerStrokeColor="#3326AE"
            pointerFillColor="#3326AE"
            fillColor='#ffffff'
        >
          <div className={`${classes.indicator}`}>
            <div>
                <h5>
                    {progress}%
                </h5>
            </div>
          </div>
        </ProgressBar>
    )
}