// import { WelcomeCoockingTips } from "../../components/CookingTipsPage/WelcomeCookingTips/WelcomeCoockingTips"
import { Subscribe } from "@/components/widgets/subscribe/Subscribe";
import { getFetchData } from "@/api/api";
// import { useCookingTips } from "../../hooks/useCookingTips"
import { Slider } from "@/components/widgets/slider/Slider";
import { CookingTipsResponse } from "@/types/types";
import { transformResponse } from "@/utils/transformResponce";
import { CookingTipsCard } from "@/components/ui/cookingTipsCard/CookingTipsCard";

export default async function CookingTipsPage() {
  const cockingTipsData = await getFetchData<CookingTipsResponse>(
    "cooking_tips",
    {
      revalidate: 3600,
    },
  );
  const masteringData = transformResponse(cockingTipsData.mastering);

  return (
    <>
      {/* <WelcomeCoockingTips /> */}
      <Slider
        sliderTitle="Mastering the Basics"
        slidesInfo={masteringData}
        CardComponent={CookingTipsCard}  // ← передаем компонент, а не функцию
        cardProps={{ subSection: "mastering" as const }}
        rows={2}
        perView={3}
        border={false}
      />
      {/* <Slider
				sliderTitle="Nourishing Every Palate"
				slidesInfo={cookingTips.nourishing}
				renderCard={(recipe) => {
					return <CoolingTipsNourishingCard cardInfo={recipe} subSection='nourishing'/>
				}}
				perView={3}
				backColor={true}
			/>
			<Slider
				sliderTitle="TIps & tricks"
				slidesInfo={cookingTips.tips_and_tricks}
				renderCard={(recipe) => {
					return <CookingTipsCard cardInfo={recipe} subSection='tips_and_tricks'/>
				}}
				rows={2}
				perView={3}
				border={false}
			/> */}
      <Subscribe />
    </>
  );
}
