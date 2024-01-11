import { type PropsWithChildren } from 'react';
import { Albert_Sans } from 'next/font/google';

import '~styles/global.css';

const AlbertSansFont = Albert_Sans({
    subsets: ['latin'],
});

const RootLayout = ({ children }: PropsWithChildren) => {
    return (
        <html className={AlbertSansFont.className}>
            <body className="overflow-hidden bg-neutral-950 text-white">
                <div className="h-screen w-full">{children}</div>
            </body>
        </html>
    );
};

export default RootLayout;
