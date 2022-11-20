import React from "react";
import "../assets/tailwind.css";
import { createRoot } from "react-dom/client";
import Nametag from "./nametag";

const Popup = (
  <div>
    <h1 className="text-3xl text-green-500 font-bold underline">
      Mealable
      <Nametag />
    </h1>
  </div>
);

const container = document.createElement("div");
document.body.appendChild(container);
const root = createRoot(container);
root.render(Popup);
