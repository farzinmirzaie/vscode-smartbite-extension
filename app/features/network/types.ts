export interface Response<T> {
  success: boolean;
  data: T;
}

export interface OrdersResponse {
  orders: Array<{
    _id: string;
    fee: number;
    status: string;
    taxApplied: boolean;
    sstApplied: boolean;
    dailyMenuForDate: string;
    buildingName: string;
    paymentStatus: string;
    totalAmount: number;
    totalCorporateAllowance: number;
    sstRate: number;
    deliveryHistory: Array<any>;
    orderNumber: string;
    orderItemsSuppliers: Array<{
      _id: string;
      status: string;
      category: Array<any>;
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
      name: string;
      userId: string;
      userName: string;
      orderId: string;
      supplierId: string;
      supplierName: string;
      chainId?: string;
      chainName?: string;
      dailyMenuForDate: string;
      dailyMenuForDateEnd: string;
      foodItemId: string;
      nmv: number;
      gmv: number;
      restaurantPrice: number;
      marginFromRestaurant: number;
      marginFromPaymentGateway: number;
      addons: Array<{
        qty: number;
        isMarkup: boolean;
        gold: boolean;
        individualQuantity: boolean;
        _id: string;
        supplierId: string;
        name: string;
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
      specialInstructions: string;
      description: string;
      rewardPointsAmount: number;
      supplierLoyaltyPercentage: number;
      createdAt: string;
      updatedAt: string;
      __v: number;
    }>;
    deliveryStatus: string;
    parentId?: string;
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
