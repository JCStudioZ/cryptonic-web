import * as React from 'react';
import cn from 'classnames';

type FormInputProps = {
  label?: string;
  variant?: 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
  size?: 'large' | 'medium' | 'small' | 'extra-small';
  isBordered?: boolean;
  isGhost?: boolean;
  containerClassName?: String;
  inputClassName?: String;
} & React.InputHTMLAttributes<HTMLInputElement>;

const FormInput: React.FC<FormInputProps> = ({
  label,
  variant,
  size,
  isBordered,
  isGhost,
  containerClassName,
  inputClassName,
  ...rest
}) => {
  const inputClass = cn({
    input: true,
    'input-primary': variant == 'primary',
    'input-secondary': variant == 'secondary',
    'input-accent': variant == 'accent',
    'input-info': variant == 'info',
    'input-success': variant == 'success',
    'input-warning': variant == 'warning',
    'input-error': variant == 'error',
    'input-lg': size == 'large',
    'input-md': size == 'medium',
    'input-sm': size == 'small',
    'input-xs': size == 'extra-small',
    'input-ghost': isGhost,
    'input-bordered': isBordered,
  });

  return (
    <div className={cn('form-control', containerClassName)}>
      {label && (
        <label className="label">
          <span className="label-text">Username</span>
        </label>
      )}
      <input className={cn(inputClass, inputClassName)} {...rest} />
    </div>
  );
};

export default FormInput;
