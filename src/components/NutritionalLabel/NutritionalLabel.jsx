import * as React from "react";
import { nutritionFacts } from "../../constants";
import "./NutritionalLabel.css";

export function NutritionalLabel(props) {
  return (
    <div className="nutritional-label">
      <h3 className="title">Nutrition Facts</h3>

      <h4 className="item-name">{props.item.item_name}</h4>

      <ul className="fact-list">
        {nutritionFacts.map(
          (
            itemfact,
            i //why do we use straight instead of curly barkets
          ) => (
            <NutritionalLabelFact
              item={props.item}
              elem={itemfact}
              key={itemfact.id}
              label={itemfact.label}
              att={itemfact.attribute}
            />
          )
        )}
      </ul>
    </div>
  );
}

export function NutritionalLabelFact(props) {
  return (
    <li className="nutrition-fact">
      <span className="fact-label">{props.label}</span>{" "}
      <span className="fact-value">{props.item[props.att]}</span>
    </li>
  );
}

export default NutritionalLabel;
