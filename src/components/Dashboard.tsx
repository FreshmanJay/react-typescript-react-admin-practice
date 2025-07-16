// src/components/Dashboard.tsx
import React from 'react';

import { ScatterChart } from './Charts/ScatterChart';
import { StackedLineChart } from './Charts/StackedLineChart';
import { PositiveNegativeBarChart } from './Charts/PositiveNegativeBarChart';
import { RoundedDonutChart } from './Charts/RoundedDonutChart';
import { NestedDonutChart } from './Charts/NestedDonutChart';
import { VerticalBoxplot } from './Charts/VerticalBoxplot';

export const Dashboard: React.FC = () => (
  <div style={{ padding: 8, height: '100%' }}>
    <div style={{display: 'flex', gap: '8px', marginBottom: '8px'}}>
      <div style={{flex: 1, border: '1px solid #e8e8e8'}}>
        <label style={{ padding: 8}}>散点图</label>
        <ScatterChart />
      </div>
      <div style={{flex: 1, border: '1px solid #e8e8e8'}}>
        <label style={{ padding: 8}}>折线堆叠图</label>
        <StackedLineChart />
      </div>
    </div>

    <div style={{display: 'flex', gap: '8px', marginBottom: '8px'}}>
      <div style={{flex: 1, border: '1px solid #e8e8e8'}}>
        <label style={{ padding: 8}}>交错正负轴标签图</label>
        <PositiveNegativeBarChart />
      </div>
      <div style={{flex: 1, border: '1px solid #e8e8e8'}}>
        <label style={{ padding: 8}}>圆角环形图</label>
        <RoundedDonutChart />
      </div>
    </div>

    <div style={{display: 'flex', gap: '8px', marginBottom: '8px'}}>
      <div style={{flex: 1, border: '1px solid #e8e8e8'}}>
        <label style={{ padding: 8}}>嵌套环形图</label>
        <NestedDonutChart />
      </div>
      <div style={{flex: 1, border: '1px solid #e8e8e8'}}>
        <label style={{ padding: 8}}>垂直盒须图</label>
        <VerticalBoxplot/>
      </div>
    </div>
  </div>
);