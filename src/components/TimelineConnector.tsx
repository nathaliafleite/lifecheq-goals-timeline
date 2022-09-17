import { TimelineConnectorType } from '../enum/enums';

type Props = {
    type: TimelineConnectorType;
    width: string;
};

const TimelineConnector: React.FC<Props> = ({ type, width }) => {
    return (
        <span
            className={`timeline__connector--${type}`}
            style={{ width: `${width}px` }}
        />
    );
};

export default TimelineConnector;
