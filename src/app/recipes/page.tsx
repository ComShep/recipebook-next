import { getFetchData } from "@/api/api";
import { Recipes } from "@/components/widgets/recipes/Recipes";
import { RecipesSectionResponse } from "@/types/types";
import { transformResponse } from "@/utils/transformResponce";

export default async function recipes() {
  const recipesData = await getFetchData<RecipesSectionResponse>("recipes", {
    revalidate: 3600,
  });
  const recipes = transformResponse(recipesData)

  return <Recipes recipes={recipes} />;
}
