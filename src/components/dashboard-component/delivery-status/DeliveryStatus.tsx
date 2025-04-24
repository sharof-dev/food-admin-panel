import React, { JSX } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../../UI/card/Card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../UI/select/select";
import { ChevronDownIcon } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export const DeliveryStatusSection = (): JSX.Element => {
  const data = [
    { day: "Sun", deliveries: 30 },
    { day: "Mon", deliveries: 45 },
    { day: "Tue", deliveries: 25 },
    { day: "Wed", deliveries: 70 },
    { day: "Thu", deliveries: 35 },
    { day: "Fri", deliveries: 50 },
    { day: "Sat", deliveries: 40 },
  ];

  return (
    <Card className="bg-white h-full">

      <CardHeader className="flex flex-row justify-between items-center p-3">
        <CardTitle className="font-body-large-bold text-[length:var(--body-large-bold-font-size)] text-[#191a1f]">
          Delivery Status
        </CardTitle>
        <Select defaultValue="weekly">
          <SelectTrigger className="bg-transparent p-0 border-none w-auto h-auto">
            <SelectValue>
              <div className="flex items-center gap-1 font-body-small-medium text-[#2b964f]">
                Weekly
                {/* <ChevronDownIcon className="w-2 h-2" /> */}
              </div>
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="weekly">Weekly</SelectItem>
            <SelectItem value="monthly">Monthly</SelectItem>
            <SelectItem value="yearly">Yearly</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="p-3 pt-0">
        <div className="h-[150px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
              <XAxis 
                dataKey="day" 
                axisLine={false} 
                tickLine={false}
                tick={{ fontSize: 12, fill: '#64748B' }}
                dy={10}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false}
                tick={{ fontSize: 12, fill: '#64748B' }}
                tickFormatter={(value) => `${value}%`}
                domain={[0, 100]}
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
                formatter={(value) => [`${value} Delivered`, '']}
              />
              <Line
                type="monotone"
                dataKey="deliveries"
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