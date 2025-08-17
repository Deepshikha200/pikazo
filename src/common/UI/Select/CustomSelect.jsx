import Select from "react-select";
import "./CustomSelect.scss";

const CustomSelect = ({
  className,
  menuIsOpen,
  defaultValue,
  onChange,
  options,
  name,
  isMulti,
  value,
  isClearable,
  onMenuScrollToBottom,
  placeholder,
  filterOption,
  isSearchable,
  closeMenuOnSelect,
}) => {
  return (
    <div className="customInput_inner">
      <Select
        defaultValue={defaultValue}
        onChange={onChange}
        options={options}
        value={value}
        className={`common_select ${className}`}
        classNamePrefix="select"
        menuIsOpen={menuIsOpen}
        placeholder={placeholder}
        name={name}
        isMulti={isMulti}
        isClearable={isClearable}
        onMenuScrollToBottom={onMenuScrollToBottom}
        filterOption={filterOption}
        closeMenuOnSelect={closeMenuOnSelect}
        isSearchable={isSearchable}
      />
    </div>
  );
};

export default CustomSelect;
