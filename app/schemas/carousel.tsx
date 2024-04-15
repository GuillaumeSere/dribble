import { z } from "zod";

export const carouselItemShema = z.object({
    name: z.string(),
    mediaUrl: z.string(),
    surname: z.string(),
    tags: z.array(z.string()),
    mediaType: z.enum(["image","video"]),
});

export const carouselShema = z.array(carouselItemShema);

export type CarouselItem = z.infer<typeof carouselItemShema>