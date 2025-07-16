// src/theme.ts
import { defaultTheme } from 'react-admin';

export const myTheme = {
  ...defaultTheme,
  sidebar: {
    width: 240,       // 展开宽度
    closedWidth: 55,  // 折叠宽度（默认 55px）
  },
};