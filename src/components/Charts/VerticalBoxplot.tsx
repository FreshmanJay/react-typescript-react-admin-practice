// src/components/VerticalBoxplot.tsx
import React, { useEffect, useRef } from 'react';
import ReactECharts from 'echarts-for-react';
import type { EChartsOption } from 'echarts';

import { useSidebarCollapsed } from './config/useSidebarCollapsed';

interface Props {
    option: EChartsOption;
}

// 工具：将原始数据转换成盒须所需格式 [[min, Q1, median, Q3, max], ...]
const data = [
  [850, 960, 1010, 1050, 1100],
  [700, 800,  840,  880,  950],
  [650, 750,  820,  870,  920],
];

const option: EChartsOption = {
  title: { text: '垂直盒须图', left: 'center' },
  tooltip: { trigger: 'item' },
  grid: { left: '8%', right: '8%', bottom: '8%', containLabel: true },
  xAxis: { type: 'category', data: ['A 组', 'B 组', 'C 组'] },
  yAxis: { type: 'value', name: '数值' },
  series: [
    {
      name: '盒须',
      type: 'boxplot',
      // vertical 方向：x 为类别，y 为连续值
      data,
      itemStyle: {
        borderColor: '#5470c6',
        color: '#91cc75',
      },
      emphasis: { itemStyle: { color: '#fac858' } },
    },
  ],
};

export const VerticalBoxplot: React.FC = () => {
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