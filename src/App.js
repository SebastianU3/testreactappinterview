import { useState } from "react";
import jsonData from "./viewData.json";
import { ViewData } from "./ViewData";
import { Button } from "./Button";
import { AddData } from "./AddData";

//npm install moment --save
function App() {
  const [data, setData] = useState(jsonData.data);

  const [isOpen, setIsOpen] = useState(false);

  function handleClickAddData() {
    setIsOpen(!isOpen);
  }

  function handleAddData(newData) {
    setData((data) => [...data, newData]);
    handleClickAddData();
  }

  return (
    <>
      <ViewData data={data} />
      {isOpen || <Button onHandle={handleClickAddData}>Add Data</Button>}
      {isOpen ? <AddData onSetData={handleAddData} /> : null}
    </>
  );
}

export default App;
