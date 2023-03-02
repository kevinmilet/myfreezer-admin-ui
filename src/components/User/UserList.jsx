import axios from "axios";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import styled from "styled-components";

const customStyles = {
  table: {
    style: {
      border: "1px solid #4e73df",
      "border-radius": "2px",
      "box-shadow":
        "0 4px 10px 0 rgba(0,0,0,0.2),0 4px 20px 0 rgba(0,0,0,0.19)",
    },
  },
  headCells: {
    style: {
      background: "#4e73df",
      color: "#FFF",
      "font-weight": "700",
    },
  },
};

// @ts-ignore
const True = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background: #66bb6a;
`;

// @ts-ignore
const False = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background: #ef5350;
`;

const columns = [
  {
    name: "ID",
    selector: (row) => row.id,
  },
  {
    name: "Nom",
    selector: (row) => row.lastname,
  },
  {
    name: "Prénom",
    selector: (row) => row.firstname,
  },
  {
    name: "Email",
    selector: (row) => row.email,
  },
  {
    name: "Date d'inscription",
    selector: (row) => dayjs(row.created_at).locale("fr").format("DD/MM/YYYY"),
  },
  {
    name: "Compte actif",
    selector: (row) => {
      if (row.isActive) {
        return <True />;
      } else {
        return <False />;
      }
    },
  },
  {
    name: "Rôle admin",
    selector: (row) => {
      if (row.isAdmin) {
        return <True />;
      } else {
        return <False />;
      }
    },
  },
];

const paginationComponentOptions = {
  rowsPerPageText: "Par page",
  rangeSeparatorText: "sur",
  selectAllRowsItem: true,
  selectAllRowsItemText: "Tous",
};

export const UserList = () => {
  const [usersData, setUsersData] = useState([]);
  const [selectedRows, setSelectedRows] = useState(false);

  const [loading, setLoading] = useState(true);

  const fetchUsers = () => {
    axios.get("/users").then((res) => {
      console.log(res.data);
      setUsersData(res.data);
    });
  };

  useEffect(() => {
    fetchUsers();
    setLoading(false);
  }, []);

  const handleChange = ({ selectedRows }) => {
    // You can set state or dispatch with something like Redux so we can use the retrieved data
    console.log("Selected Rows: ", selectedRows);
    setSelectedRows(selectedRows);
  };

  const handleClick = (row) => {
    console.log("Selected Row id: ", row);
  };
  return (
    <>
      {loading ? (
        <div className="background-spinner">
          <div className="spinner">CHARGEMENT...</div>
        </div>
      ) : (
        <>
          <div style={{ width: "950px" }}>
            <DataTable
              columns={columns}
              data={usersData}
              customStyles={customStyles}
              onSelectedRowsChange={handleChange}
              pagination
              paginationPerPage={5}
              paginationRowsPerPageOptions={[5, 10, 15, 20]}
              paginationComponentOptions={paginationComponentOptions}
              onRowClicked={(row) => handleClick(row)}
              noDataComponent="Pas d'utilisateurs dans la liste"
            />
          </div>
        </>
      )}
    </>
  );
};
