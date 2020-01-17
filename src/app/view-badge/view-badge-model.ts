export interface ViewBadgeModel {
  isBadgeVerification?: boolean;
  isBadgeExpired: boolean;
  custDigitalBadgeLeftPanelText?: string;
  custDigitalBadgeHideLogo?: boolean;
  custDigitalBadgeHideCM?: boolean;
  custDigitalBadgeHideIndividualImage?: boolean;
  badge: ViewBadgeBadgeModel;
  customer: ViewBadgeCustomerModel;
  individual: ViewBadgeIndividualModel;
  image: ViewBadgeVevaImage;
  vendorIndividualAssociations: ViewBadgeVendorIndividualAssociation[];
}

export interface ViewBadgeCustomerModel {
  custId: number; //210,
  vcName: string; //'Air Products'
  vcLogo: string; //'/customerImages/images/AirProducts_logo_pms347.jpg',
  vcLogoDataUri: string; 
  vcSiteColor1: string; //'009543',
  vcSiteColor2: string; //'FFFFFF'
}


export interface ViewBadgeBadgeModel {
  qrCodeUUID: string;
  qrCodeImage: string;
  vbBadgeNumber: string;
  vendorId: number; //2367
  vbExpirationDt: string;
}

export interface ViewBadgeIndividualModel {
  individualId: number; //42212
  viFirstName: string;
  viLastName: string;
  viIndividualComplStatus: string;
  viComplExpirationDate: string; //MM-DD-YYYY
  srNo: string; //Y/N VEVA_INDIVIDUAL.SR_NO
}

export interface ViewBadgeVendorIndividualAssociation {
  vendorId: number; //2367
  vvName: string; //airpjudy12
}

export interface ViewBadgeVevaImage {
  viFileName: string; //"2367_42212_1436.jpg",
  viImage: string; //  "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"
}

//data:image/png;base64
//data:image/jpeg;base64
//data:image/bmp;base64