import { useState } from "react";

export function EditData({ data }) {
  const [amount, setAmount] = useState(data?.amount);
  const [status, setStatus] = useState(data?.status);

  function handleChangeAmount(num) {
    setAmount(num);
    data.amount = num;
  }
  function handleChangeStatus(num) {
    if (num === 1 || num === 0) {
      setStatus(num);
      data.status = num;
    }
    return;
  }

  return (
    <>
      <tr>
        <label>ProductID : </label>
        <input type="text" value={data.productID} disabled></input>
      </tr>
      <tr>
        <label>Product Name : </label>
        <input type="text" value={data.productName} disabled></input>
      </tr>
      <tr>
        <label>Amount: </label>
        <input
          type="text"
          value={amount}
          onChange={(e) => handleChangeAmount(Number(e.target.value))}
        ></input>
      </tr>
      <tr>
        <label>Customer Name : </label>
        <input type="text" value={data.customerName} disabled></input>
      </tr>
      <tr>
        <label>Product Status : </label>
        <input
          type="text"
          value={status}
          onChange={(e) => handleChangeStatus(Number(e.target.value))}
        ></input>
      </tr>
    </>
  );
}
