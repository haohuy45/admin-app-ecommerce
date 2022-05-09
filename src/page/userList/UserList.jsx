import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./userList.css";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from "react-router-dom";
import { userRows } from "../../dummyData";

export default function UserList() {
    const [data, setData] = useState(userRows);
    console.log(data)

    const handleDelete = (id) => {
        setData(data.filter(item => item.id != id))
    }
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "user", headerName: "Username", width: 200, renderCell: (params) => {
        return (
            <div className="userListUser">
                <img className="userListImg" src={params.row.avatar} alt=""/>
                {params.row.username}
            </div>
        )
    } },
    { field: "email", headerName: "Email", width: 200 },
    { field: "status", headerName: "Status", width: 130 },
    { field: "transaction", headerName: "Transaction", width: 130 },
    {
        field: "action",
        headerName: "Action",
        width: 150,
        renderCell: (params) => {
          return (
            <>
              <Link to={"/user/" + params.row.id}>
                <button className="userListEdit">Edit</button>
              </Link>
              <DeleteOutlineIcon
                className="userListDelete"
                onClick = {() => handleDelete(params.row.id)}
                
              />
            </>
          );
        },
    }
  ];

  
  return <div className="userList">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
      </div>;
}
