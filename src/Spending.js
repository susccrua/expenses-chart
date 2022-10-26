import { useEffect, useState } from 'react';
import Day from './Day.js'

export default function Spending(props) {
    const [data, setData] = useState([]);
    const [max, setMax] = useState(0);
    const [total, setTotal] = useState(0);


    const getData = () => {
        fetch('./data.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setData(myJson)
                console.log(myJson);
            });
    }
    useEffect(() => {
        getData()
        setMax(Math.max(...data.map(d => d.amount)))
        console.log(Math.max(...data.map(d => d.amount)))
        setTotal(data.reduce((prev, curr) => (prev + curr.amount), 0))

    }, [])

    return (
        <div>
            <div className="flex rounded-lg bg-stone-50 text-gray-800 p-2 w-full">
                <div className="flex flex-col flex-auto">
                    <div className="p-6">

                        <h3 className="text-xl font-semibold">Spending - Last 7 days</h3>
                        <div className={`flex h-52 mt-12`}>{data.map(d => { return <Day amount={d.amount} day={d.day} max={max} /> })}</div>
                    </div>

                    <div className="flex border-t p-6 justify-between items-center">
                        <div className="flex flex-col">

                            <h3 className="text-xs text-gray-400">Total this month</h3>
                            <h1 className="text-3xl font-semibold">${total}</h1>
                        </div>
                        <div className="text-right">
                            <h3 className="text-xs font-semibold">+2.4%</h3>
                            <h3 className="text-xs text-gray-400">from last month</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

