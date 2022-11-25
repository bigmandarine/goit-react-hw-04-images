import { useState } from 'react';
import { Form, InputWrapper, Button, Input, Header } from './Searchbar.styled';
import { BiSearch } from 'react-icons/bi';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

export default function Searchbar({ onSubmitSearch }) {
  const [value, setValue] = useState('');

  const handleChange = evt => {
    setValue(evt.target.value);
  };
  const onSubmit = evt => {
    evt.preventDefault();
    if (value.length <= 0) {
      toast.error('Please enter search name!', {
        autoClose: 1500,
      });
    } else {
      onSubmitSearch(value);
    }
  };

  return (
    <Header>
      <Form onSubmit={onSubmit}>
        <InputWrapper>
          <Button type="submit">
            <BiSearch size={25} />
          </Button>
          <Input
            className="input"
            type="text"
            autoComplete="off"
            onChange={handleChange}
            value={value}
            placeholder="Search images and photos"
            autoFocus
          ></Input>
        </InputWrapper>
      </Form>
    </Header>
  );
}

Searchbar.propTypes = {
  onSubmitSearch: PropTypes.func.isRequired,
};
