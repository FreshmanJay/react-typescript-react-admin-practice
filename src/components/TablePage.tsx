// // src/components/TablePage.tsx
import React from 'react';
import { List, Datagrid, TextField, SearchInput, Pagination } from 'react-admin';
import { Box } from '@mui/material';

const filters = [<SearchInput source="q" alwaysOn placeholder="搜索姓名或邮箱" />];

export const TablePage: React.FC =  () => (
  <Box
    sx={{
      p: 2,
      height: 'calc(100vh - 48px)',        // 1. 整屏高度
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    {/* List 允许 sx */}
    <List
      resource="customers"
      perPage={15}
      filters={filters}
      pagination={<Pagination />}
      sort={{ field: 'id', order: 'ASC' }}
      sx={{
        flex: 1,              // 2. 占满剩余空间
        display: 'flex',
        flexDirection: 'column',
        '& .RaList-content': {
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        },
        '& .MuiTable-root': {
          flex: 1,
        },
      }}
    >
      <Datagrid
        sx={{
          flex: 1,
          overflow: 'auto',   // 超出滚动
        }}
        rowClick="show"
        bulkActionButtons={false}
      >
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="email" />
        <TextField source="phone" />
      </Datagrid>
    </List>
  </Box>
);