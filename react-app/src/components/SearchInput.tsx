import React, { useEffect, useRef, useState } from 'react';

const CustomInput = () => {
  const [inputValue, setInputValue] = useState<string>(
    localStorage.getItem('value') !== null ? localStorage.getItem('value')! : ''
  );
  const refValue = useRef<string>();

  const onChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
    refValue.current = value;
  };

  useEffect(() => {
    return () => {
      if (refValue.current) {
        localStorage.setItem('value', refValue.current);
      }
    };
  }, []);

  return (
    <div className="input-search">
      <input
        type="text"
        placeholder="Найти товар"
        value={inputValue}
        onChange={onChanged}
        className="input-search__input"
      />
      <span className="input-search__btn"></span>
    </div>
  );
};

export default CustomInput;
