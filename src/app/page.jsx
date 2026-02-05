import BackToTopButton from "@/Components/BackToTopButton/BackToTopButton";
import DynamicHadith from "@/Components/DynamicHadith/DynamicHadith";
import DynamicAyat from "@/Components/DynmicAyat/DynmicAyat";
import Hero from "@/Components/Hero/Hero";
import Mohamed_Shehate_Model from "@/Components/Mohamed_Shehate_Model/Mohamed_Shehate_Model";




export default function Home() {
  return (
    <>
      <Hero />
      {/* مودال محمد شحاته */}
      <Mohamed_Shehate_Model />
      {/* بقية الصفحة */}
      <DynamicAyat />
      <DynamicHadith />
      {/* back to top */}
      <BackToTopButton />
    </>
  );
}
