import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { EventoEvent } from "@/lib/types";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
} 

export function capitalize(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export async function getEvents(city: string): Promise<EventoEvent[]> {
    const response = await fetch(
        `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
    );
    const events: EventoEvent[] = await response.json();
    return events;
}

export async function getEvent(slug: string): Promise<EventoEvent | null> {
    const response = await fetch(
        `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
    );
    if (!response.ok) return null;
    const event: EventoEvent = await response.json();
    return event;
} 