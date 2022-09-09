import { Button } from '@mui/material'
import { Box } from '@mui/system';
import React, { Fragment } from 'react'

import myStyles from '../css';
import { DropzoneDialog } from 'material-ui-dropzone';




export const UploadContainer = (props) => {
    const {
        open,
        onClose,
        handleOpen,
    } = props;
    return (
        <Fragment>
            <div>
                <Button variant="contained" color="primary" onClick={handleOpen}>
                    Add Image
                </Button>

                <DropzoneDialog
                    acceptedFiles={['image/*']}
                    cancelButtonText={"cancel"}
                    submitButtonText={"submit"}
                    maxFileSize={5000000}
                    open={open}
                    onClose={() => onClose()}
                    onSave={(files) => {
                        console.log('Files:', files);
                        onClose();
                    }
                    }
                    showPreviews={true}
                    showFileNamesInPreview={true}
                />
            </div>
        </Fragment >
    )
}
