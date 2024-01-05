import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../views/Main";
import Login from "../views/Login";
import { RequireAuth } from "../context/RequireAuth";
import ListFiles from "../views/ListFiles";

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth>
                <Main />
              </RequireAuth>
            }
          >
            <Route path="/:id" element={<ListFiles />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RouterApp;
