import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { secondsToHm } from '../util/Helper';

const options = { year: 'numeric', month: 'long', day: 'numeric' };

const Tooltip = ({ content, children }) => (
    <Tippy content={content} placement="top">
        {children}
    </Tippy>
);

const Bar = ({ data }) => {
    if (data) {
        const { date, pending, downtime, degraded, delayed } = data;
        let hint;
        let barClzz = 'bar ';
        if (downtime) {
            barClzz += 'down ';
            hint = `Downtime for ${secondsToHm(downtime)}`;
        } else if (degraded) {
            barClzz += 'mid ';
            hint = `Degraded for ${secondsToHm(degraded)}`;
        } else if (delayed) {
            barClzz += 'mid ';
            hint = `Delayed for ${secondsToHm(delayed)}`;
        } else {
            hint = 'No downtime';
        }
        if (pending) {
            barClzz += 'pending ';
        }
        const tooltipContent = (
            <>
            {new Date(date).toLocaleString(undefined, options)} 
            <br /> 
            {hint}
            </>
        );
        return (
            <>
                <Tooltip content={tooltipContent}>
                    <div className={barClzz}></div>
                </Tooltip>
            </>
        );
    } else {
        return <div className="bar pending"></div>;
    }
};

export default Bar;
