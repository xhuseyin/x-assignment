export type FilterType = {
    sortOf?: "priceLowToHigh" | "priceHighToLow" | "newToOld" | "oldToNew";  
    manufacturer?: string[]; //brands
    itemType?: string; //mug | shirt
    tags?: string[];  
  };
  