import React, { useEffect, useState } from 'react';

const CustomInput = () => {
  const [inputValue, setInputValue] = useState<string>(
    localStorage.getItem('value') !== null ? localStorage.getItem('value')! : ''
  );

  const onChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
  };

  useEffect(() => {
    return () => {
      localStorage.setItem('value', inputValue);
    };
  }, [inputValue]);

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
