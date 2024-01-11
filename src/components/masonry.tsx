'use client';

import { useRef } from 'react';
import Image from 'next/image';

const images = [
    'image-1.png',
    'image-2.png',
    'image-3.png',
    'image-4.png',
    'image-5.png',
    'image-6.png',
    'image-7.png',
    'image-8.png',
    'image-9.png',
    'image-10.png',
];

const columns: string[][] = [
    [images[0], images[1], images[5], images[6]],
    [images[2], images[3], images[7], images[8]],
    [images[4], images[5], images[1], images[2]],
    [images[8], images[9], images[3], images[4]],
];

const Masonry = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    return (
        <div ref={containerRef} className="flex h-screen w-full -rotate-3 gap-8">
            {columns.map((column, columnIndex) => {
                return (
                    <div key={columnIndex} className="flex flex-col gap-8">
                        {column.map(image => {
                            return (
                                <Image
                                    alt="Masonry image"
                                    key={image}
                                    src={`/assets/images/${image}`}
                                    className="w-full object-cover"
                                    width={444}
                                    height={555}
                                />
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};

export default Masonry;
