import React from 'react';
// reactstrap
import { Spinner } from 'reactstrap';

export default function LoadingComponent(props) {
    return (
        <div className="centering-spinner">
            <Spinner type="grow" color="primary" />
            {' '}
            <Spinner type="grow" color="primary" />
            {' '}
            <Spinner type="grow" color="primary" />
        </div>
    )
}