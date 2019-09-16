// Test away!
import React from "react";
import { render } from "@testing-library/react";
import Display from "./Display";

test ("Display is locked and closed when passed locked=true and closed=true", () => {
  const closeLock = render(<Display locked={true} closed={true} />);
  closeLock.getByText(/closed/i);
  closeLock.getByText(/locked/i);
});

test ("Display is unlocked and open when passed locked=false and closed=false", () => {
  const openUnlock = render (<Display locked ={false} closed={false} />);
  openUnlock.getByText(/open/i);
  openUnlock.getByText(/unlocked/i);
});

test("When closed and locked, is red-led class", () => {
  const redDisplay = render(<Display locked={true} closed={true} />);
  const closed = redDisplay.getByText(/closed/i);
  const locked = redDisplay.getByText(/locked/i);
  expect(closed.classList.contains("red-led")).toBe(true);
  expect(locked.classList.contains("red-led")).toBe(true);
});

test("When open and unlocked, is green-led class", () => {
  const greenDisplay = render(<Display locked={false} closed={false} />);
  const  open = greenDisplay.getByText(/open/i);
  const unlocked = greenDisplay.getByText(/unlocked/i);
  expect(open.classList.contains("green-led")).toBe(true);
  expect(unlocked.classList.contains("green-led")).toBe(true);
});