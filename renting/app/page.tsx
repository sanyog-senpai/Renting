import CardCollection from "@/components/CardType/CardCollection";
import HeroBanner from "@/components/HeroSection/HeroBanner";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <CardCollection heading="Rental Listing" subheading="Find your Non-living companion" />
    </>
  );
}
