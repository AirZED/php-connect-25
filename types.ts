export interface Event {
    meta: {
      title: string;
      details?: string;
      by?: string;
    };
    time: string;
    isGroup?: boolean;
    group?: Event["meta"][];
  }
  
  export type SponsorCategoryType =
    | "CorporateSponsors"
    | "CorporatePartners"
    | "CommunitySponsors"
    | "CommunityPartners";
  
  export interface Sponsor {
    name: string;
    image: string;
  }
  
  export interface SponsorsList {
    type: SponsorCategoryType;
    name: string;
    list: Sponsor[];
  }
  