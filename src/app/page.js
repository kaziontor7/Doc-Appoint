import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Why from "@/components/Why";

export default function Home() {
  return (
   <main className="px-6 py-16 space-y-16">
    <Hero></Hero>
    <Why></Why>
    <Testimonials></Testimonials>
   </main>
  );
}
