export interface SectionTitleProps {
  subHeading: string;
  heading: string;
}

export interface Menu {
  _id: string;
  name: string;
  recipe: string;
  image: string;
  category: string;
  price: number;
}

export interface MenuCardProps {
  menu: Menu;
}
