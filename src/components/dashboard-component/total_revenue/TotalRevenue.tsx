import { JSX } from "react";
import { Card, CardContent } from "../../../UI/card/Card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export const TotalRevenueSection = (): JSX.Element => {
  const data = [
    { month: 'Jan', revenue2024: 20000, revenue2025: 25000 },
    { month: 'Feb', revenue2024: 15000, revenue2025: 35000 },
    { month: 'Mar', revenue2024: 25000, revenue2025: 30000 },
    { month: 'Apr', revenue2024: 30000, revenue2025: 20000 },
    { month: 'May', revenue2024: 35000, revenue2025: 25000 },
    { month: 'Jun', revenue2024: 38753, revenue2025: 30000 },
    { month: 'Jul', revenue2024: 32000, revenue2025: 35000 },
    { month: 'Aug', revenue2024: 28000, revenue2025: 32000 },
    { month: 'Sept', revenue2024: 25000, revenue2025: 28000 },
    { month: 'Oct', revenue2024: 20000, revenue2025: 12657 },
    { month: 'Nov', revenue2024: 22000, revenue2025: 15000 },
    { month: 'Dec', revenue2024: 24000, revenue2025: 18000 },
  ];

  return (
    <Card className="bg-white rounded-[10.25px] w-full h-[315px]">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-['Barlow',Helvetica] font-bold text-[#191a1f] text-[17.6px]">
            Total Revenue
          </h3>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="bg-[#f7c604] rounded-[5.93px/5.86px] w-3 h-3"></div>
              <span className="font-['Inter',Helvetica] font-medium text-[10.3px] text-slate-500 leading-[16.8px]">
                2024
              </span>
            </div>

            <div className="flex items-center gap-2">
              <div className="bg-[#2b964f] rounded-[5.93px/5.86px] w-3 h-3"></div>
              <span className="font-['Inter',Helvetica] font-medium text-[10.3px] text-slate-500 leading-[16.8px]">
                2025
              </span>
            </div>
          </div>
        </div>

        <div className="h-[240px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis 
                dataKey="month" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#64748B' }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#64748B' }}
                tickFormatter={(value) => `$${value/1000}k`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#0f172ab2',
                  border: 'none',
                  borderRadius: '5.55px',
                  padding: '8px',
                }}
                labelStyle={{ color: 'white' }}
                itemStyle={{ color: 'white' }}
                formatter={(value) => [`$${value.toLocaleString()}`, '']}
              />
              <Line
                type="monotone"
                dataKey="revenue2024"
                stroke="#f7c604"
                strokeWidth={2}
                dot={{
                  fill: '#FFFFFF',
                  stroke: '#f7c604',
                  strokeWidth: 2,
                  r: 4,
                }}
                activeDot={{
                  fill: '#f7c604',
                  stroke: '#FFFFFF',
                  strokeWidth: 2,
                  r: 6,
                }}
              />
              <Line
                type="monotone"
                dataKey="revenue2025"
                stroke="#2b964f"
                strokeWidth={2}
                dot={{
                  fill: '#FFFFFF',
                  stroke: '#2b964f',
                  strokeWidth: 2,
                  r: 4,
                }}
                activeDot={{
                  fill: '#2b964f',
                  stroke: '#FFFFFF',
                  strokeWidth: 2,
                  r: 6,
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};