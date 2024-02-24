export interface Response<T> {
  success: boolean;
  data: T;
}

export interface OrdersResponse {
  orders: Array<{
    _id: string;
    status: string;
    buildingName: string;
    totalAmount: number;
    dailyMenuForDate: string;
    paymentStatus: string;
    orderNumber: string;
    orderItemsSuppliers: Array<{
      _id: string;
      status: string;
      category: Array<string>;
      allergens: Array<any>;
      type: string;
      currency: string;
      quantity: number;
      ratingSkipped: boolean;
      gold: boolean;
      boughtAsGold: boolean;
      billed: boolean;
      offer: boolean;
      acknowledged: boolean;
      ready: boolean;
      slider: {};
      guid: string;
      menuSectionId: string;
      name: string;
      userName: string;
      userId: string;
      orderId: string;
      supplierId: string;
      supplierName: string;
      dailyMenuId: any;
      dailyMenuForDate: string;
      foodItemId: string;
      menuItemId: any;
      nmv: number;
      nmv_gold: number;
      buyOffer: number;
      getFreeOffer: number;
      gmv: number;
      restaurantPrice: number;
      marginFromRestaurant: number;
      marginFromPaymentGateway: number;
      addons: Array<{
        qty: number;
        isMarkup: boolean;
        gold: boolean;
        individualQuantity: boolean;
        included: any;
        _id: string;
        supplierId?: string;
        name: string;
        includedQty: number;
        category: string;
        nmv: number;
        gmv: number;
        nmv_gold: number;
        total: number;
        index: number;
        restaurantPrice: number;
        marginFromRestaurant: number;
      }>;
      total: number;
      recommId: any;
      description: string;
      supplierLoyaltyPercentage: number;
      dailyMenuForDateEnd: string;
      __v: number;
      createdAt: string;
      updatedAt: string;
      rewardPointsAmount: number;
      orderIndex?: number;
      specialInstructions?: string;
      mealType?: string;
    }>;
  }>;
  ordersCount: number;
}

export type LoginResponse = {
  token: string;
  customer: {
    _id: string;
    mobileNumber: string;
    mobileValidated: boolean;
    name: string;
    balance: number;
    nuggets: number;
    favoritePlaces: Array<any>;
    email: string;
    status: string;
    companyName: string;
    corporate: {
      _id: string;
      name: string;
      logo: string;
      headerColor: any;
      containerColor: any;
      footerColor: any;
      buildingName: string;
      buildingId: string;
      blockNumber: any;
      floor: string;
      unitNumber: any;
      address: string;
      restrictedSuppliers: boolean;
      startingDaySmartCanteen: number;
      sendQRCodeCustomerEmail: boolean;
      changeLocationSmartCanteen: boolean;
      supplierLists: Array<any>;
      selectedAllow: boolean;
    };
    updatedAt: string;
    createdAt: string;
    tagMealType: any;
    tagFoodType: any;
    tagDietary: Array<any>;
    tagHalal: any;
    corporateId: string;
    corporateName: string;
    locationId: string;
    verify: string;
    setting: {
      country: string;
      currency2: string;
      currency3: string;
      SST: number;
    };
  };
};
