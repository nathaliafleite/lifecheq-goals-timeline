import { stepsDictionary, StepType } from '../data/steps';
import GoalCard from './GoalCard';

type Props = {
    step: StepType;
};

const GoalDescriptionTop: React.FC<Props> = ({ step }) => {
    return (
        <div className='goal__description position-top'>
            <GoalCard
                image={step.topGoal?.image}
                alt={step.topGoal?.alt}
                title={step.topGoal?.title}
                goalPosition='top'
            />
            <span className='goal__line'></span>
        </div>
    );
};

export default GoalDescriptionTop;
