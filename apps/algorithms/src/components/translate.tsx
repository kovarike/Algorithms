"use client";

import { Download } from "./download";
import React from "react";


export function Translate() {


  return (
    <div className="max-w-20 w-20">
      <div className="flex items-center mx-auto my-0">
        <button

          className="w-7 h-7 px-1 text-gray-600 bg-algorithms-color/20 hover:bg-algorithms-color/45 rounded-l-md text-center"
        >
          pt
        </button>
        <button

          className="w-7 h-7 px-1 text-gray-600 bg-algorithms-color/20 hover:bg-algorithms-color/45 text-center"
        >
          en
        </button>
        <Download />
      </div>
    </div>
  );
}
