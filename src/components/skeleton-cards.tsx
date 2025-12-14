import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export function SkeletonCard() {
  return (
    <Card className="flex flex-col items-center text-center p-6">
      <Skeleton className="h-16 w-16 rounded-full mb-4" />
      <CardHeader className="p-0 w-full">
        <Skeleton className="h-5 w-3/4 mx-auto" />
      </CardHeader>
      <CardContent className="p-0 mt-2 w-full">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6 mt-2 mx-auto" />
      </CardContent>
    </Card>
  );
}

export function SkeletonCertificate() {
  return (
    <Card className="flex flex-col h-full overflow-hidden">
      <Skeleton className="h-48 w-full" />
      <CardHeader className="flex flex-row items-start gap-4">
        <Skeleton className="h-12 w-12 rounded-full flex-shrink-0" />
        <div className="flex-grow space-y-2">
          <Skeleton className="h-5 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2">
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-6 w-16" />
        </div>
      </CardContent>
    </Card>
  );
}

export function SkeletonTimeline() {
  return (
    <div className="relative mb-12 pl-12 sm:pl-0 sm:flex sm:items-center sm:gap-8">
      <div className="sm:w-1/2"></div>
      <div className="absolute left-0 sm:left-1/2 -translate-x-1/2 transform">
        <Skeleton className="w-8 h-8 rounded-full" />
      </div>
      <Card className="w-full sm:w-1/2">
        <CardHeader>
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-1/2 mt-2" />
        </CardHeader>
        <CardContent className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/6" />
        </CardContent>
      </Card>
    </div>
  );
}

export function SkeletonSection() {
  return (
    <section className="max-w-7xl mx-auto py-12 px-6">
      <Skeleton className="h-10 w-64 mx-auto mb-12" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </section>
  );
}
