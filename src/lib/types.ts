export type EventoEvent = {
  id: number;
  name: string;
  slug: string;
  city: string;
  location: string;
  date: string; // ISO date string
  organizerName: string;
  imageUrl: string;
  description: string;
  createdAt?: string;
  updatedAt?: string;
};
