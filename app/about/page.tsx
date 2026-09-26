import Image from "next/image";
import About_img from "@/public/hero-image-square.png"

export default function AboutPage() {
    return(
        <main>
            <section className=" my-10">
                <Image 
                    src={About_img} alt="" 
                    width={350} height={350} 
                />
                <div className="py-8">
                    <h1 className="text-xl font-bold pb-4">Empowering Makers Worldwide</h1>
                    <p className="pb-3">Founded in 2023, PrintForge has quickly become
                        the go-to platform for 3D printing enthusiasts,
                        makers, and professional designers to share and discover
                        amazing STL files for 3D printing.</p>
                    <p className="pb-3">Our mission is to foster a vibrant community
                        where creativity meets technology,
                        enabling anyone to bring their ideas to 
                        life through 3D printing.</p>
                </div>
            </section >
            
            <section className="my-10 self-center">
                <hr className="my-8 border-gray-300" />
                
                <div className="flex flex-col px-2.5 md:flex-row md:divide-x md:divide-gray-300">
                    <div className="px-4.5 py-3.5">
                    <h2 className="text-xl font-bold md:text-2xl">100K+ Models</h2>
                    <p className="text-lg text-gray-600 md:text-xl">
                        Access our vast library of community-created 3D models, from practical tools to artistic creations.
                    </p>
                    </div>
                    
                    <div className="px-4.5 py-3.5">
                    <h2 className="text-xl font-bold md:text-2xl">Active Community</h2>
                    <p className="text-lg text-gray-600 md:text-xl">
                        Join thousands of makers who share tips, provide feedback, and collaborate on projects.
                    </p>
                    </div>
                    
                    <div className="px-4.5 py-3.5">
                    <h2 className="text-xl font-bold md:text-2xl">Free to Use</h2>
                    <p className="text-lg text-gray-600 md:text-xl">
                        Most models are free to download, with optional premium features for power users.
                    </p>
                    </div>
                </div>
                
                <hr className="my-8 border-gray-300" />
            </section>

            <section className=" my-10">
                <h2  className="text-2xl font-bold md:text-3xl pb-4">
                    Our Vision
                </h2>
                <p className="text-lg text-gray-600 md:text-xl  pb-3">
                    At PrintForge, we believe that 3D printing is revolutionizing the way we create,
                    prototype, and manufacture. Our platform serves as a bridge between designers
                    and makers, enabling the sharing of knowledge and creativity that pushes the
                    boundaries of what&apos;s possible with 3D printing.
                </p>
                <p className="text-lg text-gray-600 md:text-xl pb-3">
                    Whether you&apos;re a hobbyist looking for your next
                    weekend project, an educator seeking teaching materials,
                    or a professional designer wanting to share your creations,
                    PrintForge provides the tools and community to support your journey in 3D printing.
                </p>
            </section>
        </main>
    )
}
