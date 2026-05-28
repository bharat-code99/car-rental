import { useState, useRef, useEffect } from "react";

type OptionsType = {
  value: string;
  label: string;
};

type PropType = {
  label: string;
  value: string;
  onUpdate: (val: string) => void;
  required: boolean;
  options: OptionsType[];
};

export default function SelectInput({ label, value, onUpdate, options }: PropType) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [open]);

  const handleOptionClick = (val: string) => {
    onUpdate(val);
    setOpen(false);
  };

  return (
    <div className="flex flex-col w-full">
      <label>{label}</label>
      <div ref={ref} className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="w-full px-3 py-2 mt-1 border border-borderColor rounded-md outline-none transition-all duration-300 hover:shadow-xs hover:shadow-borderColor text-left bg-white"
        >
          {value || "Select an option"}
        </button>
        {open && (
          <div className="absolute top-full left-0 right-0 border border-borderColor bg-white z-10">
            {options.map((option, idx) => (
              <div
                className="w-full px-3 py-2 border-b border-borderColor hover:bg-gray-100 cursor-pointer"
                key={idx}
                onClick={() => handleOptionClick(option.value)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
