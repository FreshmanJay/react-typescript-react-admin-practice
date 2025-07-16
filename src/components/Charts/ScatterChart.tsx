// src/components/ScatterChart.tsx
import React, { useEffect, useRef } from 'react';
import ReactECharts from 'echarts-for-react';
import type { EChartsOption } from 'echarts';

import { commonGrid, commonTitle } from './config/echarts-opts';
import { useSidebarCollapsed } from './config/useSidebarCollapsed';

interface Props {
    option: EChartsOption;
}

export const ScatterChart: React.FC = () => {
    const option = {
        title: commonTitle('散点图'),
        grid:  commonGrid,
        xAxis: { type: 'value' },
        yAxis: { type: 'value' },
        series: [
            {
            type: 'scatter',
            symbolSize: 10,
            data: [
                [10, 8.04], [8, 6.95], [13, 7.58],
                [9, 8.81], [11, 8.33], [14, 9.96],
            ],
            },
        ],
    };

    const collapsed = useSidebarCollapsed();
    const chartRef = useRef<any>(null);
    const [widthLength, setWidthLength] = React.useState('100%');
  
    // 1. 侧边栏变化 → 强制 resize
    useEffect(() => {
      chartRef.current?.getEchartsInstance().resize();
      if(collapsed){
        setWidthLength('100%');
      } else {
        setWidthLength('95%');
      }
    }, [collapsed]);

    return (
        <ReactECharts
        ref={chartRef}
        option={option}
        style={{ height: 400, width: widthLength}}
        notMerge
        />
    );

};