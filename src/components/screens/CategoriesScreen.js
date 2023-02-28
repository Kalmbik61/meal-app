import { FlatList } from "react-native";
import { CATEGORIES } from "../../fakeData/fakeData";
import CategoryGreedTile from "../globals/CategoryGreedTile/CategoryGreedTile";

function renderCatItem(item) {
  return <CategoryGreedTile title={item.title} color={item.color} />;
}

function CategoriesScreen() {
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
