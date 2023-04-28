import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

export default function KpiChartComponent({ userKpi }) {
  const percentage = Math.round(userKpi * 100);
  const data = [{ name: 'progress', value: percentage }, { name: 'rest', value: 100 - percentage }];
  const COLORS = ['#0088FE', '#E8E8E8'];
  
  return (
    <div className='kpiChartContainer'>
        <PieChart width={159} height={159}>
            <Pie
                data={data}
                cx={45}
                cy={45}
                innerRadius={30}
                outerRadius={45}
                startAngle={90}
                endAngle={450}
                fill="#8884d8"
                paddingAngle={0}
                dataKey="value"
                isAnimationActive={false}
            >
                {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
            </Pie>
            <Pie
                data={[{ name: '', value: 100 }]}
                cx={45}
                cy={45}
                innerRadius={0}
                outerRadius={30}
                startAngle={90}
                endAngle={450}
                fill="#ffffff"
                paddingAngle={0}
                dataKey="value"
                isAnimationActive={false}
            />
        </PieChart>
    </div>
  );
}
