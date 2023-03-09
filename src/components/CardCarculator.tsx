import { InputGroup } from "./helpers/InputGroup";
import { Button } from "./helpers/Button";
import { InputCustom } from "./helpers/InputCustom";
import { useEffect, useState } from "react";
import { Result } from "./helpers/Result";

export const CardCarculator = () => {
  const [bill, setBill] = useState<number | undefined>(undefined);
  const [custom, setCustom] = useState<number | undefined>(undefined);
  const [numberPeople, setNumberPeople] = useState<number | undefined>(undefined);

  
  const [total, setTotal] = useState<number>(0);
  const [tipAmount, setTipAmount] = useState<number>(0);
  
  const handleCustomChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const inputNumberValue = parseFloat(event.target.value);
    const newValue = inputValue !== '' && !isNaN(inputNumberValue) ? inputNumberValue : undefined;
    setCustom(newValue);
  };

  const handleBillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputNumberValue = parseFloat(event.target.value);
    const inputValue = event.target.value;
    const newValue = (inputValue !== '') && (inputNumberValue > 0)  ? inputNumberValue : undefined;

    setBill(newValue);
    console.log(bill)

  };

  const handleNumberOfPeopleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputNumberValue = parseInt(event.target.value);
    const inputValue = event.target.value;
    const newValue = (inputValue !== '') && (inputNumberValue > 0)  ? inputNumberValue : undefined;

    setNumberPeople(newValue);
  };

  const onCalculateTotal = (percentage: number) => {
    if(bill !== undefined && numberPeople !== undefined)
      if(bill != 0 && numberPeople != 0){
        console.log("inside onCalculateTotal")

        setTotal(() => Number((( (bill * percentage) + bill ) / numberPeople).toFixed(2)) );
        setTipAmount(() => Number(((bill * percentage) / numberPeople).toFixed(2)) );
      }
  }

  useEffect(() => {
    if(bill !== undefined && numberPeople !== undefined && custom !== undefined)
      if(bill != 0 && numberPeople != 0){
        console.log("inside onCalculateTotal")

        setTotal(() => Number((( (bill * (custom / 100)) + bill ) / numberPeople).toFixed(2)));
        setTipAmount(() => Number(((bill * (custom / 100)) / numberPeople).toFixed(2)));
      }
  }, [custom, bill, numberPeople])
  
  return (
    <div className="card">
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
         />
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

    <div className='card--result'>
        <div className='card--result--header'>
            <Result title={'Tip Amount'} totalResult={tipAmount}/>

            <Result title={'Total'} totalResult={total} />
        </div>

        <div className='card--result--footer'>
            <Button title={'Reset'} />
        </div>
    </div>
    </div>
  );
};
