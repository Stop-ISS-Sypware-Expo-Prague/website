// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE_EN = "Stop the ISS Spyware Expo in Prague";
export const SITE_DESCRIPTION_EN =
  "We are campaigning to stop the ISS Spyware Expo, an event that promotes and sells spyware technology, from taking place in Prague.";
export const SITE_TITLE_CZ = "Zastavte spyware veletrh ISS v Praze";
export const SITE_DESCRIPTION_CZ =
  "Kampaň proti uskutečnění spyware veletrhu ISS, kde se mají prodávat špionážní technologie.";

export interface StrToStr {
  readonly [index: string]: string;
}
export const cs_to_en_path: StrToStr = {
  spolecnosti: "companies",
  petice: "petition",
  podporit: "support",
  "tiskova-zprava": "press-release",
};
export const en_to_cs_path: StrToStr = {
  companies: "spolecnosti",
  petition: "petice",
  support: "podporit",
  "press-release": "tiskova-zprava",
};
