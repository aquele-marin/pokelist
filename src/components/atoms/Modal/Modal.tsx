import { Modal } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface ModalComponentProps {
    open: boolean;
    handleClose: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void;
    children: React.ReactNode;
}

export function ModalComponent({
    open,
    handleClose,
    children,
}: ModalComponentProps) {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className="grid gap-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-md  shadow-lg p-4">
                {children}
            </Box>
        </Modal>
    );
}

interface ModalContentProps {
    children: React.ReactNode;
}

export function ModalContent({ children }: ModalContentProps) {
    return <Box>{children}</Box>;
}

interface ModalTitleProps {
    children: React.ReactNode;
}

export function ModalTitle({ children }: ModalTitleProps) {
    return (
        <Typography id="modal-modal-title" variant="h4" component="h2">
            {children}
        </Typography>
    );
}

interface ModalMediaProps {
    url: string;
}

export function ModalMedia({ url }: ModalMediaProps) {
    return (
        <img
            src={url}
            alt="modal-image"
            className="w-64 h-full object-contain bg-gray-200 rounded-lg"
        />
    );
}

interface ModalButtonsProps {
    children: React.ReactNode;
}

export function ModalButtons({ children }: ModalButtonsProps) {
    return <Box className=" flex justify-end col-span-2">{children}</Box>;
}

interface ModalDescriptionProps {
    children: React.ReactNode;
}

export function ModalDescription({ children }: ModalDescriptionProps) {
    return (
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {children}
        </Typography>
    );
}
