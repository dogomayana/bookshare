"use client";
import React from "react";
import UserContextComp from "./userContext";

export default function Provider({ children }) {
  return <UserContextComp>{children}</UserContextComp>;
}
