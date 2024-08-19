import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CheckBox from './checkBox';

describe('CheckBox Component', () => {
  const label = 'Check me';
  const onChangeMock = jest.fn();

  it('should render the checkbox with the correct label', () => {
    render(<CheckBox label={label} checked={false} onChange={onChangeMock} />);
    const checkbox = screen.getByLabelText(label);
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
  });

  it('should be checked when the checked prop is true', () => {
    render(<CheckBox label="label" checked={true} onChange={onChangeMock} />);
    const checkbox = screen.getByLabelText('label');
    expect(checkbox).toBeChecked();
  });

  it('should call onChange handler when clicked', () => {
    render(<CheckBox label="1" checked={false} onChange={onChangeMock} />);
    const checkbox = screen.getByLabelText('1');
    fireEvent.click(checkbox);
    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });
});
