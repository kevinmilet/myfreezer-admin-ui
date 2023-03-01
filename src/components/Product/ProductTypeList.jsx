import DataTable from "react-data-table-component";

const data = [
  {
    id: 1,
    name: "xxx",
  },
  {
    id: 2,
    name: "aaa",
  },
  {
    id: 3,
    name: "bbb",
  },
  {
    id: 4,
    name: "ccc",
  },
  {
    id: 5,
    name: "eee",
  },
];

export const ProductTypeList = () => {
  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
    },
    {
      name: "Type de produit",
      selector: (row) => row.name,
    },
  ];
  return (
    <>
      <DataTable columns={columns} data={data} />
    </>
  );
};
