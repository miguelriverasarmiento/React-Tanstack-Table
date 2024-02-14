import React from 'react'
import SimpleTable from './components/SimpleTable'
import data from './MOCK_DATA.json'
import dayjs from 'dayjs'

function App() {

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
        footer: 'Mi day of birth',
        cell: info => dayjs(info.getValue()).format('DD/MM/YYYY')
    }
]

  return (
    <div>
      <SimpleTable data={data} columns={columns}/>
    </div>
  )
}

export default App
