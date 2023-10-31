import { User } from 'devflikrauth';
import React from 'react';

export interface FullNamerProps extends React.HTMLAttributes<HTMLSpanElement> {
    user: User;

}
function FullNamer({ user, ...props }: FullNamerProps) {
    return (
        <span className="" {...props}>{`${user.firstname} ${user.lastname || ""}`.trim()}</span>
    );
}

export default FullNamer;