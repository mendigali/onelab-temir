import { ChangeEvent } from "react";
import { Box, Button, TextField } from "@mui/material";

type AddFieldProps = {
  value: string;
  handleButtonClick: () => void;
  handleChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

const AddField = ({
  value,
  handleButtonClick,
  handleChange,
}: AddFieldProps) => {
  return (
    <>
      <TextField
        id="outlined-basic"
        label="New todo item"
        variant="filled"
        fullWidth
        value={value}
        onChange={(e) => handleChange(e)}
      />
      <Box mt={2}>
        <Button
          variant="contained"
          size="large"
          fullWidth
          onClick={handleButtonClick}
        >
          Add new item
        </Button>
      </Box>
    </>
  );
};

export default AddField;
