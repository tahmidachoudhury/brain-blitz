import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

const SearchBar = () => (
  <form>
    <TextField
      id="search-bar"
      className="text"
      label="Find a friend"
      variant="outlined"
      placeholder="Boris123"
      size="small"
    />
    <IconButton
      type="submit"
      aria-label="search"
      sx={{ display: { xs: "none", lg: "inline" } }}
    >
      <SearchIcon style={{ fill: "blue" }} />
    </IconButton>
  </form>
);

export default SearchBar;
