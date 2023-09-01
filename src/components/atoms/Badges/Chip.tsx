interface ChipProps {
    children: React.ReactNode;
}

const Chip = ({ children }: ChipProps) => {
    return (
        <div className="px-2 w-fit rounded-[16px] bg-base-200  text-base-content font-normal leading-loose block">
            {children}
        </div>
    );
};

export { Chip };
