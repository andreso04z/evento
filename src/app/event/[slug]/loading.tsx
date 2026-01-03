import Skeleton from "@/components/skeleton";

export default function loading() {
  return (
    <div className="flex flex-col items-center gap-y-4 pt-28">
      <Skeleton className="h-4 w-137.5" />
      <Skeleton className="h-4 w-100" />
      <Skeleton className="h-4 w-107.5" />
    </div>
  );
}
