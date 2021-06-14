import * as React from 'react';
import cn from 'classnames';

type FormSelectProps = {
  label?: string;
  placeholder?: string;
  variant?: 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
  selectSize?: 'large' | 'medium' | 'small' | 'extra-small';
  isBordered?: boolean;
  isGhost?: boolean;
  containerClassName?: String;
  selectClassName?: String;
  data: OptionItem[];
  value?: string;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

interface OptionItem {
  value: string;
  label: string;
}

const FormSelect: React.FC<FormSelectProps> = ({
  label,
  variant,
  selectSize,
  isBordered,
  isGhost,
  containerClassName,
  selectClassName,
  placeholder = 'Select',
  data,
  value,
  onChange,
  ...rest
}) => {
  const [selectedValue, setSelectedValue] = React.useState<string>('');

  React.useEffect(() => {
    if (value) {
      setSelectedValue(value);
    }
  }, [value]);

  const selectClass = cn({
    select: true,
    'select-primary': variant == 'primary',
    'select-secondary': variant == 'secondary',
    'select-accent': variant == 'accent',
    'select-info': variant == 'info',
    'select-success': variant == 'success',
    'select-warning': variant == 'warning',
    'select-error': variant == 'error',
    'select-lg': selectSize == 'large',
    'select-md': selectSize == 'medium',
    'select-sm': selectSize == 'small',
    'select-xs': selectSize == 'extra-small',
    'select-ghost': isGhost,
    'select-bordered': isBordered,
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value);
    onChange && onChange(e);
  };

  return (
    <div className={cn('form-control', containerClassName)}>
      {label && (
        <label className="label">
          <span className="label-text">{label}</span>
        </label>
      )}
      <select value={selectedValue} className={cn(selectClass, selectClassName)} onChange={handleOnChange} {...rest}>
        <option disabled={true} value="">
          {placeholder}
        </option>
        {data.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormSelect;
