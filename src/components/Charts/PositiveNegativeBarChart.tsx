// src/components/PositiveNegativeBarChart.tsx
import React, { useEffect, useRef } from 'react';
import ReactECharts from 'echarts-for-react';
import type { EChartsOption } from 'echarts';

import { useSidebarCollapsed } from './config/useSidebarCollapsed';

interface Props {
    option: EChartsOption;
}

export const PositiveNegativeBarChart: React.FC = () => {
  const option: EChartsOption = {
    title: {
      text: '交错正负轴标签图',
      left: 'center',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' },
    },
    grid: {
      top: 80,
      bottom: 30,
      left: '3%',
      right: '4%',
      containLabel: true,
    },
    xAxis: {
      type: 'value',
      // 正负刻度
      axisLabel: { formatter: (v: any) => (v < 0 ? v : `+${v}`) },
    },
    yAxis: {
      type: 'category',
      axisTick: { alignWithLabel: true },
      axisLine: { show: true },
      data: ['苹果', '香蕉', '梨', '葡萄', '橙子', '桃'],
    },
    series: [
      {
        name: '利润',
        type: 'bar',
        label: { show: true, position: 'right' },
        data: [20, -15, 35, -25, 40, -10],
        // 正负颜色
        itemStyle: {
          color: function (params: any) {
            return params.value >= 0 ? '#4caf50' : '#f44336';
          },
        },
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