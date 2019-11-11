export type Item = {
  id: string;
  value: string;
  type: ItemType;
};

export type ItemType = "plain" | "check" | "radio";
