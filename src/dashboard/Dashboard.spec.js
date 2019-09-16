// Test away
import React from 'react';
import Dashboard from './Dashboard';
import { render, fireEvent } from '@testing-library/react';

test('Dashboard renders correctly', () => {
    render(<Dashboard />);
  });

test("Won't open if it's locked", () => {

  const noOpen = render(<Dashboard />);
  const lockButton = noOpen.getByText(/lock gate/i);
  const closeButton = noOpen.getByText(/close gate/i);
  fireEvent.click(closeButton);
  fireEvent.click(lockButton);
  noOpen.getByText(/locked/i);
  noOpen.getByText(/closed/i);
  const openButton = noOpen.getByText(/open gate/i);
  fireEvent.click(openButton);
  noOpen.getByText(/locked/i);
  noOpen.getByText(/closed/i);

  });
