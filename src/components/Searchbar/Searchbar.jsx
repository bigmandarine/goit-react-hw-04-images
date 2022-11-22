import { Component } from 'react';
import { Form, InputWrapper, Button, Input, Header } from './Searchbar.styled';
import { BiSearch } from 'react-icons/bi';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

class Searchbar extends Component {
  state = {
    value: '',
  };

  handleChange = evt => {
    this.setState({ value: evt.target.value });
  };
  onSubmit = evt => {
    evt.preventDefault();
    if (this.state.value.length <= 0) {
      toast.error('Please enter search name!', {
        autoClose: 1500,
      });
    } else {
      this.props.onSubmit(this.state.value);
    }
  };
  render() {
    const { value } = this.state;
    return (
      <Header>
        <Form onSubmit={this.onSubmit}>
          <InputWrapper>
            <Button type="submit">
              <BiSearch size={25} />
            </Button>
            <Input
              className="input"
              type="text"
              autoComplete="off"
              onChange={this.handleChange}
              value={value}
              placeholder="Search images and photos"
              autoFocus
            ></Input>
          </InputWrapper>
        </Form>
      </Header>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
