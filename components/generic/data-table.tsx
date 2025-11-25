'use client'

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { cn } from '@/lib/utils'
import * as React from 'react'

export interface ColumnDef<T> {
    header: string
    accessorKey?: keyof T
    cell?: (row: T) => React.ReactNode
    className?: string
    headerClassName?: string
}

export interface DataTableProps<T> {
    data: T[]
    columns: ColumnDef<T>[]
    emptyMessage?: string
    className?: string
    onRowClick?: (row: T) => void
}

export function DataTable<T extends { id: number | string }>({
    data,
    columns,
    emptyMessage = 'No data available',
    className,
    onRowClick,
}: DataTableProps<T>) {
    if (data.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-12 text-center">
                <p className="text-muted-foreground">{emptyMessage}</p>
            </div>
        )
    }

    return (
        <div className={cn('rounded-md border', className)}>
            <Table>
                <TableHeader>
                    <TableRow>
                        {columns.map((column, index) => (
                            <TableHead
                                key={`header-${index}`}
                                className={cn(column.headerClassName)}
                            >
                                {column.header}
                            </TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((row) => (
                        <TableRow
                            key={row.id}
                            onClick={() => onRowClick?.(row)}
                            className={cn(onRowClick && 'cursor-pointer')}
                        >
                            {columns.map((column, colIndex) => (
                                <TableCell
                                    key={`cell-${row.id}-${colIndex}`}
                                    className={cn(column.className)}
                                >
                                    {column.cell
                                        ? column.cell(row)
                                        : column.accessorKey
                                            ? String(row[column.accessorKey])
                                            : null}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
