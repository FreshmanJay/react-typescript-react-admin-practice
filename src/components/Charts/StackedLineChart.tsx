// src/components/StackedLineChart.tsx
import React, { useEffect, useRef } from 'react';
import ReactECharts from 'echarts-for-react';
import type { EChartsOption } from 'echarts';

import { commonGrid, commonTitle } from './config/echarts-opts';
import { useSidebarCollapsed } from './config/useSidebarCollapsed';

interface Props {
    option: EChartsOption;
}

export const StackedLineChart: React.FC = () => {
  const option = {
    title: commonTitle('折线堆叠图'),
    tooltip: { trigger: 'axis' },
    legend: { data: ['邮件', '联盟广告', '视频广告'], top: 30 },
    grid: commonGrid,
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    },
    yAxis: { type: 'value' },
    series: [
      {
        name: '邮件',
        type: 'line',
        stack: '总量',
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: '联盟广告',
        type: 'line',
        stack: '总量',
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        name: '视频广告',
        type: 'line',
        stack: '总量',
        data: [150, 232, 201, 154, 190, 330, 410],
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