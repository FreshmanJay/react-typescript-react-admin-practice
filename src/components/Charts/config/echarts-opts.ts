// src/echarts-opts.ts
import type { EChartsOption } from 'echarts';

export const commonGrid = {
  left:   '3%',
  right:  '5%',
  top:    80,     // 标题 + legend 高度
  bottom: '3%',
  containLabel: true,
};

export const commonTitle = (text: string) => ({
  text,
  left: 'center',
  textStyle: { fontSize: 16 },
});