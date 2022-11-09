import React, { ChangeEvent, FC, ReactNode, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { useDebounce } from "../../hooks/useDebounce";
import { setInputValue } from "../../store/properties/propertiesSlice";
import { InputContainer, StyledInput } from "./styles";

type InputProps = {
  placeholder: string;
  color: "primary" | "secondary" | "tertiary";
  icon?: ReactNode;
};

export const Input: FC<InputProps> = ({ placeholder, color, icon }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { inputValue } = useSelector((state: RootState) => state.properties);
  const [filterTerm, setFilterTerm] = useState(inputValue);
  const delay = 500;
  const debouncedFilterTerm = useDebounce(filterTerm, delay);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilterTerm(event.target.value);
  };

  useEffect(() => {
    dispatch(setInputValue(debouncedFilterTerm));
  }, [dispatch, debouncedFilterTerm]);

  return (
    <InputContainer>
      {icon}
      <StyledInput
        type="text"
        value={filterTerm}
        onChange={handleChange}
        placeholder={placeholder}
        size={8}
        color={color}
      />
    </InputContainer>
  );
};
