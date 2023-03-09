import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import {Button, Stack,} from "@mui/material";

const DataTable = () => {

  const [tableData, setTableData] = useState([])

  const [rows, setRows] = useState(tableData);

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'name',
      headerName: 'Name',
      width: 250,
      editable: true,
    },
    {
      field: 'unitPrice',
      headerName: 'Unit Price',
      type: 'number',
      width: 150,
      editable: true,
    },
    {
      field: 'unitsInStock',
      headerName: 'Units In Stock',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'quantityPerUnit',
      headerName: 'Quantity Per Unit',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Actions',
      width: 125,
      renderCell: (params) => (
          <strong>
            <Button
                variant="contained"
                size="small"
                style={{ marginLeft: 16 }}
                tabIndex={params.hasFocus ? 0 : -1}
                onClick={() => {
                  deleteItem(params.id)
                }}
            >
              Delete
            </Button>
          </strong>
      ),
    }
  ];

  useEffect(() => {
    loadData()
  }, [])

  const loadData = () => {
    fetch("https://northwind.vercel.app/api/products")
        .then((data) => data.json())
        .then((data) => setTableData(data))
  }

  const deleteItem = (id) => {
    fetch('https://northwind.vercel.app/api/products/' + id, {
      method: 'DELETE'
    }).then(() => {
      loadData()
    })
  }

  return (

      <div style={{ height: 700, width: '100%' }}>
        <DataGrid
            rows={tableData}
            columns={columns}
            pageSize={12}
            checkboxSelection
        />
      </div>


  )
}

export default DataTable