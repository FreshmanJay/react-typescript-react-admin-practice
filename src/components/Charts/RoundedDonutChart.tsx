// src/components/RoundedDonutChart.tsx
import React, { useEffect, useRef } from 'react';
import ReactECharts from 'echarts-for-react';
import type { EChartsOption } from 'echarts';

import { useSidebarCollapsed } from './config/useSidebarCollapsed';

interface Props {
  option: EChartsOption;
}

export const RoundedDonutChart: React.FC = () => {
  const option: EChartsOption = {
    title: {
      text: '圆角环形图',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)',
    },
    legend: {
      orient: 'vertical',
      left: 10,
      top: 'center',
      data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: ['40%', '70%'], // 内圆 40%，外圆 70% → 环形
        center: ['50%', '55%'], // 整体中心
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10, // 关键：圆角
          borderColor: '#fff',
          borderWidth: 2,
        },
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '18',
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 335, name: '直接访问' },
          { value: 310, name: '邮件营销' },
          { value: 234, name: '联盟广告' },
          { value: 135, name: '视频广告' },
          { value: 1548, name: '搜索引擎' },
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