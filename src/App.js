import { ToastContainer } from 'react-toastify';
import './App.css';
import Home from './MyComponent/AllPages/Home';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './MyComponent/AllPages/Login';
import Register from './MyComponent/AllPages/Register';
import ForgetPassword from './MyComponent/AllPages/ForgetPassword';
import Contact from './MyComponent/AllPages/Contact';
import Service from './MyComponent/AllPages/Service';
import ServiceSingle from './MyComponent/AllPages/ServiceSingle';
import Blog from './MyComponent/AllPages/Blog';

function App() {

  <ToastContainer />;
  function PrivateRoute({ children }) {
    const token =
      localStorage.getItem("auth") || sessionStorage.getItem("auth");
    return token !== null && token !== undefined ? (
      children
    ) : (
      <Navigate to="/login" />
    );
  }
  //public route
  const publicRouter = [
    {
      path: "/login",
      Component: <Login />,
    },
    {
      path: "/register",
      Component: <Register />,
    },
    {
      path: "/forgetpassword",
      Component: <ForgetPassword />,
    },
  ];

  //protected router
  const privateRoute = [
    {
      path: "/",
      Component: <Home />,
    },
    {
      path: "/service",
      Component: <Service />,
    },
    {
      path: "/contact",
      Component: <Contact />,
    },
    {
      path: "/serviceSingle",
      Component: <ServiceSingle />,
    },
    {
      path: "/blog",
      Component: <Blog />,
    },
  ];
  return (
    <>
      <Routes>
        {publicRouter?.map((route, index) => {
          return (
            <>
              <Route
                Key={index + 1}
                exact
                path={route?.path}
                element={route?.Component}
              />
            </>
          );
        })}
        {privateRoute?.map((proute, index) => {
          return (
            <>
              <Route
                Key={index + 1}
                exact
                path={proute?.path}
                element={<PrivateRoute>{proute?.Component}</PrivateRoute>}
              />
            </>
          );
        })}
      </Routes>
    </>
  );
}

export default App;
