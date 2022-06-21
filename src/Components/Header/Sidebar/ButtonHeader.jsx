import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Button_Header() {
    return (
        <Stack direction="row" spacing={2}>
            <Button variant="contained" sx={ { borderRadius: 28, backgroundColor: "#FFFFFF" , color:"black", '&:hover': {background: "lightgrey"},} } startIcon={<AccountCircleIcon />}>
                Delete
            </Button>
            <Button variant="contained" sx={ { borderRadius: 28, backgroundColor: "black",'&:hover': {background:"grey"}}}>
                Inscription
            </Button>
        </Stack>
    );
}
