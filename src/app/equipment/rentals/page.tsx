export default function RentalsPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="text-center space-y-3 mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Equipment Rentals
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          High-quality, well-maintained scuba gear available for your next adventure.
        </p>
      </div>
       <div className="flex justify-center items-center h-64">
        <p className="text-muted-foreground">Our rental inventory is being updated. Please contact us for availability.</p>
      </div>
    </div>
  );
}
