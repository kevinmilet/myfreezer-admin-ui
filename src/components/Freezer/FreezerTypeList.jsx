import DataTable from "react-data-table-component";

const data = [
  {
    id: 1,
    name: "Armoire",
  },
  {
    id: 2,
    name: "Coffre",
  },
  {
    id: 3,
    name: "Combiné",
  },
  {
    id: 4,
    name: "Top",
  },
  {
    id: 5,
    name: "Autre",
  },
];

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

export const FreezerTypeList = () => {
  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
    },
    {
      name: "Type de congélateur",
      selector: (row) => row.name,
    },
  ];

  return (
    <>
      <div style={{ width: "500px" }}>
        <DataTable columns={columns} data={data} customStyles={customStyles} />
      </div>
    </>
  );
};
