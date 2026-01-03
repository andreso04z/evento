import SkeletonCard from "@/components/skeleton-card";

export default function loading() {
  return (
    <div className="flex flex-wrap justify-center max-w-275 mx-auto px-5 py-24 gap-20">
      {Array.from({ length: 6 }).map((item, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
