import React from 'react';
import ControlWrapper from './UI/ControlWrapper';
import { CartItem, INSTOCK, PayMethod } from '../types';
import { v4 as uuid } from 'uuid';

interface Elements {
  form: React.RefObject<HTMLFormElement>;
  title: React.RefObject<HTMLInputElement>;
  rating: React.RefObject<HTMLInputElement>;
  img: React.RefObject<HTMLInputElement>;
  date: React.RefObject<HTMLInputElement>;
  price: React.RefObject<HTMLInputElement>;
  brand: React.RefObject<HTMLSelectElement>;
  category: React.RefObject<HTMLSelectElement>;
  in_stock: React.RefObject<HTMLInputElement>[];
  payMethod: React.RefObject<HTMLInputElement>[];
}

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

interface FormState {
  errors: {
    title: boolean;
    rating: boolean;
    image: boolean;
    price: boolean;
    pay_method: boolean;
    in_stock: boolean;
  };
  isSubmiting: boolean;
}

class Form extends React.Component<FormProps> {
  state: FormState;
  el: Elements;
  constructor(props: FormProps) {
    super(props);
    this.state = {
      errors: {
        title: false,
        rating: false,
        image: false,
        price: false,
        pay_method: false,
        in_stock: false,
      },
      isSubmiting: false,
    };

    this.el = {
      form: React.createRef<HTMLFormElement>(),
      title: React.createRef<HTMLInputElement>(),
      rating: React.createRef<HTMLInputElement>(),
      img: React.createRef<HTMLInputElement>(),
      date: React.createRef<HTMLInputElement>(),
      price: React.createRef<HTMLInputElement>(),
      brand: React.createRef<HTMLSelectElement>(),
      category: React.createRef<HTMLSelectElement>(),
      in_stock: [React.createRef<HTMLInputElement>(), React.createRef<HTMLInputElement>()],
      payMethod: [React.createRef<HTMLInputElement>(), React.createRef<HTMLInputElement>()],
    };
  }

  checkErrors() {
    const errors = {
      title: !(this.el.title.current && this.el.title.current.value.trim().length !== 0),
      rating: !(this.el.rating.current && +this.el.rating.current.value.trim()),
      image: !(
        this.el.img.current &&
        this.el.img.current.files &&
        this.el.img.current.files.length > 0 &&
        this.el.img.current.files[0].type.includes('image')
      ),
      price: !(this.el.price.current && +this.el.price.current.value.trim()),
      pay_method: !(
        [...this.el.payMethod.filter((item) => item.current && item.current.checked)].length > 0
      ),
      in_stock: !(
        [...this.el.in_stock.filter((item) => item.current && item.current.checked)].length > 0
      ),
    };
    this.setState({
      ...this.state,
      errors,
    });
    return Object.values(errors).filter((item) => item).length > 0;
  }

  onSumbitHandler(e: React.SyntheticEvent): void {
    e.preventDefault();
    this.setState({ ...this.state, isSubmiting: true });
    const error = this.checkErrors();
    if (!error) {
      console.log('no-error');
      console.log(this.el);
      const unique_id = uuid();
      const small_id = unique_id.slice(0, 8);
      const card: CartItem = {
        id: small_id,
        title: this.el.title.current!.value,
        rating: +this.el.rating.current!.value,
        price: +this.el.price.current!.value,
        thumbnail: URL.createObjectURL(this.el.img.current!.files![0]),
        brand: this.el.brand.current!.value,
        category: this.el.category.current!.value,
        in_stock: +this.el.in_stock
          .filter((item) => item.current && item.current.checked)
          .map((item) => item.current!.value)[0],
        pay_method: [
          ...this.el.payMethod
            .filter((item) => item.current && item.current.checked)
            .map((item) => item.current!.value as PayMethod),
        ],
      };

      if (this.el.date.current?.value) {
        card.date = new Date(this.el.date.current!.value);
      }
      this.props.onSubmit(card);
      this.el.form.current && this.el.form.current.reset();
    }
  }
  render() {
    const { errors, isSubmiting } = this.state;
    return (
      <form className="form" ref={this.el.form} onSubmit={this.onSumbitHandler.bind(this)}>
        <div className="form__inner">
          <ControlWrapper label="Title" error={errors.title} errorText="Проверьте данные">
            <input type="text" name="title" className="form__input" ref={this.el.title} />
          </ControlWrapper>
          <ControlWrapper label="Rating" error={errors.rating} errorText="Проверьте данные">
            <input type="text" name="rating" className="form__input" ref={this.el.rating} />
          </ControlWrapper>
          <ControlWrapper label="Price" error={errors.rating} errorText="Проверьте данные">
            <input type="text" className="form__input" ref={this.el.price} />
          </ControlWrapper>
          <ControlWrapper label="Image" error={errors.rating} errorText="Проверьте данные">
            <input type="file" className="form__input" ref={this.el.img} />
          </ControlWrapper>
          <ControlWrapper label="Date" error={false}>
            <input type="date" className="form__input" ref={this.el.date} />
          </ControlWrapper>
          <ControlWrapper label="In stock?" error={errors.in_stock} errorText="Поле обязательно">
            <div>
              <label>
                YES
                <input
                  type="radio"
                  className="form__input"
                  name="in_stock"
                  ref={this.el.in_stock[0]}
                  value={INSTOCK.YES}
                />
              </label>
              <label>
                NO
                <input
                  type="radio"
                  className="form__input"
                  name="in_stock"
                  value={INSTOCK.NO}
                  ref={this.el.in_stock[1]}
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
                  name="pay"
                  value={PayMethod.CASH}
                  ref={this.el.payMethod[0]}
                />
              </label>
              <label>
                Card
                <input
                  type="checkbox"
                  className="form__input"
                  name="pay"
                  value={PayMethod.CARD}
                  ref={this.el.payMethod[1]}
                />
              </label>
            </div>
          </ControlWrapper>
          <ControlWrapper label="Brand" error={false}>
            <select ref={this.el.brand}>
              {brandOptions.map((brand) => {
                return (
                  <option key={brand.value} value={brand.value}>
                    {brand.name}
                  </option>
                );
              })}
            </select>
          </ControlWrapper>
          <ControlWrapper label="Category" error={false}>
            <select ref={this.el.category}>
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
        <button type="submit" disabled={isSubmiting}>
          Create
        </button>
      </form>
    );
  }
}

export default Form;
