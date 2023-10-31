import React from 'react';
import { useDocumentTitle } from 'react-unique-hooks';

function PersonalInfoPage() {

    useDocumentTitle("Personal Info");

    return (
        <div>PersonalInfoPage</div>
    );
}

export default PersonalInfoPage;