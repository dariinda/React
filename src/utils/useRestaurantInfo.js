import { useEffect , useState} from "react"
import { MENU_URL } from "./constants"

const useRestaurantInfo = (resId) => {
    const [resInfo, setResInfo] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(MENU_URL + resId);
          const json = await response.json();
          setResInfo(json.data); // Assuming json.data is the correct structure
        } catch (error) {
          console.error('Error fetching restaurant info:', error);
        }
      };
  
      fetchData(); // Call the function
    }, [resId]); // Add resId as a dependency
  
    return resInfo;
  };

export default useRestaurantInfo;