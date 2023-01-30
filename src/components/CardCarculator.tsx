import { InputGroup } from "./helpers/InputGroup";
import { Button } from "./helpers/Button";
import { InputCustom } from "./helpers/InputCustom";
import { useEffect, useState } from "react";

export const CardCarculator = () => {
  const [bill, setBill] = useState<number>(0);
  const [custom, setCustom] = useState<number>(0);
  const [numberPeople, setNumberPeople] = useState<number>(0);
  const [total, setTotal] = useState<number>();

  useEffect(() => {
    console.log(total);
  
  }, [total])
  
  const handleCustomChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    if ( isNaN(Number(newValue)) ){
      setCustom(0);
    }

    if(Number(newValue) >= 0 && Number(newValue) <= 100){
      setCustom(Number(newValue));
    }
  };

  const handleBillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    if ( isNaN(Number(newValue)) ) {
      setBill(0);
    }

    if(Number(newValue) >= 0){
      setBill(Number(newValue));
    }
  };

  const handleNumberOfPeopleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    if ( isNaN(Number(newValue)) ) {
      setNumberPeople(0);
    }

    if( Number(newValue) >= 0 ){
      setNumberPeople(Number(newValue));
    } 
  };

  const onCalculateTotal = (percentage: number) => {
    setTotal(() => (bill * percentage));
  }

  const onCalculateCustomTotal = (percentage: number) => {
    setTotal(() => (bill * (percentage / 100)));
  }
  return (
    <div className="card--caculator">
      <InputGroup 
        title="Bill" 
        style="bill" 
        placeholder="0.00" 
        name={'bill'}
        value={bill}
        onChange={handleBillChange}
      />

      <div className="tip--section">
        <label>Select Tip %</label>
        <div className="button-group">
          <Button title="5%" onClick={() => onCalculateTotal(0.05)}/>
          <Button title="10%" onClick={() => onCalculateTotal(0.10)}/>
          <Button title="15%" onClick={() => onCalculateTotal(0.15)}/>
          <Button title="25%" onClick={() => onCalculateTotal(0.25)}/>
          <Button title="50%" onClick={() => onCalculateTotal(0.50)}/>
          <InputCustom 
            title="custom" 
            name={'custom'}
            value={custom}
            onChange={handleCustomChange} 
            onClick={() => onCalculateCustomTotal(custom)} />
        </div>
      </div>

      <InputGroup
        title="Number of People"
        style="number-of-people"
        placeholder="0"
        value={numberPeople}
        name={'numberPeople'}
        onChange={handleNumberOfPeopleChange}
      />
    </div>
  );
};
