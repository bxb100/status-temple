import BarChart from './BarChart';

const BarBox = ({ uptimeData }) => {
    const hidden = uptimeData ? 'hidden' : '';

    return (
        <div className="padding-inner">
            <h1 className={'flex justify-center items-center ' + hidden}>
                <span>Fetching Data </span>
                <svg className="animate-spin ml-3 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            </h1>

            {(uptimeData &&
                uptimeData.map((itme, index) => {
                    return <BarChart uptimeSection={itme} key={index} />;
                })) ||
                new Array(4).fill({}).map((_, index) => {
                    return <BarChart uptimeSection={null} key={index} />;
                })}
        </div>
    );
};

export default BarBox;
