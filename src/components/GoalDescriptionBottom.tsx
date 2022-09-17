import { StepType } from '../data/steps';
import GoalCard from './GoalCard';

type Props = {
    step: StepType;
    initialStep: boolean;
    finalStep: boolean;
};

const GoalDescriptionBottom: React.FC<Props> = ({ step, initialStep, finalStep }) => {
    return (
        <div className='goal__description position-bottom'>
            <p className={`goal__time ${initialStep ? 'goal__time--initial' : ''}`}>
                {step.description}
            </p>
            {step.bottomGoal && (
                <>
                    <span className='goal__line'></span>
                    <GoalCard
                        image={step.bottomGoal?.image}
                        alt={step.bottomGoal?.alt}
                        title={step.bottomGoal?.title}
                        goalPosition='bottom'
                        finalGoal={finalStep ? true : false}
                    />
                </>
            )}
        </div>
    );
};

export default GoalDescriptionBottom;
