import React from "react";
import {
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from "reactstrap";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div>
      <Form>
        <InputGroup className="my-2">
          <Input
            className="search-bar"
            name="search"
            type="search"
            placeholder="Title /Author /ISBN"
          />
          <InputGroupAddon addonType="append">
            <InputGroupText className="clear-colour">
              {" "}
              <FaSearch className="d-inline m-1" />
            </InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </Form>
    </div>
  );
};

export default SearchBar;
