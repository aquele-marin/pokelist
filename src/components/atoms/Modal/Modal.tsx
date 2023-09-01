import { Modal as MuiModal } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface ModalComponentProps {
    open: boolean;
    handleClose: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void;
    children: React.ReactNode;
}

const Modal = ({ open, handleClose, children }: ModalComponentProps) => {
    return (
        <MuiModal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className="grid gap-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-base-100 rounded-md  shadow-lg p-4 dark:bg-neutral-800">
                {children}
            </Box>
        </MuiModal>
    );
};

interface ModalContentProps {
    children: React.ReactNode;
}

Modal.Content = ({ children }: ModalContentProps) => {
    return <Box>{children}</Box>;
};

interface ModalTitleProps {
    children: React.ReactNode;
}

Modal.Title = ({ children }: ModalTitleProps) => {
    return (
        <Typography id="modal-modal-title" variant="h4" component="h2">
            {children}
        </Typography>
    );
};

interface ModalMediaProps {
    url: string;
}

Modal.Media = ({ url }: ModalMediaProps) => {
    return (
        <img
            src={url}
            alt="modal-image"
            className="w-64 h-full object-contain bg-base-200 rounded-lg"
        />
    );
};

interface ModalButtonsProps {
    children: React.ReactNode;
}

Modal.Buttons = ({ children }: ModalButtonsProps) => {
    return <Box className=" flex justify-end col-span-2">{children}</Box>;
};

interface ModalDescriptionProps {
    children: React.ReactNode;
}

Modal.Description = ({ children }: ModalDescriptionProps) => {
    return (
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {children}
        </Typography>
    );
};

export { Modal };
