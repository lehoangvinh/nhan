"use client";
import React from "react";
import { useState } from "react";

const Feed = () => {
  const [notifications, setNotifications] = useState("");
  const [count, setCount] = useState(0);
  const [win, setWin] = useState(0);
  const [draw, setDraw] = useState(0);
  const [lose, setLose] = useState(0);
  const [history, setHistory] = useState([]);

  const slove = (req) => {
    let random = Math.floor(Math.random() * 3) + 1;
    let state = "";
    if (req == random) {
      state = "bạn đã hòa";
      setDraw((pre) => pre + 1);
    } else if (
      (req == 1 && random == 2) ||
      (req == 2 && random == 3) ||
      (req == 3 && random == 1)
    ) {
      state = "Lew lew bạn đã thua, chúc bạn may mắn lần sau";
      setLose((pre) => pre + 1);
    } else if (
      (req == 1 && random == 3) ||
      (req == 2 && random == 1) ||
      (req == 3 && random == 2)
    ) {
      state = "Chúc mừng bạn đã thắng, bạn đỉnh, bạn 10 điểm, không có chỗ chê";
      setWin((pre) => pre + 1);
    }
    console.log("🚀 ~ file: Feed.jsx:15 ~ slove ~ state:", state);
    setHistory([
      ...history,
      {
        req: req,
        random: random,
        noti: state,
      },
    ]);
    setNotifications(state);
    console.log("🚀 ~ file: Feed.jsx:33 ~ slove ~ history:", history);
  };

  return (
    <div className="flex gap-4 flex-col justify-center items-center">
      <h1 className=" text-cyan-400">
        Hãy suy nghĩ thật kĩ rồi đưa ra lựa chọn
      </h1>
      <div className="flex gap-4 justify-center items-center">
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
      <div>{notifications}</div>
      <div className="flex flex-col">
        <p>Tổng số game bạn đã chơi: {count}</p>
        <p>Bạn đã Thắng: {win}</p>
        <p>Bạn đã thua: {lose}</p>
        <p>Hòa: {draw}</p>
      </div>
      <div className="flex flex-col">
        <h1>Lịch sử chơi game</h1>
        <div className="flex flex-col ">
          {history
            .slice(
              history.length - 10 > 0 ? history.length - 10 : 0,
              history.length
            )
            .map((item, index) => {
              return (
                <div className="flex gap-4 justify-between" key={index}>
                  <p>{index + 1}</p>
                  <p>
                    Bạn chọn:
                    {item.req == 1 ? " Kéo" : item.req == 2 ? " Búa" : " Bao"}
                  </p>
                  <p>
                    <p>
                      Máy chọn :
                      {item.random == 1
                        ? " Kéo"
                        : item.random == 2
                        ? " Búa"
                        : " Bao"}
                    </p>
                    {/* {index + 1} : {item.noti} */}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Feed;
