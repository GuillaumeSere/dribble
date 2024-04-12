"use client";

import getRandomBetween from '@/app/utils';
import clsx from 'clsx'
import React from 'react'

const names = ["Alice", "Bob", "Charlie", "David", "Eve", "Guillaume", "Robin", "Céline", "Anaïs"]

export default function Carousel({ className }: React.ComponentProps<"div">) {
    const [show, setShow] = React.useState(false)

    React.useEffect(() => {
        setShow(true)
    }, [])

    return (
        <>

            <div className={clsx("grid grid-flow-col [--card-gap:34px] [--card-speed:6s] gap-[var(--card-gap)] [grid-auto-columns:min-content] min-w-fit animation-slide", className)}>
                {[...names, ...names].map((name, index) => (
                    <CarouselItem key={name + index} show={show}>
                        {name}
                    </CarouselItem>
                ))}
            </div>
            <style jsx global>{`
            :root{
                --card-number: ${names.length};
            }
            @keyframes slide {
              0%{
                transform: translateX(0);
              }
              100%{
                transform: translateX(calc(-50% - var(--card-gap) / 2));
              }
            }
            .animation-slide {
                    animation: slide calc(var(--card-number) * var(--card-speed)) linear infinite; 
                }
            `}</style>
        </>
    )
}
type CarouselItemProps = {
    children: string;
    show?: boolean;
}

function CarouselItem({ children, show }: CarouselItemProps) {
    const revealDelay = getRandomBetween(0, 1);

    return (
        <div
            style={{
                '--card-reveal-delay': `${revealDelay}s`,
                '--card-opacity': show ? 1 : 0,
                transform: show
                ? `perspective(300px) translate3d(0,0,0)`
                : `perspective(300px) translate3d(0,0,16px)`
            } as React.CSSProperties
            }
            className={clsx(
                'w-[273px] aspect-card bg-gray-500 rounded-[32px]',
                "flex items-center justify-center text-white font-serif text-2xl",
                "opacity-[--card-opacity] animate-card-reveal",
                "transition-opacity duration-[600ms] ease-out delay-[--card-reveal-delay]"
            )}
        >
            {children}
        </div>
    );

}