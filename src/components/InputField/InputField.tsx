import { cn } from "@/lib/utils";
import { Field, FieldError, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";

type TInputFieldProps = {
  value: string | number;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  required?: boolean;
  type?: "number" | "text";
  errorMessage?: string;
  containerClassName?: string;
  inputClassName?: string;
};

export const InputField = ({
  value,
  onChange,
  label,
  required,
  type = "text",
  errorMessage,
  containerClassName,
  inputClassName,
}: TInputFieldProps) => {
  return (
    <Field className={cn("flex flex-col gap-1 w-full", containerClassName)}>
      {label && (
        <FieldLabel>
          {label} {required && <span className="text-destructive">*</span>}
        </FieldLabel>
      )}
      <Input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn("w-full", inputClassName)}
        {...(errorMessage ? { "aria-invalid": true } : {})}
      />
      {errorMessage && <FieldError>{errorMessage}</FieldError>}
    </Field>
  );
};
