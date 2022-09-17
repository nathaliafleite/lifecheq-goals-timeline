import { getStepsDictionaryConfiguration, stepsDictionary } from '../data/steps';
import { TimelineBubbleType } from '../enum/enums';
import GoalDescriptionBottom from './GoalDescriptionBottom';
import GoalDescriptionTop from './GoalDescriptionTop';
import TimelineBubble from './TimelineBubble';

type Props = {
    type: TimelineBubbleType;
    stepNumber: keyof typeof stepsDictionary;
};

const TimelineStep: React.FC<Props> = ({ type, stepNumber }) => {
    const stepData = getStepsDictionaryConfiguration(stepNumber);

    return (
        <div className='timeline__step'>
            {stepData.topGoal && <GoalDescriptionTop step={stepData} />}
            <TimelineBubble type={type} />
            <GoalDescriptionBottom
                step={stepData}
                initialStep={stepNumber === 'stepInitial'}
                finalStep={stepNumber === 'stepFinal'}
            />
        </div>
    );
};

export default TimelineStep;
