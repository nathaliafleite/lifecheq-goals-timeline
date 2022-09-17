import family from '../images/family.svg';
import home from '../images/home.svg';
import holiday from '../images/going-holiday.svg';
import fund from '../images/em-fund.svg';
import debt from '../images/debt.svg';
import retire from '../images/retire.svg';
import vision from '../images/vision.svg';

type Goal = {
    title: string;
    image: string;
    alt: string;
};

export type StepType = {
    description: string;
    topGoal: Goal | null;
    bottomGoal: Goal | null;
};

export const stepsDictionary = {
    stepInitial: {
        description: 'You are here',
        topGoal: null,
        bottomGoal: null,
    },

    step1: {
        description: 'In 1 year and 9 months',
        topGoal: {
            title: "Baby's birth",
            image: family,
            alt: 'Family',
        },
        bottomGoal: {
            title: 'New home',
            image: home,
            alt: 'Home',
        },
    },

    step2: {
        description: 'In 3 years and 2 months',
        topGoal: {
            title: 'Holiday',
            image: holiday,
            alt: 'Holiday',
        },
        bottomGoal: null,
    },

    step3: {
        description: 'In 4 years and 9 months',
        topGoal: null,
        bottomGoal: {
            title: 'Emergency fund',
            image: fund,
            alt: 'Fund',
        },
    },

    step4: {
        description: 'In 8 years and 11 months',
        topGoal: null,
        bottomGoal: {
            title: 'Debt free',
            image: debt,
            alt: 'Debt-free',
        },
    },

    step5: {
        description: '',
        topGoal: {
            title: 'Retire',
            image: retire,
            alt: 'Retire',
        },
        bottomGoal: null,
    },

    stepFinal: {
        description: 'Ultimately',
        topGoal: null,
        bottomGoal: {
            title: 'Make a contribution to my community through philantrophy',
            image: vision,
            alt: 'Vision',
        },
    },
};

export const getStepsDictionaryConfiguration = (
    value: keyof typeof stepsDictionary
): StepType => {
    return stepsDictionary[value];
};
