import React, { useState, useRef } from "react";
import Image from "./assets/image.png";
import ReactToPrint from "react-to-print";
import { toWords } from "number-to-words";
import { useFormState } from "./states/formStates";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

function App() {
  const {
    table1No1,
    table1Amt1,
    table1No2,
    table1Amt2,
    table1No3,
    table1Amt3,
    table1No4,
    table1Amt4,
    table1No5,
    table1Amt5,
    No,
    date,
    received,
    tin,
    address,
    businessStyle,
    pesos,
    paymentFor,
    table2Price1,
    table2Amt1,
    table2Price2,
    table2Amt2,
    table2Price3,
    table2Amt3,
    table2Price4,
    table2Amt4,
    table2Price5,
    table2Amt5,
    selected,
  } = useFormState();
  const componentRef = useRef();

  const navigate = useNavigate();

  const sumPesos = toWords(pesos);

  function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x)) x = x.replace(pattern, "$1,$2");
    return x;
  }
  const isShowed = false;
  return (
    <main>
      <div ref={componentRef} className="w-screen h-auto">
        <div className="">
          <img className="ml-8" src={Image} alt="" />

          {/* First Table */}
          <p className="label__text top-[93px] left-[82px]">{table1No1}</p>
          <p className="label__text top-[93px] left-[162px]">{table1Amt1}</p>

          <p className="label__text top-[113px] left-[82px]">{table1No2}</p>
          <p className="label__text top-[113px] left-[162px]">{table1Amt2}</p>

          <p className="label__text top-[133px] left-[82px]">{table1No3}</p>
          <p className="label__text top-[133px] left-[162px]">{table1Amt3}</p>

          <p className="label__text top-[154px] left-[82px]">{table1No4}</p>
          <p className="label__text top-[154px] left-[162px]">{table1Amt4}</p>

          <p className="label__text top-[174px] left-[82px]">{table1No5}</p>
          <p className="label__text top-[174px] left-[162px]">{table1Amt5}</p>

          {/* *** Middle Portion **** */}
          <p className="absolute text-[14px] font-bold top-[130px] left-[606px]">
            {No}
          </p>

          <p className="label__text top-[172px] left-[603px]">{date}</p>

          <p className="label__text top-[198px] left-[295px]">{received}</p>

          <p className="label__text top-[198px] left-[603px]">{tin}</p>

          <p className="label__text top-[225px] left-[311px]">{address}</p>

          <p className="label__text top-[251px] left-[414px]">
            {businessStyle}
          </p>

          <p className="label__text top-[278px] left-[330px]">{`${sumPesos}`}</p>

          <p className="label__text top-[304px] left-[502px]">{`Php ${numberWithCommas(
            pesos
          )}.00`}</p>

          <p className="label__text top-[331px] left-[394px]">{paymentFor}</p>

          {/*  *****Second Table */}
          {/* <p className="label__text top-[380px] font-bold left-[269px]">x</p> */}
          <p
            className={`label__text ${
              selected === "Check"
                ? "top-[380px] left-[269px]"
                : selected === "Cash"
                ? "top-[380px] left-[309px]"
                : null
            } font-bold `}
          >
            x
          </p>

          <p className="label__text top-[396px] left-[245px]">{table2Price1}</p>
          <p className="label__text top-[396px] left-[362px]">{table2Amt1}</p>

          <p className="label__text top-[420px] left-[245px]">{table2Price2}</p>
          <p className="label__text top-[420px] left-[362px]">{table2Amt2}</p>

          <p className="label__text top-[443px] left-[245px]">{table2Price3}</p>
          <p className="label__text top-[443px] left-[362px]">{table2Amt3}</p>

          <p className="label__text top-[465px] left-[245px]">{table2Price4}</p>
          <p className="label__text top-[465px] left-[362px]">{table2Amt4}</p>

          <p className="label__text top-[487px] left-[245px]">{table2Price5}</p>
          <p className="label__text top-[487px] left-[362px]">{table2Amt5}</p>
        </div>
        <div></div>
      </div>
      <ReactToPrint
        trigger={() => <Button className="w-[150px] mx-3">Print</Button>}
        content={() => componentRef.current}
      />
      <Button onClick={() => navigate("/inputform")} color="red">
        Back
      </Button>
    </main>
  );
}

export default App;
