/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/lib/utils";
import React from "react";
import { Field, FieldRenderProps } from "react-final-form";
import { FormApi } from "final-form";

interface InputProps {
  label?: string;
  name: string;
  type: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  form: FormApi<any, Partial<any>>;
  id?: string;
}

const Input: React.FC<InputProps> = ({
  // label,
  name,
  type,
  placeholder,
  className,
  form,
  disabled = false,
  id
}) => {
  return (
    <div className="flex flex-col w-full">
      <Field name={name}>
        {({ input }: FieldRenderProps<string, HTMLInputElement>) => (
          <input
            {...input}
            type={type}
            name={name}
            placeholder={placeholder}
            className={cn(
              "w-full px-4 py-3 text-gray-700 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 ring-0 outline-none ",
              className
            )}
            disabled={disabled}
            id={id}
          />
        )}
      </Field>
      {form.getState().submitFailed && form.getState().errors?.[name] && (
        <small className="text-red-600 text-start">
          {form.getState().errors?.[name] ?? ""}
        </small>
      )}
    </div>
  );
};

export default Input;
