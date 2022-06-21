import * as React from "react";
import Header from "./components/Header/Header";
import Instructions from "./components/Instructions/Instructions";
import Chip from "./components/Chip/Chip";
import NutritionalLabel from "./components/NutritionalLabel/NutritionalLabel";
// IMPORT ANY NEEDED COMPONENTS HERE
import { createDataSet } from "./data/dataset";
import "./App.css";

// don't move this!
export const appInfo = {
  title: `Fast Food Feud 🍔!`,
  tagline: `Folks' Favorite Friendly Fuel Finder For Food Facts`,
  description: `Finding healthy food is hard. Sometimes we just settle for what's available. That doesn't mean we shouldn't know what's going into our bodies! Fast Food Feud is here to arm the public with all the nutritional facts needed to make informed decisions about fast food consumption.`,
  dataSource: `All data pulled from the MenuStat.org interactive online database.`,
  instructions: {
    start: `Start by clicking on a food category on the left and a fast food joint from the list above. Afterwards, you'll be able to choose from a list of menu items and see their nutritional content.`,
    onlyCategory: `Now select a fast food restaurant from the list above!`,
    onlyRestaurant: `Now select a category from the list on the left!`,
    noSelectedItem: `Almost there! Choose a menu item and you'll have the fast food facts right at your fingertips!`,
    allSelected: `Great choice! Amazing what a little knowledge can do!`,
  },
};
// or this!
const { data, categories, restaurants } = createDataSet();

export function App() {
  const [categorysel, setcategorysel] = React.useState(null);
  const [restsel, setrestsel] = React.useState(null);
  const [selecteditem, setselecteditem] = React.useState(null);
  React.useEffect(() => {
    console.log(categories);
  }, []);
  function onceClicked1(category) {
    setcategorysel(category);
  }
  function onceClicked2(restaurant) {
    setrestsel(restaurant);
  }
  function onceClicked3(item) {
    setselecteditem(item);
  }
  var currentMenuItems = data.filter((item) => {
    return item.food_category === categorysel && item.restaurant === restsel;
  });

  return (
    <main className="App">
      {/* CATEGORIES COLUMN */}
      <div className="CategoriesColumn col">
        <div className="categories options">
          <h2 className="title">Categories</h2>
          {/* YOUR CODE HERE */}
          {categories.map((category, i) => {
            return (
              <Chip
                key={i}
                label={category}
                isActive={category === categorysel}
                imclick={() => {
                  onceClicked1(category);
                }}
              />
            );
          })}
        </div>
      </div>

      {/* MAIN COLUMN */}
      <div className="container">
        {/* HEADER GOES HERE */}
        <Header info={appInfo} />
        {/* RESTAURANTS ROW */}
        <div className="RestaurantsRow">
          <h2 className="title">Restaurants</h2>
          <div className="restaurants options">
            {/* YOUR CODE HERE */}
            {restaurants.map((restaurant, i) => {
              return (
                <Chip
                  key={i}
                  label={restaurant}
                  isActive={restaurant === restsel}
                  imclick={() => {
                    onceClicked2(restaurant);
                  }}
                />
              );
            })}
          </div>
        </div>

        {/* INSTRUCTIONS GO HERE */}
        <Instructions info={appInfo} />
        {/* MENU DISPLAY */}
        <div className="MenuDisplay display">
          <div className="MenuItemButtons menu-items">
            <h2 className="title">Menu Items</h2>
            {/* YOUR CODE HERE */}
            {currentMenuItems.map((item, i) => {
              return (
                <Chip
                  key={i}
                  label={item.item_name}
                  isActive={
                    selecteditem && selecteditem.item_name === item.item_name
                  }
                  imclick={() => {
                    onceClicked3(item);
                  }}
                />
              );
            })}
          </div>

          {/* NUTRITION FACTS */}
          <div className="NutritionFacts nutrition-facts">
            {/* YOUR CODE HERE */}
            <NutritionalLabel item={appInfo} />
          </div>
        </div>

        <div className="data-sources">
          <p>{appInfo.dataSource}</p>
        </div>
      </div>
    </main>
  );
}

export default App;
