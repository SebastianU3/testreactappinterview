import { useState } from "react";
import { DataItem } from "./DataItem";

export function ViewData({ data }) {
  const [edit, setEdit] = useState(0);

  return (
    <div>
      <table>
        <tr>
          <th>Product Name</th>
          <th>Amount</th>
          <th>Transaction Date</th>
          <th>Status</th>
        </tr>
        {data?.map((data, i) => (
          <DataItem
            curEdit={edit}
            onEdit={setEdit}
            data={data}
            num={i}
            key={data.id}
          />
        ))}
      </table>
    </div>
  );
}
