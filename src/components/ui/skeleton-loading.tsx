import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export function SkeletonCard() {
  return (
    <Card className="p-6">
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2 flex-1">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-2/3" />
      </div>
    </Card>
  );
}

export function SkeletonCertification() {
  return (
    <Card className="flex flex-col h-full overflow-hidden">
      <Skeleton className="h-48 w-full" />
      <CardHeader className="flex flex-row items-start gap-4">
        <Skeleton className="h-12 w-12 rounded-full flex-shrink-0" />
        <div className="space-y-2 flex-1">
          <Skeleton className="h-5 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex gap-2">
          <Skeleton className="h-6 w-16" />
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-6 w-24" />
        </div>
      </CardContent>
    </Card>
  );
}

export function SkeletonProfile() {
  return (
    <div className="py-16 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center gap-10">
          <Skeleton className="h-36 w-36 sm:h-48 sm:w-48 rounded-full" />
          <div className="flex-1 space-y-4 text-center sm:text-left">
            <Skeleton className="h-6 w-32 mx-auto sm:mx-0" />
            <Skeleton className="h-12 w-full max-w-2xl mx-auto sm:mx-0" />
            <Skeleton className="h-4 w-full max-w-2xl mx-auto sm:mx-0" />
            <Skeleton className="h-4 w-3/4 max-w-2xl mx-auto sm:mx-0" />
            <div className="flex gap-2 justify-center sm:justify-start">
              <Skeleton className="h-6 w-20" />
              <Skeleton className="h-6 w-24" />
              <Skeleton className="h-6 w-20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SkeletonSection() {
  return (
    <section className="py-16">
      <Skeleton className="h-10 w-64 mx-auto mb-12" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </section>
  );
}
