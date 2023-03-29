import React from 'react';

interface CustomInputState {
  value: string;
}
class CustomInput extends React.Component<Record<string, never>, CustomInputState> {
  state = { value: localStorage.getItem('value') !== null ? localStorage.getItem('value')! : '' };
  onChanged(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    this.setState({ ...this.state, value });
  }

  async componentDidMount() {
    window.addEventListener('beforeunload', this.saveInputValue.bind(this));
  }
  componentWillUnmount(): void {
    this.saveInputValue();
    window.removeEventListener('beforeunload', this.saveInputValue.bind(this));
  }

  saveInputValue() {
    localStorage.setItem('value', this.state.value);
  }
  render() {
    return (
      <div className="input-search">
        <input
          type="text"
          placeholder="Найти товар"
          value={this.state.value}
          onChange={this.onChanged.bind(this)}
          className="input-search__input"
        />
        <span className="input-search__btn"></span>
      </div>
    );
  }
}

export default CustomInput;
