import TimelineStep from './TimelineStep';
import { TimelineConnectorType, TimelineBubbleType } from '../enum/enums';
import TimelineConnector from './TimelineConnector';

const Timeline = () => {
    return (
        <>
            <TimelineStep type={TimelineBubbleType.Initial} stepNumber='stepInitial' />
            <TimelineConnector type={TimelineConnectorType.Solid} width='65' />
            <TimelineStep type={TimelineBubbleType.Default} stepNumber='step1' />
            <TimelineConnector type={TimelineConnectorType.Solid} width='125' />
            <TimelineStep type={TimelineBubbleType.Default} stepNumber='step2' />
            <TimelineConnector type={TimelineConnectorType.Solid} width='131' />
            <TimelineStep type={TimelineBubbleType.Default} stepNumber='step3' />
            <TimelineConnector type={TimelineConnectorType.Solid} width='189' />
            <TimelineStep type={TimelineBubbleType.Default} stepNumber='step4' />
            <TimelineConnector type={TimelineConnectorType.Dashed} width='88' />
            <TimelineStep type={TimelineBubbleType.Invisible} stepNumber='step5' />
            <TimelineConnector type={TimelineConnectorType.Dashed} width='96' />
            <TimelineStep type={TimelineBubbleType.Final} stepNumber='stepFinal' />
        </>
    );
};

export default Timeline;
