import React from 'react'; // Imports the React library
import { useMediaQuery } from 'react-responsive'; // // Imports the useMediaQuery
import './radarChart.css' // Imports the styles

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

export default function RadarChartComponent({ userPerformance }) {

    // Object to store translations of kind labels
    const kindTranslations = {
        "1": "Cardio",
        "2": "Energie",
        "3": "Endurance",
        "4": "Force",
        "5": "Vitesse",
        "6": "Intensité",
    };

    const isSmallScreen = useMediaQuery({ query: '(max-width: 1024px)' });
    
    return (
        <div className='radarChartContainer flex alignItemsCenter justifyContentCenter chartsBoxShadow'>
            <ResponsiveContainer width={258}>
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={userPerformance?.data} className='radarChart'>
                    
                    {/* Adding a grid to the chart */}
                    <PolarGrid />

                    {/* Adding the angle axis with kind translations labels */} 
                    <PolarAngleAxis dataKey="kind" tickFormatter={(text) => kindTranslations[text]} tick={{ fill: '#ffffff', fontSize: isSmallScreen ? '9px' : '12px'}} />

                    {/* Adding the radar component to display the data */}
                    <Radar name={userPerformance?.userId} dataKey="value" fill="#FF0101B2" fillOpacity={0.7} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}
