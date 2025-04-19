import { JSX } from "react";
import { Card, CardContent } from "../../../UI/card/Card";
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const PieChartSection = (): JSX.Element => {
    const pieChartData = [
        {
            id: 1,
            title: "Total Order",
            value: 81,
            color: "#2b964f"
        },
        {
            id: 2,
            title: "Customer Growth",
            value: 22,
            color: "#f7c604"
        },
        {
            id: 3,
            title: "Total Revenue",
            value: 62,
            color: "#2d9cdb"
        }
    ];

    const renderPieChart = (data: typeof pieChartData[0]) => {
        const chartData = [
            { name: data.title, value: data.value },
            { name: 'Remaining', value: 100 - data.value }
        ];

        return (
            <div key={data.id} className="flex flex-col items-center">
                <div className="relative w-[63px] h-[63px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={chartData}
                                cx="50%"
                                cy="50%"
                                innerRadius={25}
                                outerRadius={31}
                                startAngle={90}
                                endAngle={-270}
                                dataKey="value"
                            >
                                <Cell fill={data.color} />
                                <Cell fill="#F3F2F7" />
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                    <div className="top-1/2 left-1/2 absolute flex justify-center items-center bg-white shadow-[0px_6.95px_14.31px_#0000001f] rounded-full w-[34px] h-[34px] -translate-x-1/2 -translate-y-1/2 transform">
                        <span className="font-semibold text-[#191a1f] text-[9.9px]">
                            {data.value}%
                        </span>
                    </div>
                </div>
                <div className="mt-[10px] font-semibold text-[#191a1f] text-[9.9px] text-center leading-normal tracking-[0]">
                    {data.title}
                </div>
            </div>
        );
    };

    return (
        <div className="w-full max-w-[431px]">
            <Card className="relative bg-white h-[119px]">
                <div className="top-2.5 left-3 absolute font-bold text-[#191a1f] text-[10px] leading-normal tracking-[0] whitespace-nowrap">
                    Pie Chart
                </div>
                <CardContent className="p-0">
                    <div className="flex justify-center items-center pt-[23px]">
                        <div className="flex gap-[57px]">
                            {pieChartData.map(renderPieChart)}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default PieChartSection