import React from 'react';

export const Alert = ({alert}) => {

    if (!alert) return null;

    return (
        <div className={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
            {alert.text}
            <strong>Внимание!</strong>
            <button type="button" className="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    );
};