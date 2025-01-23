// src/app/route-change-listener.tsx

"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function RouteChange() {
  useEffect(() => {
    console.log("USO EFFECT");
    document.exitFullscreen();
  });

  return <></>;
}
