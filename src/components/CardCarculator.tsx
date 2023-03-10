import { InputGroup } from "./helpers/InputGroup";
import { Button } from "./helpers/Button";
import { InputCustom } from "./helpers/InputCustom";
import { useEffect, useState } from "react";
import { Result } from "./helpers/Result";
import { CardResult } from "./CardResult";

export const CardCarculator = () => {
  const [bill, setBill] = useState<number | undefined>(undefined);
  const [custom, setCustom] = useState<number | undefined>(undefined);
  const [numberPeople, setNumberPeople] = useState<number | undefined>(
    undefined
  );
  const [total, setTotal] = useState<number>(0);
  const [tipAmount, setTipAmount] = useState<number>(0);
  const [active, setActive] = useState<boolean>(false);
  const [buttons, setButtons] = useState({
    button5: false,
    button10: false,
    button15: false,
    button25: false,
    button50: false,
  });

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

  const onCalculateTotal = (
    event: React.ChangeEvent<HTMLButtonElement>,
    percentage: number
  ) => {
    setButtonStyle(percentage);

    if (numberPeople == undefined || numberPeople == 0) {
      setActive(true);
      resetButtonsStyle();
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
    if ((numberPeople || 0) > 0) setActive(false);

    if (
      bill !== undefined &&
      numberPeople !== undefined &&
      custom !== undefined
    )
      if (bill != 0 && numberPeople != 0) {
        resetButtonsStyle();
        setTotal(() =>
          Number(((bill * (custom / 100) + bill) / numberPeople).toFixed(2))
        );
        setTipAmount(() =>
          Number(((bill * (custom / 100)) / numberPeople).toFixed(2))
        );
      }
  }, [custom, bill, numberPeople]);

  const resetButtonsStyle = () => {
    setButtons({
      button5: false,
      button10: false,
      button15: false,
      button25: false,
      button50: false,
    });
  };

  const setButtonStyle = (percentage: number) => {
    setCustom(undefined);
    
    switch (percentage) {
      case 0.05:
        setButtons({
          button5: true,
          button10: false,
          button15: false,
          button25: false,
          button50: false,
        });
        break;

      case 0.1:
        setButtons({
          button5: false,
          button10: true,
          button15: false,
          button25: false,
          button50: false,
        });
        break;

      case 0.15:
        setButtons({
          button5: false,
          button10: false,
          button15: true,
          button25: false,
          button50: false,
        });
        break;

      case 0.25:
        setButtons({
          button5: false,
          button10: false,
          button15: false,
          button25: true,
          button50: false,
        });
        break;

      case 0.5:
        setButtons({
          button5: false,
          button10: false,
          button15: false,
          button25: false,
          button50: true,
        });
        break;

      default:
        break;
    }
  };

  const resetCalculator = () => {
    setBill(undefined);
    setCustom(undefined);
    setNumberPeople(undefined);
    setTipAmount(0);
    setTotal(0);
    setActive(false);
    resetButtonsStyle();
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
            <Button
              style={`${buttons.button5 ? "button5__Active" : ""}`}
              title="5%"
              onClick={(e: any) => onCalculateTotal(e, 0.05)}
            />
            <Button
              style={`${buttons.button10 ? "button10__Active" : ""}`}
              title="10%"
              onClick={(e: any) => onCalculateTotal(e, 0.1)}
            />
            <Button
              style={` ${buttons.button15 ? "button15__Active" : ""}`}
              title="15%"
              onClick={(e: any) => onCalculateTotal(e, 0.15)}
            />
            <Button
              style={`${buttons.button25 ? "button25__Active" : ""}`}
              title="25%"
              onClick={(e: any) => onCalculateTotal(e, 0.25)}
            />
            <Button
              style={` ${buttons.button50 ? "button50__Active" : ""}`}
              title="50%"
              onClick={(e: any) => onCalculateTotal(e, 0.5)}
            />
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
            <p className={`error ${active ? "active" : ""} `}>Can't be zero</p>
          </div>
          <div
            className={`input number-of-people ${active ? "error__input" : ""}`}
          >
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

      <CardResult total={total} tipAmount={tipAmount} resetCalculator={resetCalculator} />
    </div>
  );
};
