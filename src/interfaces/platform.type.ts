export interface IPlatformList {
  id: number;
  name: string;
  slug: string;
  platforms: IPlatform[];
}

export interface IPlatform {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  image: string;
}

export interface ISort {
  label: string;
  value: string;
}
