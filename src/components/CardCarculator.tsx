import { InputGroup } from "./helpers/InputGroup";
import { Button } from "./helpers/Button";
import { InputCustom } from "./helpers/InputCustom";
import { useEffect, useState } from "react";
import { Result } from "./helpers/Result";

export const CardCarculator = () => {
  const [bill, setBill] = useState<number | undefined>(undefined);
  const [custom, setCustom] = useState<number | undefined>(undefined);
  const [numberPeople, setNumberPeople] = useState<number | undefined>(
    undefined
  );

  const [total, setTotal] = useState<number>(0);
  const [tipAmount, setTipAmount] = useState<number>(0);

  const [active, setActive] = useState<boolean>(false);
  const [buttonActive, setButtonActive] = useState<boolean>(false);

  const handleCustomChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const inputNumberValue = parseFloat(event.target.value);
    const newValue =
      inputValue !== "" && !isNaN(inputNumberValue)
        ? inputNumberValue
        : undefined;
    setCustom(newValue);
  };

  const handleBillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputNumberValue = parseFloat(event.target.value);
    const inputValue = event.target.value;
    const newValue =
      inputValue !== "" && inputNumberValue > 0 ? inputNumberValue : undefined;

    setBill(newValue);
    console.log(bill);
  };

  const handleNumberOfPeopleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputNumberValue = parseInt(event.target.value);
    const inputValue = event.target.value;
    const newValue =
      inputValue !== "" && inputNumberValue > 0 ? inputNumberValue : undefined;

    setNumberPeople(newValue);
  };

  const onCalculateTotal = (event: React.ChangeEvent<HTMLButtonElement> ,percentage: number) => {
    console.log(event);

    
    if(numberPeople == undefined || numberPeople == 0){
      setActive(true);
      return;
    }

    setActive(false);

    if (bill !== undefined)
      if (bill != 0 && numberPeople != 0) { 
        setTotal(() =>
          Number(((bill * percentage + bill) / numberPeople).toFixed(2))
        );
        setTipAmount(() =>
          Number(((bill * percentage) / numberPeople).toFixed(2))
        );
      }
  };

  useEffect(() => {

    if((numberPeople || 0) > 0) setActive(false);

    if (
      bill !== undefined &&
      numberPeople !== undefined &&
      custom !== undefined
    )
      if (bill != 0 && numberPeople != 0) {
        console.log("inside onCalculateTotal");

        setTotal(() =>
          Number(((bill * (custom / 100) + bill) / numberPeople).toFixed(2))
        );
        setTipAmount(() =>
          Number(((bill * (custom / 100)) / numberPeople).toFixed(2))
        );
      }
  }, [custom, bill, numberPeople]);

  const resetCalculator = () => {
    setBill(undefined);
    setCustom(undefined);
    setNumberPeople(undefined);
    setTipAmount(0);
    setTotal(0);
    setActive(false);
  };

  return (
    <div className="card">
      <div className="card--caculator">
        <InputGroup
          title="Bill"
          style="bill"
          placeholder="0.00"
          name={"bill"}
          value={bill}
          onChange={handleBillChange}
        />

        <div className="tip--section">
          <label>Select Tip %</label>
          <div className="button-group">
            <Button style={buttonActive ? 'button__Active' : ''} title="5%" onClick={(e: any) => onCalculateTotal(e, 0.05)} />
            <Button style={buttonActive ? 'button__Active' : ''} title="10%" onClick={(e: any) => onCalculateTotal(e, 0.1)} />
            <Button style={buttonActive ? 'button__Active' : ''} title="15%" onClick={(e: any) => onCalculateTotal(e, 0.15)} />
            <Button style={buttonActive ? 'button__Active' : ''} title="25%" onClick={(e: any) => onCalculateTotal(e, 0.25)} />
            <Button style={buttonActive ? 'button__Active' : ''} title="50%" onClick={(e: any) => onCalculateTotal(e, 0.5)} />
            <InputCustom
              title="custom"
              name={"custom"}
              value={custom}
              onChange={handleCustomChange}
            />
          </div>
        </div>

        <div className="input--group">
          <div className="input--group--header">
            <label>Number of People</label>
            <p className={`error ${active ? 'active' : ''} `} >Can't be zero</p>
          </div>
          <div className={`input number-of-people ${active ? 'error__input' : ''}`}>
            <input
              type="number"
              placeholder="0"
              value={numberPeople ?? ""}
              onChange={handleNumberOfPeopleChange}
              pattern="[0-9]*"
              inputMode="decimal"
            />
          </div>
        </div>
      </div>

      <div className="card--result">
        <div className="card--result--header">
          <Result title={"Tip Amount"} totalResult={tipAmount} />

          <Result title={"Total"} totalResult={total} />
        </div>

        <div className="card--result--footer">
          <Button title={"Reset"} onClick={resetCalculator} />
        </div>
      </div>
    </div>
  );
};
