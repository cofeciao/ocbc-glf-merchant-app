import { GridItemsAlignment } from '@material-ui/core';
import React from 'react';

declare namespace IReviewSubmit {
    export interface IReviewSubmitProps {
        handleResetCallAPI: any, 
        ref: any;
        children: any;
        setLoading?:  () => void;
        setDataError: (value: any) => void;
        openDialog?: () => void;
    }
}


export { IReviewSubmit };