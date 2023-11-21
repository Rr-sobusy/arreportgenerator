import React, { useState, useRef } from "react";
import Image from './assets/rexreandy.png';
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
    table1No6,
    table1Amt6,
    table1No7,
    table1Amt7,
    table1No8,
    table1Amt8,
    table1No9,
    table1Amt9,
    table1No10,
    table1Amt10,
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
          <p className="label__text top-[100px] left-[88px]">{table1No1}</p>
          <p className="label__text top-[100px] left-[168px]">{table1Amt1}</p>

          <p className="label__text top-[122px] left-[88px]">{table1No2}</p>
          <p className="label__text top-[122px] left-[168px]">{table1Amt2}</p>

          <p className="label__text top-[144px] left-[88px]">{table1No3}</p>
          <p className="label__text top-[144px] left-[168px]">{table1Amt3}</p>

          <p className="label__text top-[166px] left-[88px]">{table1No4}</p>
          <p className="label__text top-[166px] left-[168px]">{table1Amt4}</p>

          <p className="label__text top-[188px] left-[88px]">{table1No5}</p>
          <p className="label__text top-[188px] left-[168px]">{table1Amt5}</p>

          <p className="label__text top-[210px] left-[88px]">{table1No6}</p>
          <p className="label__text top-[210px] left-[168px]">{table1Amt6}</p>

          <p className="label__text top-[232px] left-[88px]">{table1No7}</p>
          <p className="label__text top-[232px] left-[168px]">{table1Amt7}</p>

          <p className="label__text top-[254px] left-[88px]">{table1No8}</p>
          <p className="label__text top-[254px] left-[168px]">{table1Amt8}</p>

          <p className="label__text top-[276px] left-[88px]">{table1No9}</p>
          <p className="label__text top-[276px] left-[168px]">{table1Amt9}</p>

          <p className="label__text top-[298px] left-[88px]">{table1No10}</p>
          <p className="label__text top-[298px] left-[168px]">{table1Amt10}</p>

          {/* *** Middle Portion **** */}
          <p className="absolute text-[14px] font-bold top-[140px] left-[647px]">
            {No}
          </p>

          <p className="label__text top-[189px] left-[636px]">{date}</p>

          <p className="label__text top-[216px] left-[310px]">{received}</p>

          <p className="label__text top-[216px] left-[637px]">{tin}</p>

          <p className="label__text top-[245px] left-[324px]">{address}</p>

          <p className="label__text top-[272px] left-[434px]">
            {businessStyle}
          </p>

          <p className="label__text top-[301px] left-[355px]">{`${sumPesos}`}</p>

          <p className="label__text top-[327px] left-[537px]">{`Php ${numberWithCommas(
            pesos
          )}.00`}</p>

          <p className="label__text top-[357px] left-[415px]">{paymentFor}</p>

          {/*  *****Second Table */}
          {/* <p className="label__text top-[380px] font-bold left-[269px]">x</p> */}
          <p
            className={`label__text ${
              selected === "Check"
                ? "top-[408px] left-[288px]"
                : selected === "Cash"
                ? "top-[407px] left-[329px]"
                : null
            } font-bold `}
          >
            x
          </p>

          <p className="label__text top-[426px] left-[262px]">{table2Price1}</p>
          <p className="label__text top-[426px] left-[372px]">{table2Amt1}</p>

          <p className="label__text top-[449px] left-[262px]">{table2Price2}</p>
          <p className="label__text top-[449px] left-[372px]">{table2Amt2}</p>

          <p className="label__text top-[472px] left-[262px]">{table2Price3}</p>
          <p className="label__text top-[472px] left-[372px]">{table2Amt3}</p>

          <p className="label__text top-[495px] left-[262px]">{table2Price4}</p>
          <p className="label__text top-[495px] left-[372px]">{table2Amt4}</p>

          <p className="label__text top-[518px] left-[262px]">{table2Price5}</p>
          <p className="label__text top-[518px] left-[372px]">{table2Amt5}</p>
        </div>
        <div></div>
      </div>
      <ReactToPrint
        trigger={() => <Button className="w-[150px] mx-3">Print</Button>}
        content={() => componentRef.current}
      />
      
       <a href="/">
        <Button className="bg-red-400">Back</Button>
       </a>
 
    </main>
  );
}

export default App;
