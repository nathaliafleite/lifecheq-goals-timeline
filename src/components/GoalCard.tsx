type Props = {
    image: string | undefined;
    alt: string | undefined;
    title: string | undefined;
    goalPosition: string;
    finalGoal?: boolean;
};

const GoalCard: React.FC<Props> = ({ image, alt, title, goalPosition, finalGoal }) => {
    return (
        <div
            className={`goal__card position-${goalPosition} ${
                finalGoal ? 'goal__card--final' : ''
            } `}
        >
            <img src={image || ''} alt={alt || ''} />
            <div className='title'>
                <p>{title || ''}</p>
            </div>
        </div>
    );
};

export default GoalCard;
