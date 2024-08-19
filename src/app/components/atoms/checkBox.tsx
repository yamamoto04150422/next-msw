'use client';
import React from 'react';

interface CheckBoxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

const CheckBox: React.FC<CheckBoxProps> = React.memo(
  ({ label, checked, onChange }) => {
    return (
      <label>
        <input type="checkbox" checked={checked} onChange={onChange} />
        {label}
      </label>
    );
  }
);

export default CheckBox;
