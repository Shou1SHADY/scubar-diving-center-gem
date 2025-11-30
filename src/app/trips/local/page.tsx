export default function LocalTripsPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="text-center space-y-3 mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Local Diving Trips
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Discover the hidden gems in our own backyard. We offer regular trips to the best local dive sites.
        </p>
      </div>
       <div className="flex justify-center items-center h-64">
        <p className="text-muted-foreground">Check back soon for our local trip schedule!</p>
      </div>
    </div>
  );
}
