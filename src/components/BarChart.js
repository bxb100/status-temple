import Bar from './BarItem';

const BarChart = ({ uptimeSection }) => {
    const visible = uptimeSection ? 'visible' : 'invisible';
    return (
        <div className='uptime-section'>
            <div className="block-header">
                <span className={"text-black text-base pr-3 " + visible}>{uptimeSection?.title}</span>
                <span className={"text-gray-400 text-sm pl-3 float-right " + visible}>{`${uptimeSection?.percentage}% uptime for the last 90 days`}</span>
            </div>
            <div className="block-chart">
                {Array(91)
                    .fill({})
                    .map((_, index) => {
                        const item = uptimeSection?.uptime[index];
                        return <Bar data={item} key={index} />;
                    })}
            </div>
        </div>
    );
};

export default BarChart;
