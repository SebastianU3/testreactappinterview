import { useState } from "react";
import moment from "moment";
import { Button } from "./Button";

// "id": 1372,
//       "productID": "10001",
//       "productName": "Test 1",
//       "amount": "1000",
//       "customerName": "abc",
//       "status": 0,
//       "transactionDate": "2022-07-10 11:14:52",
//       "createBy": "abc",
//       "createOn": "2022-07-10 11:14:52"
export function AddData({ onSetData }) {
  const id = Math.round(Math.random() * (Math.random() * 100));
  let transactionDate = Date.now.toString();
  transactionDate = moment().format("YYYY-MM-D H:mm:ss ");
  let createOn = Date.now.toString;
  createOn = moment().format("YYYY-MM-D H:mm:ss ");
  const [productID, setProductID] = useState(null);
  const [productName, setProductName] = useState(null);
  const [amount, setAmount] = useState(null);
  const [customerName, setCustomerName] = useState(null);
  const [status, setStatus] = useState(null);
  const [createBy, setCreateBy] = useState(null);

  function createData() {
    const data = {
      id,
      productID,
      productName,
      amount,
      customerName,
      status,
      transactionDate,
      createBy,
      createOn,
    };
    onSetData(data);
  }

  return (
    <>
      <p>
        Product ID
        <input
          type="number"
          value={productID}
          onChange={(e) => setProductID(Number(e.target.value))}
        ></input>
      </p>
      <p>
        Product Name
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        ></input>
      </p>
      <p>
        Amount
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        ></input>
      </p>
      <p>
        Customer Name
        <input
          type="text"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        ></input>
      </p>
      <p>
        Status
        <input
          type="text"
          value={status}
          onChange={(e) => setStatus(Number(e.target.value))}
        ></input>
      </p>
      <p>
        Transaction Date
        <input type="text" value={transactionDate} disabled></input>
      </p>
      <p>
        Create By
        <input
          type="text"
          value={createBy}
          onChange={(e) => setCreateBy(e.target.value)}
        ></input>
      </p>
      <p>
        Create On
        <input type="text" value={createOn} disabled></input>
      </p>
      <Button onHandle={createData}>Add Data</Button>
    </>
  );
}
