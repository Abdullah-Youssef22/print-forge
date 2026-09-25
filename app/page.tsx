
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="flex flex-col items-center justify-between gap-4 md:flex-row md:gap-8 max-w-7xl mx-auto">
        <div className="flex flex-col gap-4 my-[50px] mx-[20px] md:w-1/2">
          <p className="hidden text-sm uppercase md:flex">Your go-to platform for 3D printing files</p>
          <h1 className="text-4xl font-bold md:text-5xl ">Discover what&apos;s possible with 3D Printing</h1>
          <p className="text-lg text-gray-600 md:text-xl">
            Join our community of creators and explore a vast
            library of user-submitted models.
          </p>
          <a
            href="/3d-models"
            className="px-6 py-3 text-black transition duration-100 bg-white border-2 border-black hover:bg-black hover:text-white"
          >
            Browse Models
          </a>
        </div>
        <Image src="/home-page-hero-img.png" alt="" width={350} height={350} />
      </section>
    </main>
  );
}
