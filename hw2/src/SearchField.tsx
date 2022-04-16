import { ChangeEvent } from "react";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

type SearchProps = {
  value: string;
  handleChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

const SearchField = ({ value, handleChange }: SearchProps) => {
  return (
    <FormControl variant="outlined" fullWidth>
      <InputLabel htmlFor="search-text-field">Search</InputLabel>
      <OutlinedInput
        id="search-text-field"
        type="text"
        value={value}
        onChange={(e) => handleChange(e)}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        label="Text"
      />
    </FormControl>
  );
};

export default SearchField;
