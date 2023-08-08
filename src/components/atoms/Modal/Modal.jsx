import { Modal } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export function ModalComponent({ open, handleClose, children }) {
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

export function ModalContent({ children }) {
    return <Box>{children}</Box>;
}

export function ModalTitle({ children }) {
    return (
        <Typography id="modal-modal-title" variant="h4" component="h2">
            {children}
        </Typography>
    );
}

export function ModalMedia({ url }) {
    return (
        <img
            src={url}
            alt="modal-image"
            className="w-64 h-full object-contain bg-gray-200 rounded-lg"
        />
    );
}

export function ModalButtons({ children }) {
    return <Box className=" flex justify-end col-span-2">{children}</Box>;
}

export function ModalDescription({ children }) {
    return (
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {children}
        </Typography>
    );
}
