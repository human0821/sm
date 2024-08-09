import type { SubSectionSchema } from "@/app/api/apiGenerator/catalog/sectionsCatalogApi";
declare global {
  interface CategorySection {
    reverse?: boolean;
    color?: string | null;
    id: string;
    name: string;
    subSections: SubSectionSchema[];
  }
}
