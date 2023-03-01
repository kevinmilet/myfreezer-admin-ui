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
      <DataTable columns={columns} data={data} />
    </>
  );
};
