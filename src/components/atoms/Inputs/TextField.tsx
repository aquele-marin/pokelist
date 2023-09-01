import { twJoin } from "tailwind-merge";

interface TextFieldProps {
    placeholder: string;
    // error: boolean;
    label?: string;
    className?: string;
    fullWidth?: boolean;
    variant?: keyof typeof TEXT_FIELD_VARIANTS;
    size?: keyof typeof TEXT_FIELD_SIZES;
    disabled?: boolean;
    required?: boolean;
    // helperText?: string;
    type?: "text" | "password" | "email";
    minLength?: number;
}

const TEXT_FIELD_VARIANTS = {
    primary: "input input-bordered" as const,
    secondary: "input input-bordered input-secondary w-full" as const,
    accent: "input input-bordered input-accent w-full" as const,
    info: "input input-bordered input-info w-full" as const,
    success: "input input-bordered input-success w-full" as const,
    warning: "input input-bordered input-warning w-full" as const,
    error: "input input-bordered input-error w-full" as const,
};

const TEXT_FIELD_SIZES = {
    xs: "input-xs" as const,
    sm: "input-sm" as const,
    md: "input-md" as const,
    lg: "input-lg" as const,
};

const TEXT_FIELD_WIDTHS = {
    xs: "max-w-xs" as const,
    sm: "max-w-sm" as const,
    md: "max-w-md" as const,
    lg: "max-w-lg" as const,
};

function TextField({
    placeholder,
    label,
    className,
    variant = "primary",
    fullWidth = false,
    disabled = false,
    size = "md",
    type = "text",
    required = false,
    minLength,
}: TextFieldProps) {
    const Label = () => (
        <label className="label">
            <span className="label-text">{label}</span>
        </label>
    );

    return (
        <div className={twJoin("form-control", fullWidth && "w-full")}>
            <Label />
            <input
                disabled={disabled}
                required={required}
                minLength={minLength}
                type={type}
                placeholder={placeholder}
                className={twJoin(
                    TEXT_FIELD_VARIANTS[variant],
                    TEXT_FIELD_SIZES[size],
                    !fullWidth && TEXT_FIELD_WIDTHS[size],
                    className
                )}
            />
        </div>
    );
}

export { TextField };
