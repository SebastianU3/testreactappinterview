import { EditData } from "./EditData";
import { Button } from "./Button";

export function DataItem({ curEdit, onEdit, data, num }) {
  const isEdited = num === curEdit;

  function handleEdit() {
    onEdit(isEdited ? null : num);
  }

  return (
    <>
      <tr>
        <td>{data?.productName}</td>
        <td>{data?.amount}</td>
        <td>{data?.transactionDate}</td>
        <td>{data?.status}</td>
        <td>
          <Button onHandle={handleEdit}>Edit</Button>
        </td>
      </tr>
      {isEdited && <EditData data={data} />}
    </>
  );
}
