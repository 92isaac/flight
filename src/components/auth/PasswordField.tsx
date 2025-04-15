import React from "react";
import { Field } from "react-final-form";
import { FormApi } from "final-form";
import { cn } from "@/lib/utils";
import { Eye, EyeClosed } from "lucide-react";

interface PasswordFieldProps {
  id: string;
  eyeState: boolean;
  toggleEye: () => void;
  placeholder: string;
  name: string;
  className?: string;
  form: FormApi;
  onFocus?: () => void;
  onBlur?: () => void;
  eye?: React.ReactNode;
}

const PasswordField: React.FC<PasswordFieldProps> = ({
  id,
  eyeState,
  toggleEye,
  placeholder,
  name,
  form,
  onFocus,
  onBlur,
  eye,
  className,
}) => {
  return (
    <div className="relative flex flex-col">
      <Field
        id={id}
        type={eyeState ? "text" : "password"}
        name={name}
        component="input"
        className={cn(
          "w-full px-4 py-3 text-gray-700 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500",
          className
        )}
        placeholder={placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {form.getState().submitFailed && form.getState().errors?.[name] && (
        <small className="text-red-600 text-start">
          {form.getState().errors?.[name]}
        </small>
      )}

      <div
        className="text-primary-gray absolute top-4 right-8 hover:cursor-pointer"
        onClick={toggleEye}
      >
        {eyeState ? <Eye size={20} /> : <EyeClosed size={20} />}
      </div>
      <div
        className={`text-red-500 absolute top-14 right-2 hover:cursor-pointer`}
        onClick={toggleEye}
      >
        {eye}
      </div>
    </div>
  );
};

export default PasswordField;
