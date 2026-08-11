import { getFetchData } from "@/api/api";
import { RecipeCard } from "@/components/ui/recipeCard/RecipeCard";
import AboutUs from "@/components/widgets/aboutus/AboutUs";
import Banner from "@/components/widgets/banner/Banner";
import { Explore } from "@/components/widgets/explore/Explore";
import { Slider } from "@/components/widgets/slider/Slider";
import { Subscribe } from "@/components/widgets/subscribe/Subscribe";
import { MainResponse } from "@/types/types";
import { transformResponse } from "@/utils/transformResponce";

export default async function Home() {
  const mainData = await getFetchData<MainResponse>("main", {
    revalidate: 3600,
  });
  const favoriteData = transformResponse(mainData.favorite);
  const recipeData = transformResponse(mainData.recipes);

  return (
    <>
      <Banner />
      <Explore />
      <Slider
        slidesInfo={favoriteData}
        sliderTitle="featured recipes"
        CardComponent={RecipeCard}
      />
      <AboutUs />
      <Subscribe />
    </>
  );
}
