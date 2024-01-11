'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
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

const startingPixels = [0, -200, -100, -300];

const Masonry = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const firstColumnRef = useRef<HTMLDivElement>(null);
    const secondColumnRef = useRef<HTMLDivElement>(null);
    const thirdColumnRef = useRef<HTMLDivElement>(null);
    const fourthColumnRef = useRef<HTMLDivElement>(null);
    const refs = [firstColumnRef, secondColumnRef, thirdColumnRef, fourthColumnRef] as const;

    useEffect(() => {
        // Scrolling effect on every column infinitely
        gsap.to(firstColumnRef.current, {
            ease: 'none',
            y: '50%',
            duration: 8,
            repeat: -1,
        });
        gsap.to(secondColumnRef.current, {
            ease: 'none',
            y: '50%',
            duration: 8,
            repeat: -1,
        });
        gsap.to(thirdColumnRef.current, {
            ease: 'none',
            y: '50%',
            duration: 8,
            repeat: -1,
        });
        gsap.to(fourthColumnRef.current, {
            ease: 'none',
            y: '50%',
            duration: 8,
            repeat: -1,
        });
    }, []);

    return (
        <div ref={containerRef} className="flex h-screen w-full -rotate-3 gap-12">
            {columns.map((column, columnIndex) => {
                return (
                    <div
                        key={columnIndex}
                        ref={refs[columnIndex]}
                        className="flex flex-col gap-12"
                        style={{
                            transform: `translateY(calc(-100% + ${startingPixels[columnIndex]}px))`,
                        }}>
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
