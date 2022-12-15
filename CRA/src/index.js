import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// createBrowserRouter는 라우터 경로를 생성하는 함수입니다.
// RouterProvider는 우리가 createBrowserRouter에서 만든 경로를 리액트에게 제공하는 역할을 합니다.
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./route/root";
import ErrorPage from "./error-page";
import Contact from "./route/contacts";

const router = createBrowserRouter([
  {
    path: "/", // 경로 설정
    element: <Root />, // 해당 경로에 나올 JSX 설정
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contacts/:contactId", // 뒤에 숫자를 받아서 숫자를 페이지에 전달
        element: <Contact />,
      },
    ],
  },
  // {
  //   // 일반 페이지가 이동이 되는 라우팅
  //   path: "contacts/:contactId", // 뒤에 숫자를 받아서 숫자를 페이지에 전달
  //   element: <Contact />,
  // },
]);

// RouterProvider에서 정보를 제공 받아서 사용 하겠다
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
