import { ButtonHTMLAttributes } from "react";

export interface ICategory extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  iconName: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  selected: boolean;
}
