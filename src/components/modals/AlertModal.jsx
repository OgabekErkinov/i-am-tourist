import { Alert, Snackbar } from '@mui/material';
import React from 'react';
import useStore from '../../Store/store';

const AlertModal = () => {
    const isAlert = useStore(state => state.isAlert);
    const alertSeverity = useStore(state => state.alertSeverity);
    const alertMessage = useStore(state => state.alertMessage);
    const toggleAlert = useStore(state => state.toggleAlert);

    return (
        <Snackbar 
            open={isAlert} 
            autoHideDuration={3000} 
            onClose={() => toggleAlert(false)} 
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
            <Alert onClose={() => toggleAlert(false)} severity={alertSeverity} sx={{ width: "100%" }}>
                {alertMessage}
            </Alert>
        </Snackbar>
    );
};

export default AlertModal;
