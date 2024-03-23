import { useDispatch } from "react-redux";
import css from "./SearchBox.module.css";
import { useId } from "react";
import { changeFilter } from "../redux/filtersSlice";


const SearchBox = () => {
  const findInputId = useId();
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.findContactForm}>
      <label className={css.findContactName} htmlFor={findInputId}>
        Find contacts by name
      </label>
      <input
        onChange={handleSearch}
        autoComplete="on"
        id={findInputId}
        className={css.findContactInput}
        type="text"
      />
    </div>
  );
};

export default SearchBox;
