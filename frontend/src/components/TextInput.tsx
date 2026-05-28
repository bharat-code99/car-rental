import type { ChangeEvent } from "react";

type InputProps = {
  label: string;
  type: string;
  placeholder?: string;
  required: boolean;
  value: string;
  onUpdate: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function TextInput({
  label,
  type,
  placeholder,
  required=false,
  value,
  onUpdate,
}: InputProps) {
  return (
    <div className="flex flex-col w-full">
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onUpdate}
        className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none transition-all duration-300 focus:shadow-xs focus:shadow-borderColor"
      />
    </div>
  );
}
