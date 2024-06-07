import React from "react";
import ReactDOM from "react-dom/client";

/**
 * APP
 *  Header
 *   - Logo
 *   - Nav Items
 *  Body
 *   - search
 *   - restro Body
 *        - restro card
 *  Footer
 *   - copyright
 *   - links
 */

const Header = () => {
  return (
    <div className="Header" >
      <div className="LogoContainer">
        <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxodBCOx28Vb76OItsEulidWkalURaNu3sMw&s" />
      </div>
      <ul className="NavItems">
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

const RestaurantCard = (props)=>{
    const {resData}=props;
    const {cloudinaryImageId,name,cuisines,avgRating} = resData?.info;
    const deliveryTime = resData?.info?.sla?.deliveryTime;
    return (
        <div className="restoCard">
            <div className="restoImg">
                <img  className="foodImg" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
            </div>
            <div className="restoDetail">
                <h3 className="restoName">{name}</h3>
                <h5>{cuisines.join(", ")}</h5>
                <div className="restoDel">
                    <h4>{avgRating} stars</h4>
                    <h4>{deliveryTime} minutes</h4>
                </div>
            </div>
            <div className="cartAdd">
                Add +
            </div>
        </div>
    );
};


const resList = [
    {
        "info": {
          "id": "47597",
          "name": "Pizza Hut",
          "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
          "locality": "Evershine Tower",
          "areaName": "Vaishali Nagar",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "Pizzas"
          ],
          "avgRating": 4.1,
          "parentId": "721",
          "avgRatingString": "4.1",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 51,
            "lastMileTravel": 7.5,
            "serviceability": "SERVICEABLE",
            "slaString": "50-55 mins",
            "lastMileTravelString": "7.5 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-06-07 04:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "50% OFF",
            "subHeader": "UPTO ₹90"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/pizza-hut-evershine-tower-vaishali-nagar-jaipur-47597",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "669200",
          "name": "Chinese Wok",
          "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
          "locality": "Police Station",
          "areaName": "Vidhyadhar Nagar",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "Chinese",
            "Asian",
            "Tibetan",
            "Desserts"
          ],
          "avgRating": 4.3,
          "parentId": "61955",
          "avgRatingString": "4.3",
          "totalRatingsString": "500+",
          "sla": {
            "deliveryTime": 50,
            "lastMileTravel": 10.9,
            "serviceability": "SERVICEABLE",
            "slaString": "45-50 mins",
            "lastMileTravelString": "10.9 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-06-07 01:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹169"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/chinese-wok-police-station-vidhyadhar-nagar-jaipur-669200",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "45606",
          "name": "Domino's Pizza",
          "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
          "locality": "Jhotwara",
          "areaName": "Jhotwara",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Pizzas",
            "Italian",
            "Pastas",
            "Desserts"
          ],
          "avgRating": 4.2,
          "parentId": "2456",
          "avgRatingString": "4.2",
          "totalRatingsString": "5K+",
          "sla": {
            "deliveryTime": 25,
            "lastMileTravel": 1.8,
            "serviceability": "SERVICEABLE",
            "slaString": "20-25 mins",
            "lastMileTravelString": "1.8 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-06-06 23:59:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Rxawards/_CATEGORY-Pizza.png",
                "description": "Delivery!"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "Delivery!",
                      "imageId": "Rxawards/_CATEGORY-Pizza.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹150 OFF",
            "subHeader": "ABOVE ₹299",
            "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/dominos-pizza-jhotwara-jaipur-45606",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "632986",
          "name": "La Pino'z Pizza",
          "cloudinaryImageId": "b9ixfa8dpbf19njypjbt",
          "locality": "Kalwad Road",
          "areaName": "Jhotwara",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Pizzas",
            "Pastas",
            "Italian",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 4.2,
          "veg": true,
          "parentId": "4961",
          "avgRatingString": "4.2",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 27,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-06-07 03:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹199"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-kalwad-road-jhotwara-jaipur-632986",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "90186",
          "name": "Burger King",
          "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
          "locality": "Amrapali Marg",
          "areaName": "Vaishali Nagar",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "Burgers",
            "American"
          ],
          "avgRating": 4.3,
          "parentId": "166",
          "avgRatingString": "4.3",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 49,
            "lastMileTravel": 7.3,
            "serviceability": "SERVICEABLE",
            "slaString": "45-50 mins",
            "lastMileTravelString": "7.3 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-06-07 04:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Rxawards/_CATEGORY-Burger.png",
                "description": "Delivery!"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "Delivery!",
                      "imageId": "Rxawards/_CATEGORY-Burger.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "50% OFF",
            "subHeader": "UPTO ₹90"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/burger-king-amrapali-marg-vaishali-nagar-jaipur-90186",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "254023",
          "name": "McDonald's",
          "cloudinaryImageId": "535fc9f9c135f7982317bbb6a64a1ffc",
          "locality": "Chitrakoot",
          "areaName": "Chitrakoot",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "American"
          ],
          "avgRating": 4.3,
          "parentId": "630",
          "avgRatingString": "4.3",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 61,
            "lastMileTravel": 10.3,
            "serviceability": "SERVICEABLE",
            "slaString": "60-65 mins",
            "lastMileTravelString": "10.3 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-06-06 23:45:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Rxawards/_CATEGORY-Burger.png",
                "description": "Delivery!"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "Delivery!",
                      "imageId": "Rxawards/_CATEGORY-Burger.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "40% OFF",
            "subHeader": "UPTO ₹80"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/mcdonalds-chitrakoot-jaipur-254023",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "47395",
          "name": "Subway",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/4/d2c2136d-2a69-4f0d-82b7-67427d105af1_47395.JPG",
          "locality": "Bopal",
          "areaName": "Elements Mall",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "Fast Food",
            "Healthy Food",
            "Salads",
            "Desserts",
            "Beverages",
            "Snacks",
            "Continental",
            "Italian",
            "Italian-American",
            "American"
          ],
          "avgRating": 3.8,
          "parentId": "2",
          "avgRatingString": "3.8",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 62,
            "lastMileTravel": 10.3,
            "serviceability": "SERVICEABLE",
            "slaString": "60-65 mins",
            "lastMileTravelString": "10.3 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-06-07 01:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Rxawards/_CATEGORY-Sandwiches.png",
                "description": "Delivery!"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "Delivery!",
                      "imageId": "Rxawards/_CATEGORY-Sandwiches.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "30% OFF",
            "subHeader": "UPTO ₹75"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/subway-bopal-elements-mall-jaipur-47395",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "686247",
          "name": "Starbucks Coffee",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/3/4551821b-8035-424a-8829-3f22471e4422_686247.JPG",
          "locality": "Queens Road",
          "areaName": "Vaishali Nagar",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Beverages",
            "Cafe",
            "Snacks",
            "Desserts",
            "Bakery",
            "Ice Cream"
          ],
          "avgRating": 4.5,
          "parentId": "195515",
          "avgRatingString": "4.5",
          "totalRatingsString": "100+",
          "sla": {
            "deliveryTime": 48,
            "lastMileTravel": 8.9,
            "serviceability": "SERVICEABLE",
            "slaString": "45-50 mins",
            "lastMileTravelString": "8.9 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-06-06 23:00:00",
            "opened": true
          },
          "badges": {
            "textExtendedBadges": [
              {
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available",
                "fontColor": "#7E808C"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "",
                      "fontColor": "#7E808C",
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available"
                    }
                  }
                ]
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "20% OFF",
            "subHeader": "UPTO ₹50"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/starbucks-coffee-queens-road-vaishali-nagar-jaipur-686247",
          "type": "WEBLINK"
        }
      },
] 

const Body = () => {
    return (
        <div className="Body">
            <div className="Search">
                <input className="SearchBox" placeholder="Search Restros ...."/>
            </div>
            <div className="resto-container">
                {
                    resList.map((restraurant)=>(<RestaurantCard key={restraurant.info.id} resData={restraurant} />) )
                }
            </div>
        </div>
    );
};

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("head"));
root.render(<AppLayout />);
