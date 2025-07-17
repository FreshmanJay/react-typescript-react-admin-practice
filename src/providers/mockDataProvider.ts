// src/providers/mockDataProvider.ts
import { DataProvider, GetListParams } from 'react-admin';

interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const customers: Customer[] = Array.from({ length: 102 }, (_, i) => ({
  id: i + 1,
  name: `客户${i + 1}`,
  email: `c${i + 1}@test.com`,
  phone: `138${String(i).padStart(8, '0')}`,
}));

const mockDataProvider: DataProvider = {
  getList: async (resource, params: GetListParams) => {
    if (resource !== 'customers') throw new Error('unknown resource');

    const { filter = {}, sort = { field: 'id', order: 'ASC' }, pagination = { page: 1, perPage: 10 } } = params;
    const q: string = (filter as any).q ?? '';

    let list = customers.filter(c =>
      q === '' ? true : c.name.includes(q) || c.email.includes(q)
    );

    // 关键：限定 keyof
    const sortField = sort.field as keyof typeof customers[0];
    list.sort((a, b) =>
      sort.order === 'ASC'
        ? a[sortField] > b[sortField] ? 1 : -1
        : a[sortField] < b[sortField] ? 1 : -1
    );

    const { page, perPage } = pagination;
    const start = (page - 1) * perPage;
    return Promise.resolve({
      data: list.slice(start, start + perPage),
      total: list.length,
    });
  },

  /* 其余方法省略 */
} as DataProvider;

export default mockDataProvider;