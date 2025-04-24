import { JSX } from "react";
import { Card, CardContent } from "../../../UI/card/Card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../UI/select/select";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

export const CustomerMapSection = (): JSX.Element => {
  const data = [
    { name: 'Sun', value: 40 },
    { name: 'Mon', value: 75 },
    { name: 'Tue', value: 40 },
    { name: 'Wed', value: 60 },
    { name: 'Thu', value: 40 },
    { name: 'Fri', value: 25 },
    { name: 'Sat', value: 40 },
  ];

  return (
    <Card className="bg-white rounded-[10.25px] w-full h-[315px]">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-[#191a1f] text-[17.6px] [font-family:'Inter',Helvetica]">
            Customer Map
          </h3>

          <Select defaultValue="weekly">
            <SelectTrigger className="px-3 border-[#b9babd] border-[0.73px] rounded-[8.79px] w-[79px] h-7 font-medium text-[11px]">
              <SelectValue placeholder="Weekly" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="yearly">Yearly</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="h-[220px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false}
                tick={{ fontSize: 12, fill: '#64748B' }}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false}
                tick={{ fontSize: 12, fill: '#64748B' }}
                tickFormatter={(value) => `${value}%`}
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
                formatter={(value) => [`${value}%`, '']}
              />
              <Bar 
                dataKey="value" 
                fill="#2b964f"
                radius={[4, 4, 0, 0]}
                barSize={20}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};