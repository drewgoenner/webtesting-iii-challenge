// Test away!
import React from "react";
import { render } from "@testing-library/react";
import Controls from "./Controls";
import 'jest-dom/extend-expect';

test("Both buttons render", () => {
  const buttons = render(<Controls />);
  buttons.getByText(/lock gate/i);
  buttons.getByText(/close gate/i);
});

test("Buttons say 'unlock gate' and 'open gate' if gate is locked and closed", () => {
  const closeLock = render(<Controls locked={true} closed={true} />);
  closeLock.getByText(/unlock gate/i);
  closeLock.getByText(/open gate/i);
});

test("Buttons say 'lock gate' and 'close gate' if open and unlocked", () => {
  const openUnlock = render(<Controls locked={false} closed={false} />);
  openUnlock.getByText(/lock gate/i);
  openUnlock.getByText(/close gate/i);
});

test("Open button is disabled if the gate is locked", () => {
  const disableOpen = render(<Controls locked={true} closed={true} />);
  let openGate = disableOpen.queryByText(/open gate/i);
  expect(openGate).toHaveAttribute("disabled");
});

test("Lock button is disabled if the gate is open", () => {
  const disableLock = render(<Controls locked={false} closed={false} />);
  let lockButton = disableLock.queryByText(/lock gate/i);
  expect(lockButton).toHaveAttribute("disabled");
});

