export const InputGroup = ({
  htmlFor,
  type,
  id,
  placeholder,
  required,
  value,
  onChange,
  title,
}) => {
  return (
    <div className="input-group">
      <label htmlFor={htmlFor}>{title}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
