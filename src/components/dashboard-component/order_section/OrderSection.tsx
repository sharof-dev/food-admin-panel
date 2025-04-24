import React, { JSX } from "react";
import { Card, CardContent } from "../../../UI/card/Card";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../../../UI/select/select";
import { ChevronDownIcon } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export const OrderChartSection = (): JSX.Element => {
  const data = [
    { name: 'Sun', orders: 320 },
    { name: 'Mon', orders: 380 },
    { name: 'Tue', orders: 420 },
    { name: 'Wed', orders: 456 },
    { name: 'Thu', orders: 380 },
    { name: 'Fri', orders: 410 },
    { name: 'Sat', orders: 360 }
  ];

  return (
    <Card className="bg-white">
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-['Inter',Helvetica] font-bold text-[#191a1f] text-[16.9px]">Chart Order</h3>
            <p className="mt-1 font-['Inter',Helvetica] font-normal text-[#9f9f9f] text-[11.3px]">
              Lorem ipsum dolor sit amet, consectetur adip
            </p>
          </div>
          <div className="relative mt-[3px] h-7">
            <Select defaultValue="weekly">
              <SelectTrigger className="bg-transparent px-3 border-[#2b964f] border-[0.6px] border-solid rounded-[8.44px] w-[79px] h-7">
                <SelectValue
                  placeholder="Weekly"
                  className="font-['Cairo',Helvetica] font-bold text-[#191a1f] text-[10.9px]"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="weekly">Weekly</SelectItem>
                <SelectItem value="monthly">Monthly</SelectItem>
                <SelectItem value="yearly">Yearly</SelectItem>
              </SelectContent>
            </Select>
            <ChevronDownIcon className="top-[13px] right-[21px] absolute w-2.5 h-1.5 pointer-events-none" />
          </div>
        </div>

        <div className="w-full h-[130px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="orderGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2b964f" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#2b964f" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              {/* <YAxis axisLine={false} tickLine={false} /> */}
              <Tooltip
                contentStyle={{
                  backgroundColor: '#0f172ab2',
                  border: 'none',
                  borderRadius: '5.55px',
                  padding: '8px',
                }}
                labelStyle={{ color: 'white' }}
                itemStyle={{ color: 'white' }}
              />
              <Area
                type="monotone"
                dataKey="orders"
                stroke="#2b964f"
                fill="url(#orderGradient)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};