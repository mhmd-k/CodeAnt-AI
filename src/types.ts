export type Repository = {
  id: number;
  name: string;
  privacy: "public" | "private";
  language: string;
  size: number;
  lastTimeUpdated: Date;
};
