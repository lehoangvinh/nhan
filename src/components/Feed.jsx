"use client";
import React from "react";

const Feed = () => {
  const slove = (req) => {
    if (req == 1) {
      alert("Lew lew bạn đã thua, chúc bạn may mắn lần sau");
    } else if (req == 2) {
      alert("Lew lew bạn đã thua, chúc bạn may mắn lần sau");
    } else if (req == 3) {
      alert("Lew lew bạn đã thua, chúc bạn may mắn lần sau");
    }
  };

  return (
    <div className="flex gap-4 flex-col">
      <h1 className=" text-cyan-400">
        Hãy suy nghĩ thật kĩ rồi đưa ra lựa chọn
      </h1>
      <div className="flex gap-4 justify-center items-center ">
        <button
          className="btn btn-primary border border-cyan-400 px-4 py-2 rounded hover:bg-green-400"
          onClick={() => {
            slove(1);
          }}
        >
          Kéo
        </button>
        <button
          className="btn btn-primary border border-cyan-400 px-4 py-2 rounded hover:bg-green-400"
          onClick={() => {
            slove(2);
          }}
        >
          Búa
        </button>
        <button
          className="btn btn-primary border border-cyan-400 px-4 py-2 rounded hover:bg-green-400"
          onClick={() => {
            slove(3);
          }}
        >
          Bao
        </button>
      </div>
    </div>
  );
};

export default Feed;
