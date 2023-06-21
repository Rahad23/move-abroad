
import { createBrowserRouter } from "react-router-dom";
import Main from "../component/Main/Main";
import Home from "../component/Home/Home";
// import Undergraduate from "../component/Undergraduate/Undergraduate";
// import Masters from "../component/Masters/Masters";
// import Phd from "../component/Phd/Phd";
// import Diploma from "../component/Diploma/Diploma";
// import Evaluate_your_profile from "../component/Evaluate_your_profile/Evaluate_your_profile";
// import Skilled from "../component/Skilled/Skilled";
// import Unskilled from "../component/Unskilled/Unskilled";
// import Sponsored from "../component/Sponsored/Sponsored";
// import Non_sponsored from "../component/Non_sponsored/Non_sponsored";
// import Visa_processing from "../component/Visa_processing/Visa_processing";
// import Gre from "../component/GRE/Gre";
// import Pte from "../component/PTE/Pte";
// import Toeel from "../component/TOEEL/Toeel";
// import SAT from "../component/SAT/SAT";
// import Ote from "../component/OTE/OTE";
// import Free_resource from "../component/Free_resource/Free_resource";
// import Blog from "../component/Blog/Blog";
import Gallery from "../component/Gallery/Gallery";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children:[
      {
        path:"/",
        element: <Home />
      },
      {
        path:"/undergraduate",
        element:<Gallery />
      },
      {
        path: "/masters",
        element:<Gallery />
      },
      {
        path: "/phd",
        element:<Gallery />
      },
      {
        path: "/diploma",
        element:<Gallery />
      },
      {
        path:"/evaluate-your-profile",
        element:<Gallery />
      },
      {
        path: "/skilled",
        element:<Gallery />
      },
      {
        path: "/unskilled",
        element:<Gallery />
      },
      {
        path:"/sponsored",
        element:<Gallery />
      },
      {
        path:"/non_sponsored",
        element:<Gallery />
      },
      {
        path: "/visa_processing",
        element: <Gallery />
      },
      {
        path: "/GRE",
        element:<Gallery />
      },
      {
        path: "/PTE",
        element:<Gallery />
      },
      {
        path: "/TOEEL",
        element:<Gallery />
      },
      {
        path:"/SAT",
        element:<Gallery />
      },
      {
        path:"/OTE",
        element: <Gallery />
      },
      {
        path: "/free_resource",
        element: <Gallery />
      },
      {
        path: "/blog",
        element: <Gallery />
      },
      ]
    },
  ]);

export default router;