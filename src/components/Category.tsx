import { Icon } from "./Icon";

import { ICategory } from "../interfaces/Category";
import "../styles/category.scss";

export function Category({ iconName, title, selected, ...rest }: ICategory) {
  return (
    <button
      type="button"
      {...(selected && { className: "selected" })}
      {...rest}
    >
      <Icon name={iconName} color={selected ? "#FAE800" : "#FBFBFB"} />
      {title}
    </button>
  );
}
