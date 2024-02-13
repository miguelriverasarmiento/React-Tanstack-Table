import React from 'react'
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table'
import data from '../MOCK_DATA.json'

function SimpleTable() {

    const columns = [
        {
            header: 'ID',
            accessorKey: 'id',
            footer: 'Mi ID'
        },
        {
            header: 'Name',
            accessorKey: 'name',
            footer: 'Mi name'
        },
        {
            header: 'Lastname',
            accessorKey: 'lastname',
            footer: 'Mi lastname'
        },
        {
            header: 'Email',
            accessorKey: 'email',
            footer: 'Mi email'
        },
        {
            header: 'Country',
            accessorKey: 'country',
            footer: 'Mi country'
        },
        {
            header: 'Day of Birth',
            accessorKey: 'dataofbirth',
            footer: 'Mi day of birth'
        }
    ]

    const table = useReactTable({data, columns, getCoreRowModel: getCoreRowModel()})

  return (
    <div>
      <table>
        <thead>
            {
                table.getHeaderGroups().map(headerGroup => (
                    <tr key={headerGroup.id}>
                        {
                            headerGroup.headers.map(header => (
                                <th key={header.id}>
                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                </th>
                            ))
                        }
                    </tr>
                ))
            }
        </thead>
        <tbody>
            {
                table.getRowModel().rows.map((row) => (
                    <tr key={row.id}>
                        {
                            row.getVisibleCells().map((cell) => (
                                <td>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                            ))
                        }
                    </tr>
                ))
            }
        </tbody>
        <tfoot>
            {
                table.getFooterGroups().map((footerGroup) => (
                    <tr key={footerGroup.id}>
                        {
                            footerGroup.headers.map((footer) => (
                                <th key={footer.id}>
                                    {
                                        flexRender(footer.column.columnDef.footer, footer.getContext())
                                    }
                                </th>
                            ))
                        }
                    </tr>
                ))
            }
        </tfoot>
      </table>
    </div>
  )
}

export default SimpleTable
