import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import './radarChart.css'

export default function RadarChartComponent({ userPerformance }) {
    const kindTranslations = {
        "1": "Cardio",
        "2": "Energie",
        "3": "Endurance",
        "4": "Force",
        "5": "Vitesse",
        "6": "Intensité",
      };
    
    const kindArray = userPerformance?.kind
    console.log(kindArray)
    
    return (
        <div className='radarChartContainer flex alignItemsCenter justifyContentCenter chartsBoxShadow'>
            <ResponsiveContainer width={258}>
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={userPerformance?.data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="kind" tickFormatter={(text) => kindTranslations[text]} tick={{ fill: '#ffffff', fontSize: '12px'}} />
                    <Radar name={userPerformance?.userId} dataKey="value" fill="#FF0101B2" fillOpacity={0.7} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}
