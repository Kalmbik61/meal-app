import { FlatList } from "react-native";
import { CATEGORIES } from "../../fakeData/fakeData";
import CategoryGreedTile from "../globals/CategoryGreedTile/CategoryGreedTile";

function CategoriesScreen({ navigation }) {
  function renderCatItem(item) {
    const onPressHandler = () => {
      navigation.navigate("MealsOverview", { categoryId: item.id });
    };

    return (
      <CategoryGreedTile
        title={item.title}
        color={item.color}
        onPress={onPressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => renderCatItem(item)}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
