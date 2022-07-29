import React, { memo, useEffect, useMemo, useState } from 'react'
import { AgGridReact } from 'ag-grid-react'
import { useNavigate } from 'react-router-dom'
import navigateBack from '../../utils/navigate'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'
import mockData from '../../utils/mockData.json'
import getAPI from '../../API/Get'
import { GridContainer, TextButtonContainer, Title, Wrapper, Button } from './Table.styled'

const Table: React.FC = () => {
  const [data, setData] = useState(mockData)
  const nav = useNavigate()
  document.title = 'Shop item table'

  const columnDefs = useMemo(
    () => [
      { field: 'Name' },
      {
        field: 'Price',
        comparator: numberSort,
        cellRenderer: memo((p: Record<string, unknown>) => <>${p.value}</>)
      },
      { field: 'Description' },
      { headerName: 'Image URL', field: 'Image' }
    ],
    []
  )

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
      resizable: true,
      flex: 1,
      cellRenderer: memo((p: Record<string, unknown>) => <>{p.value}</>)
    }),
    []
  )

  useEffect(() => {
    getAPI().then((res) => {
      setData(res)
    })
  }, [])

  return (
    <Wrapper>
      <TextButtonContainer>
        <Button onClick={() => navigateBack(nav)} />
        <Title>Shop Table</Title>
      </TextButtonContainer>
      <GridContainer className='ag-theme-alpine-dark'>
        <AgGridReact rowData={data} columnDefs={columnDefs} defaultColDef={defaultColDef} />
      </GridContainer>
    </Wrapper>
  )
}

const numberSort = (num1: number, num2: number) => {
  return num1 - num2
}

export default Table
