"use client";

import getRandomBetween from '@/app/utils';
import clsx from 'clsx'
import React from 'react'

import carouselJson from "../../mocks/persons.json";
import { type CarouselItem, carouselShema } from '@/app/schemas/carousel';

const carouselData = carouselShema.parse(carouselJson);

const names = ["Alice", "Bob", "Charlie", "David", "Eve", "Guillaume", "Robin", "Céline", "Anaïs"]

export default function Carousel({ className }: React.ComponentProps<"div">) {
    const [show, setShow] = React.useState(false)

    React.useEffect(() => {
        setShow(true)
    }, [])

    return (
        <>

            <div className={clsx("grid grid-flow-col [--card-gap:34px] [--card-speed:6s] gap-[var(--card-gap)] [grid-auto-columns:min-content] min-w-fit animation-slide", className)}>
                {[...carouselData, ...carouselData].map((props, index) => (
                    <CarouselItem key={props.name + index} show={show} {...props} />
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
    show?: boolean;
} & CarouselItem;

function CarouselItem({ name, show, mediaType, mediaUrl, surname, tags }: CarouselItemProps) {
    const revealDelay = getRandomBetween(0, 1);

    return (
        <div
            style={{
                '--card-reveal-delay': `${revealDelay}s`,
                '--card-opacity': show ? 1 : 0,
                transform: show
                    ? `perspective(300px) translate3d(0,0,0)`
                    : `perspective(300px) translate3d(0,0,16px)`
            } as React.CSSProperties}
            className={clsx(
                'w-[273px] aspect-card bg-gray-500 rounded-[32px] relative overflow-hidden',
                "flex items-center justify-center text-white font-serif text-2xl",
                "opacity-[--card-opacity] animate-card-reveal",
                "transition-opacity duration-[600ms] ease-out delay-[--card-reveal-delay]"
            )}
        >
            {mediaType === "image" ? (
                <img
                    className='absolute inset-0 w-full h-full object-cover -z-10'
                    src={mediaUrl}
                    alt={name}
                />
            ) : (
                <video
                    className='absolute inset-0 w-full h-full object-cover -z-10'
                    src={mediaUrl}
                    autoPlay
                    muted
                />
            )}
            <div className={clsx('flex flex-col justify-end p-4 h-full w-full text-[13px] leading-4 space-y-2',
                "font-mona font-semibold",
                "transition-all duration-1000 ease-out delay-[--infos-delay]"
            )}
            style={{
                backgroundImage:
                "linear-gradient(rgba(0,0,0,0) 51.91%, rgba(0,0,0,0.3) 75.88%)",
                '--info-delay': `${revealDelay + 0.3}s`,
                '--card-opacity': show ? 1 : 0,
                transform: show
                    ? `perspective(300px) translate3d(0,0,0)`
                    : `perspective(300px) translate3d(0,0,16px)`,
                    opacity: show ? 1 : 0,
            } as React.CSSProperties}
            >
                <span>{name}</span>
                <span>{surname}</span>
                <ul className='flex space-x-2'>
                    {tags.map((tag) => (
                        <li key={tag} className='px-3 border text-[11px] pb-[2px] border-white/20 rounded-full'>{tag}</li>
                    ))}
                </ul>
            </div>
        </div>
    );

}