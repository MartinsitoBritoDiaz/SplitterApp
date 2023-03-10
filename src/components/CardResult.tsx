import React from "react";
import { Result } from "./helpers/Result";
import { Button } from "./helpers/Button";

export const CardResult = ({ total, tipAmount, resetCalculator }: any) => {
  return (
    <div className="card--result">
      <div className="card--result--header">
        <Result title={"Tip Amount"} totalResult={tipAmount} />

        <Result title={"Total"} totalResult={total} />
      </div>

      <div className="card--result--footer">
        <Button title={"Reset"} onClick={resetCalculator} />
      </div>
    </div>
  );
};
