import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

type Anchor = "top" | "left" | "bottom" | "right";

// TOGGLEDRAWER FUNCTION
// const toggleDrawer =
//         (open: boolean) =>
//         (event: React.KeyboardEvent | React.MouseEvent) => {
//             if (
//                 event.type === "keydown" &&
//                 ((event as React.KeyboardEvent).key === "Tab" ||
//                     (event as React.KeyboardEvent).key === "Shift")
//             ) {
//                 return;
//             }

//             setOpen(open);
//         };

interface TemporaryDrawerProps {
    side: Anchor;
    toggleDrawer: (
        open: boolean
    ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
    open: boolean;
}

export function TemporaryDrawer({
    side,
    toggleDrawer,
    open,
}: TemporaryDrawerProps) {
    const list = (anchor: Anchor) => (
        <Box
            sx={{
                width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
            }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {["Inbox", "Starred", "Send email", "Drafts"].map(
                    (text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? (
                                        <InboxIcon />
                                    ) : (
                                        <MailIcon />
                                    )}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    )
                )}
            </List>
            <Divider />
            <List>
                {["All mail", "Trash", "Spam"].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Drawer anchor={side} open={open} onClose={toggleDrawer(false)}>
            {list(side)}
        </Drawer>
    );
}
