import { createBrowserRouter } from "react-router-dom";
import publicRoute from "./privetRoute";
import privetRoute from "./publicRoute";

// create Router
const router = createBrowserRouter([...publicRoute, ...privetRoute]);

// export default router
export default router;
