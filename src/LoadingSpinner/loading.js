import { Modal } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import "./spinner.css";

export const Loading = (props) => {
    const {
        openLoading
    } = props;
    return (
        <Modal
            open={openLoading}
            id="modal-error"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
            <Box>
                <div className="spinner-container">
                    <div className="loading-spinner">
                    </div>
                </div>
            </Box>

        </Modal>

    )
}
