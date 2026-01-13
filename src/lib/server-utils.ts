import "server-only";

import { notFound } from "next/navigation";
import { prisma } from "./prisma";
import { capitalize } from "./utils";
import { unstable_cache } from "next/cache";
import { EventoEvent } from "@prisma/client";

type EventsResponse = Promise<{
    events: EventoEvent[],
    totalCount: number
}>

export const getEvents = unstable_cache(async (city: string, page = 1): EventsResponse => {
    const events = await prisma.eventoEvent.findMany({
        where: {
            city: city === "all" ? undefined : capitalize(city),
        },
        orderBy: {
            date: "asc",
        },
        take: 6,
        skip: (page - 1) * 6,
    });

    let totalCount;
    if (city === "all") {
        totalCount = await prisma.eventoEvent.count();
    } else {
        totalCount = await prisma.eventoEvent.count({
            where: {
                city: capitalize(city),
            },
        });
    }

    return {events, totalCount};
});

export const getEvent = unstable_cache( async (slug: string) => {
    const event = await prisma.eventoEvent.findUnique({
        where: {
            slug: slug,
        },
    });

    if (!event) {
        return notFound();
    }

    return event;
});