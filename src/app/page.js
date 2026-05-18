import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import TopRated from "@/components/TopRated";
import Why from "@/components/Why";

export default function Home() {
  return (
   <main className="px-6 py-16 space-y-16">
    <Hero></Hero>
    <TopRated></TopRated>
    <Why></Why>
    <Testimonials></Testimonials>
   </main>
  );
}
