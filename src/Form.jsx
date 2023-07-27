import React, { useState } from "react";
import { useFormState } from "./states/formStates";
import { useNavigate } from "react-router-dom";

function Form() {
  const {
    setTable1No1,
    setTable1Amt1,
    setTable1No2,
    setTable1Amt2,
    setTable1No3,
    setTable1Amt3,
    setTable1No4,
    setTable1Amt4,
    setTable1No5,
    setTable1Amt5,
    setNo,
    setDate,
    setReceived,
    setTin,
    setAddress,
    setBusinessStyle,
    setSum,
    setPesos,
    setPaymentFor,
    setTable2Price1,
    setTable2Amt1,
    setTable2Price2,
    setTable2Amt2,
    setTable2Price3,
    setTable2Amt3,
    setTable2Price4,
    setTable2Amt4,
    setTable2Price5,
    setTable2Amt5,
    setSelected,
    selected,
  } = useFormState();
  const navigate = useNavigate();
  return (
    <>
      <div className="min-h-screen min-w-screen px-20 py-20 grid bg-[#AFB2C2]">
        <div className="bg-white rounded-md px-4 py-4">
          <div>
            <p className="font-bold text-gray-800 text-lg ml-10 mb-5">
              Acknowledgement Receipt
            </p>
          </div>
          <div className="grid grid-cols-3">
            <div className=" ml-20">
              <div className="flex flex-row gap-4 mb-2">
                <p className="text-sm text-gray-500">Debit Note No.</p>
                <p className="text-sm text-gray-500 ml-2">Amount</p>
              </div>
              <div className="flex flex-row gap-4 mb-2">
                <input
                  onChange={(e) => setTable1No1(e.target.value)}
                  type="text"
                  className="border-gray-300 outline-none px-4 text-sm py-1 border rounded-md w-[100px]"
                />
                <input
                  onChange={(e) => setTable1Amt1(e.target.value)}
                  type="text"
                  className=" border-gray-300 outline-none px-4 text-sm py-1 border rounded-md w-[100px]"
                />
              </div>
              <div className="flex flex-row gap-4 mb-2">
                <input
                  onChange={(e) => setTable1No2(e.target.value)}
                  type="text"
                  className="border-gray-300 outline-none px-4 text-sm py-1 border rounded-md w-[100px]"
                />
                <input
                  onChange={(e) => setTable1Amt2(e.target.value)}
                  type="text"
                  className=" border-gray-300 outline-none px-4 text-sm py-1 border rounded-md w-[100px]"
                />
              </div>
              <div className="flex flex-row gap-4 mb-2">
                <input
                  onChange={(e) => setTable1No3(e.target.value)}
                  type="text"
                  className="border-gray-300 outline-none px-4 text-sm py-1 border rounded-md w-[100px]"
                />
                <input
                  onChange={(e) => setTable1Amt3(e.target.value)}
                  type="text"
                  className=" border-gray-300 outline-none px-4 text-sm py-1 border rounded-md w-[100px]"
                />
              </div>
              <div className="flex flex-row gap-4 mb-2">
                <input
                  onChange={(e) => setTable1No4(e.target.value)}
                  type="text"
                  className="border-gray-300 outline-none px-4 text-sm py-1 border rounded-md w-[100px]"
                />
                <input
                  onChange={(e) => setTable1Amt4(e.target.value)}
                  type="text"
                  className=" border-gray-300 outline-none px-4 text-sm py-1 border rounded-md w-[100px]"
                />
              </div>
              <div className="flex flex-row gap-4 mb-2">
                <input
                  onChange={(e) => setTable1No5(e.target.value)}
                  type="text"
                  className="border-gray-300 outline-none px-4 text-sm py-1 border rounded-md w-[100px]"
                />
                <input
                  onChange={(e) => setTable1Amt5(e.target.value)}
                  type="text"
                  className=" border-gray-300 outline-none px-4 text-sm py-1 border rounded-md w-[100px]"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-gray-500 text-sm" htmlFor="">
                No.
              </label>
              <input
                onChange={(e) => setNo(e.target.value)}
                type="number"
                className="w-1/5 py-1 text-sm border-gray-300 px-2 rounded-md border outline-none"
              />
              <label className="text-gray-500 text-sm" htmlFor="">
                Date
              </label>
              <input
                onChange={(e) => setDate(e.target.value)}
                type="text"
                className="w-full py-1 text-sm border-gray-300 px-2 rounded-md border outline-none"
              />
              <label className="text-gray-500 text-sm" htmlFor="">
                Received
              </label>
              <input
                onChange={(e) => setReceived(e.target.value)}
                type="text"
                className="w-full py-1 text-sm border-gray-300 px-2 rounded-md border outline-none"
              />
              <label className="text-gray-500 text-sm" htmlFor="">
                Address
              </label>
              <input
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                className="w-full py-1 text-sm border-gray-300 px-2 rounded-md border outline-none"
              />
              <label className="text-gray-500 text-sm" htmlFor="">
                Tin
              </label>
              <input
                onChange={(e) => setTin(e.target.value)}
                type="text"
                className="w-full py-1 text-sm border-gray-300 px-2 rounded-md border outline-none"
              />
              <label className="text-gray-500 text-sm" htmlFor="">
                Business Style of
              </label>
              <input
                onChange={(e) => setBusinessStyle(e.target.value)}
                type="text"
                className="w-full py-1 text-sm border-gray-300 px-2 rounded-md border outline-none"
              />
              <label className="text-gray-500 text-sm" htmlFor="">
                Sum of
              </label>
              <input
                onChange={(e) => setPesos(e.target.value)}
                type="number"
                className="w-full py-1 text-sm border-gray-300 px-2 rounded-md border outline-none"
              />
              <label className="text-gray-500 text-sm" htmlFor="">
                Payment for
              </label>
              <input
                onChange={(e) => setPaymentFor(e.target.value)}
                type="text"
                className="w-full py-1 text-sm border-gray-300 px-2 rounded-md border outline-none"
              />
              <button
                onClick={() => navigate("/app")}
                className="w-full border py-2 mt-5 font-bold uppercase rounded-md border-black"
              >
                Preview
              </button>
            </div>
            <div className="grid grid-cols-4 gap-2 pt-3 m-5">
              {["Check", "Cash"].map((radio, key) => (
                <div className="col-span-1 text-center" key={key}>
                  <input
                    checked={selected === radio}
                    onChange={(e) => setSelected(e.target.value)}
                    value={radio}
                    label={radio}
                    key={key}
                    type="radio"
                  />
                  <label htmlFor="" className="text-gray-500 text-sm">
                    {radio}
                  </label>
                </div>
              ))}
              <div className="col-span-2 grid justify-center text-gray-500 text-sm">
                <h1>Amount</h1>
              </div>
              <div className="col-span-2 -mt-8">
                <input
                  onChange={(e) => setTable2Price1(e.target.value)}
                  type="text"
                  className="w-full py-1  text-sm border-gray-300 px-2 rounded-md border outline-none"
                />
              </div>
              <div className="col-span-2 -mt-8">
                <input
                  onChange={(e) => setTable2Amt1(e.target.value)}
                  type="text"
                  className="w-full py-1 text-sm border-gray-300 px-2 rounded-md border outline-none"
                />
              </div>
              <div className="col-span-2 -mt-8">
                <input
                  onChange={(e) => setTable2Price2(e.target.value)}
                  type="text"
                  className="w-full py-1 text-sm border-gray-300 px-2 rounded-md border outline-none"
                />
              </div>
              <div className="col-span-2 -mt-8">
                <input
                  onChange={(e) => setTable2Amt2(e.target.value)}
                  type="text"
                  className="w-full py-1 text-sm border-gray-300 px-2 rounded-md border outline-none"
                />
              </div>
              <div className="col-span-2 -mt-8">
                <input
                  onChange={(e) => setTable2Price3(e.target.value)}
                  type="text"
                  className="w-full py-1 text-sm border-gray-300 px-2 rounded-md border outline-none"
                />
              </div>
              <div className="col-span-2 -mt-8">
                <input
                  onChange={(e) => setTable2Amt3(e.target.value)}
                  type="text"
                  className="w-full py-1 text-sm border-gray-300 px-2 rounded-md border outline-none"
                />
              </div>
              <div className="col-span-2 -mt-6">
                <input
                  onChange={(e) => setTable2Price4(e.target.value)}
                  type="text"
                  className="w-full py-1 text-sm border-gray-300 px-2 rounded-md border outline-none"
                />
              </div>
              <div className="col-span-2 -mt-6">
                <input
                  onChange={(e) => setTable2Amt4(e.target.value)}
                  type="text"
                  className="w-full py-1 text-sm border-gray-300 px-2 rounded-md border outline-none"
                />
              </div>
              <div className="col-span-2 -mt-6">
                <input
                  onChange={(e) => setTable2Price5(e.target.value)}
                  type="text"
                  className="w-full py-1 text-sm border-gray-300 px-2 rounded-md border outline-none"
                />
              </div>
              <div className="col-span-2 -mt-8">
                <input
                  onChange={(e) => setTable2Amt5(e.target.value)}
                  type="text"
                  className="w-full py-1 text-sm border-gray-300 px-2 rounded-md border outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
