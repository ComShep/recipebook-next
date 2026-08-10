import AboutUs from "@/components/widgets/aboutus/AboutUs";
import Banner from "@/components/widgets/banner/Banner";
import { Explore } from "@/components/widgets/explore/Explore";
import { Subscribe } from "@/components/widgets/subscribe/Subscribe";

export default function Home() {
  return (
    <>
      <Banner/>
      <Explore/>
      <AboutUs/>
      <Subscribe/>
    </>
  );
}
