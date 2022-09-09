import React, { Fragment } from 'react'
import { UploadContainer } from './Upload';


const Upload = () => {

    const [open, setOpen] = React.useState(true);


    try {

        const onClose = () => {
            setOpen(false);
        }
        const handleOpen = () => {
            setOpen(true);
        }


        return (

            <Fragment>
                <UploadContainer
                    onClose={onClose}
                    open={open}
                    handleOpen={handleOpen}
                />
            </Fragment>
        )
    }
    catch {
        console.log('error');
    }

}

export default Upload;