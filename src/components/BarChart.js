import Bar from './bar';

const BarChart = ({ uptimeSection }) => {
    const hidden = uptimeSection ? 'visible' : 'invisible';
    return (
        <div className='mb-7'>
            <div className="block-header">
                <span className={"text-black text-base pr-3 " + hidden}>{uptimeSection?.title}</span>
                <span className={"text-gray-400 text-sm pl-3 float-right " + hidden}>{`${uptimeSection?.percentage}% uptime for the last 90 days`}</span>
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
