import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <button className="btn btn-primary normal-case text-white font-Inter from-secondary to-primary">{children}</button>
    );
};

export default PrimaryButton;