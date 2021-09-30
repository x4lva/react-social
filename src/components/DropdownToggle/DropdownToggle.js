import React from "react";

export const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <div className="d-flex align-items-center"
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
    >
        {children}
    </div>
));