import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const ShowData = ({ item, onSelect,handleUpdate }) => {
  return (
    <>
      <li className="list">
        <Button
          variant="contained"
          style={{ marginRight: "5px" }}
          onClick={() => {
            onSelect(item._id);
          }}
        >
          {" "}
          x{" "}
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            handleUpdate(item._id);
          }}
          title="Update"
        >
          {" "}
          ✎{" "}
        </Button>
        <TextField
          style={{ marginLeft: "10px" }}
          InputProps={{
            readOnly: true,
          }}
          fullWidth
          multiline
          defaultValue={item.data}
        />
      </li>
      <hr />
    </>
  );
};

export default ShowData;
