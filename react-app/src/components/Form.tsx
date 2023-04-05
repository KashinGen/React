import React from 'react';
import ControlWrapper from './UI/ControlWrapper';
import { CartItem, INSTOCK, PayMethod } from '../types';
import { v4 as uuid } from 'uuid';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';

interface FormProps {
  onSubmit: (item: CartItem) => void;
}
const brandOptions = [
  { name: 'Apple', value: 'Apple' },
  { name: 'Samsung', value: 'Samsung' },
  { name: 'Huawei', value: 'Huawei' },
  { name: 'Oppo', value: 'Oppo' },
  { name: 'LG', value: 'LG' },
];

const categotiesOptions = [
  { name: 'Laptop', value: 'Laptop' },
  { name: 'TV', value: 'TV' },
  { name: 'Phone', value: 'Phone' },
  { name: 'Tablet', value: 'Tablet' },
];

const Form = ({ onSubmit }: FormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ reValidateMode: 'onSubmit' });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [btnText, setBtnText] = React.useState('Save');

  const onSumbitHandler: SubmitHandler<FieldValues> = (values): void => {
    setIsSubmitting(true);
    const card = Object.assign({}, values);
    card.thumbnail = URL.createObjectURL(values.thumbnail[0]);
    if (values.date instanceof Date || isNaN(values.date)) {
      delete card.date;
    }
    card.id = uuid();
    onSubmit(card as CartItem);
    setBtnText('Saved');
    setTimeout(() => {
      setBtnText('Save');
      setIsSubmitting(false);
    }, 1000);
    reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSumbitHandler)}>
      <div className="form__inner">
        <ControlWrapper label="Title" error={errors.title} errorText="Проверьте данные">
          <input type="text" className="form__input" {...register('title', { required: true })} />
        </ControlWrapper>
        <ControlWrapper label="Rating" error={errors.rating} errorText="Проверьте данные">
          <input
            type="number"
            className="form__input"
            {...register('rating', { required: true, valueAsNumber: true, min: 0, max: 10 })}
          />
        </ControlWrapper>
        <ControlWrapper label="Price" error={errors.price} errorText="Проверьте данные">
          <input
            type="number"
            className="form__input"
            {...register('price', { required: true, valueAsNumber: true, min: 0 })}
          />
        </ControlWrapper>
        <ControlWrapper label="Image" error={errors.img} errorText="Проверьте данные">
          <input
            type="file"
            className="form__input"
            {...register('thumbnail', {
              required: true,
              validate: (value) => value[0].type.includes('image'),
            })}
          />
        </ControlWrapper>
        <ControlWrapper label="Date" error={undefined}>
          <input type="date" className="form__input" {...register('date', { valueAsDate: true })} />
        </ControlWrapper>
        <ControlWrapper label="In stock?" error={errors.in_stock} errorText="Поле обязательно">
          <div>
            <label>
              YES
              <input
                type="radio"
                className="form__input"
                {...register('in_stock', { required: true })}
                value={INSTOCK.YES}
              />
            </label>
            <label>
              NO
              <input
                type="radio"
                className="form__input"
                {...register('in_stock', { required: true })}
                value={INSTOCK.NO}
              />
            </label>
          </div>
        </ControlWrapper>
        <ControlWrapper label="Pay method" error={errors.pay_method} errorText="Поле обязательно">
          <div>
            <label>
              Cash
              <input
                type="checkbox"
                className="form__input"
                value={PayMethod.CASH}
                {...register('pay_method', { required: true })}
              />
            </label>
            <label>
              Card
              <input
                type="checkbox"
                className="form__input"
                value={PayMethod.CARD}
                {...register('pay_method', { required: true })}
              />
            </label>
          </div>
        </ControlWrapper>
        <ControlWrapper label="Brand" error={undefined}>
          <select {...register('brand')}>
            {brandOptions.map((brand) => {
              return (
                <option key={brand.value} value={brand.value}>
                  {brand.name}
                </option>
              );
            })}
          </select>
        </ControlWrapper>
        <ControlWrapper label="Category" error={undefined}>
          <select {...register('category')}>
            {categotiesOptions.map((category) => {
              return (
                <option key={category.value} value={category.value}>
                  {category.name}
                </option>
              );
            })}
          </select>
        </ControlWrapper>
      </div>
      <button type="submit" disabled={isSubmitting}>
        {btnText}
      </button>
    </form>
  );
};

export default Form;
