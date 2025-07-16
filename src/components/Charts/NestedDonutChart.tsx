// src/components/NestedDonutChart.tsx
import React, { useEffect, useRef } from 'react';
import ReactECharts from 'echarts-for-react';
import type { EChartsOption } from 'echarts';

import { useSidebarCollapsed } from './config/useSidebarCollapsed';

interface Props {
    option: EChartsOption;
}

export const NestedDonutChart: React.FC = () => {
  const option: EChartsOption = {
    title: { text: '嵌套环形图', left: 'center' },
    tooltip: { trigger: 'item', formatter: '{a} <br/>{b}: {c} ({d}%)' },
    legend: {
      orient: 'vertical',
      left: 10,
      top: 'center',
    },
    series: [
      // 内环
      {
        name: '访问来源',
        type: 'pie',
        radius: ['30%', '50%'],   // 内环
        label: { show: false },
        labelLine: { show: false },
        data: [
          { value: 335, name: '直接访问' },
          { value: 310, name: '邮件营销' },
          { value: 234, name: '联盟广告' },
          { value: 135, name: '视频广告' },
          { value: 1548, name: '搜索引擎' },
        ],
        itemStyle: {
          borderRadius: 8,
          borderColor: '#fff',
          borderWidth: 2,
        },
      },
      // 外环
      {
        name: '外环',
        type: 'pie',
        radius: ['58%', '78%'],   // 外环
        label: { show: false },
        labelLine: { show: false },
        data: [
          { value: 1048, name: '一线城市' },
          { value: 735, name: '二线城市' },
          { value: 580, name: '三线及以下' },
        ],
        itemStyle: {
          borderRadius: 8,
          borderColor: '#fff',
          borderWidth: 2,
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