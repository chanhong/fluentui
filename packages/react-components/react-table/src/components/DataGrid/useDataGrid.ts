import * as React from 'react';
import type { DataGridProps, DataGridState } from './DataGrid.types';
import { useTable_unstable } from '../Table/useTable';

/**
 * Create the state required to render DataGrid.
 *
 * The returned state can be modified with hooks such as useDataGridStyles_unstable,
 * before being passed to renderDataGrid_unstable.
 *
 * @param props - props from this instance of DataGrid
 * @param ref - reference to root HTMLElement of DataGrid
 */
export const useDataGrid_unstable = (props: DataGridProps, ref: React.Ref<HTMLElement>): DataGridState => {
  return useTable_unstable({ ...props, as: 'div' }, ref);
};
