import React, { useEffect, useState } from 'react';


const  CustomInput  = () => {
  const [value, setValue] = useState<string>(localStorage.getItem('value') !== null ? localStorage.getItem('value')! : '')

  const onChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value)
  }

  useEffect(() => {
    window.addEventListener('beforeunload', saveInputValue);
    return () => {
      saveInputValue();
      window.removeEventListener('beforeunload', saveInputValue);
    }
  }, [])


  const saveInputValue = () => {
    localStorage.setItem('value', value);
  }

    return (
      <div className="input-search">
        <input
          type="text"
          placeholder="Найти товар"
          value={value}
          onChange={onChanged}
          className="input-search__input"
        />
        <span className="input-search__btn"></span>
      </div>
    );
  
}

export default CustomInput;
