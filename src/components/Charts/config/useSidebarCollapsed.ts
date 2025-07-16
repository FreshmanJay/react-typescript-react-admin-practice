// src/hooks/useSidebarCollapsed.ts
import { useSidebarState } from 'react-admin';

export function useSidebarCollapsed() {
  const [open] = useSidebarState(); // true=展开 false=折叠
  return !open;                     // true=折叠
}