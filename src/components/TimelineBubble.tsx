import arrowVector from '../images/arrow-vector.svg';

type Props = {
    type: string;
};

const TimelineBubble: React.FC<Props> = ({ type }) => {
    return (
        <div className='timeline__bubble'>
            {type === 'final' ? (
                <img className='timeline__bubble--final' src={arrowVector} alt='Arrow' />
            ) : (
                <div className={`timeline__bubble--${type}`}></div>
            )}
        </div>
    );
};

export default TimelineBubble;
