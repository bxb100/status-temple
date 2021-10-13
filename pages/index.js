import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import fetchData from '../src/api/UptimeApi';
import BarBox from '../src/components/BarBox';
import BarChart from '../src/components/BarChart';

export default function Home() {
    const [jsonData, setJsonData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData()
            .then((jsonData) => setJsonData(jsonData))
            .catch((error) => {
                console.error('error fetch data', error);
                setError(error);
            })
            .finally(() => setLoading(false));
    }, []);

    if (error) {
        return 'Error!';
    }

    return (
        <div className="bg-white w-152 m-auto mb-8">
            <div className="py-6 h-20 relative same-html">
                <div className="float-left mx-4 my-2">
                    <a className="inline-block relative cursor-pointer">
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    </a>
                    <span className="absolute top-7 ml-2 text-indigo-700">system status</span>
                </div>
            </div>
            <div className=" shadow bg-gray-50">
                <BarBox uptimeData={jsonData.uptimeData} loading={loading} />

                <div className="bg-gray-50 pt-5 pb-5 padding-inner" style={{ borderTop: '2px solid white' }}>
                    <span className="legend-item">
                        <span className="legend-color graph-up"></span>
                        <label>100% uptime</label>
                    </span>
                    <span className="legend-item">
                        <span className="legend-color graph-mid"></span>
                        <label>partial degradation</label>
                    </span>
                    <span className="legend-item">
                        <span className="legend-color graph-down"></span>
                        <label>downtime</label>
                    </span>
                </div>
            </div>
        </div>
    );
}
