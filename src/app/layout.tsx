import {PropsWithChildren} from 'react';

import './styles.css';

function RootLayout({children}: PropsWithChildren) {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    );
}

export default RootLayout;
