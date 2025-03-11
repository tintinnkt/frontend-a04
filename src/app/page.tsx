import Banner from "@/components/Banner";
import Card from "@/components/Card";

export default function Page() {
  return (
    <main className="bg-gray-100 min-h-screen flex flex-col items-center">
      <Banner />

      <section className="mx-auto px-6 sm:px-10">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mt-10 mb-8">
          Explore Our Venues
        </h2>

        <div className="flex flex-wrap gap-8 w-full justify-start">
          <Card venueName={"The Bloom Pavilion"} imgSrc="/bloom.jpg" />
          <Card venueName={"Spark Space"} imgSrc="/sparkspace.jpg" />
          <Card venueName={"The Grand Table"} imgSrc="/grandtable.jpg" />
        </div>
      </section>
    </main>
  );
}
