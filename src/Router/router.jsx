
import { createBrowserRouter } from "react-router-dom";
import Main from "../component/Main/Main";
import Home from "../component/Home/Home";
import Gallery from "../component/Gallery/Gallery";
import Free_resource from "../component/Free_resource/Free_resource";
import ErrorPage from "../component/ErrorPage/ErrorPage";
import E_Books from "../component/Free_resource/Free_course_inner_page/E_Books";
import LiveOnlineSeminar from "../component/Free_resource/Free_course_inner_page/LiveOlineSeminar/LiveOnlineSeminar";
import Gre_Quiz from "../component/Free_resource/Free_course_inner_page/Gre_Quiz/Gre_Quiz";
import Videos from "../component/Free_resource/Free_course_inner_page/Videos/Videos";
import Login from "../component/Login_Registration/Login";
import Registration from "../component/Login_Registration/Registration";
import ReadBookPage from "../component/Free_resource/Free_course_inner_page/ReadBookPage/ReadBookPage";
import axios from "axios";
import UniversityRegistration from "../component/UniversityRegistration/UniversityRegistration";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <ErrorPage />,
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
        path: "/blog",
        element: <Gallery />
      },
      {
        path: "/free_resource",
        element: <Free_resource />,
        children:[
          {
            path:'live_online_seminar',
            element: <LiveOnlineSeminar />,
          },
          {
            path: "live_online_seminar/:id",
            element: <UniversityRegistration />,
            loader: async ({ params }) => {
              try {
                const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/liveOnlineSeminar/${params.id}`);
                return response.data;
              } catch (error) {
                console.error(error);
                throw error;
              }
            }
             
          },
          {
            path:"e_books",
            element: <E_Books />
          },
          {
            path: "gre_quiz",
            element:<Gre_Quiz />
          },
          {
            path: "videos",
            element: <Videos />
          },
          {
            path: "e_books/:id",
            element: <ReadBookPage />,
            loader: async ({ params }) => {
              try {
                const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/ebook/${params.id}`);
                return response.data;
              } catch (error) {
                console.error(error);
                throw error;
              }
            }
             
          }
        ]
      }
      
      ]
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/sign_up",
      element: <Registration />
    },
  ]);

export default router;