import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {blue} from "@mui/material/colors";

interface LinkButtonProps {
    text: string,
    image: string
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: 24,
};


const LinkButton: React.FC<LinkButtonProps> = ({text, image}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <code className={"font-light text-blue-400 underline"}
                  onClick={handleOpen}
                  style={{cursor: "pointer"}}
            >{text}
            </code>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...style, minWidth: "35%", maxWidth: "50%" }}>
                    <img src={image}  alt={text} style={{width: "100%", height: "100%"}}/>
                </Box>
            </Modal>
        </>
    );
}

export default LinkButton;