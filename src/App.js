
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from 'react';
import './App.css'



import Email from './screens/authentication/email-message/email';
import ForgotPassword from './screens/authentication/forgotpassword/forgotpass';



import { AuthProvider } from 'react-auth-kit'
import { RequireAuth } from 'react-auth-kit'

import PasswordReset from './screens/authentication/forgotpassword/passwordreset';

import Loader from './components/loader/loader';



const LoginPage = lazy(() =>
wait(2000).then(() => import("./screens/authentication/login/login"))
);



const User = lazy(() =>
wait(1000).then(() => import("./screens/user/user"))
);
const UserDashboardPage = lazy(() =>
wait(500).then(() => import("./screens/user/dashboard/userDashboard"))
);
const UserSarfCreate = lazy(() =>
wait(500).then(() => import("./screens/user/sarfManagement/createsarf/createSarf"))
);
const UserSarfEvaluation = lazy(() =>
wait(500).then(() => import("./screens/user/sarfManagement/evaluation/sarfEvaluation"))
);
const UserProfile = lazy(() =>
wait(500).then(() => import("./screens/user/profile/profile"))
);
const CalendarSchedule = lazy(() =>
wait(500).then(() => import("./screens/user/calendar/calendar"))
);




const Admin = lazy(() =>
wait(1000).then(() => import("./screens/admin/admin"))
);
const AdminDashboard = lazy(() =>
  wait(500).then(() =>import("./screens/admin/dashboard/adminDashboard"))
);
const AdminSarfStatusPage = lazy(() =>
wait(500).then(() => import("./screens/admin/sarfTracking/sarfStatus/sarfStatus"))
);
const AdminSarfEvaluationPage = lazy(() =>
wait(500).then(() =>import("./screens/admin/sarfTracking/evaluation/sarfEvaluation"))
);
const AdminUserManagementPage = lazy(() =>
wait(500).then(() =>import("./screens/admin/userManagement/users/userManagement"))
);
const AdminOrganizationManagement = lazy(() =>
wait(500).then(() =>import("./screens/admin/userManagement/organization/organization"))
);
const AdminPermissionManagement = lazy(() =>
wait(500).then(() =>import("./screens/admin/userManagement/permission/permission"))
);
const PositionManagement = lazy(() =>
wait(500).then(() =>import("./screens/admin/userManagement/position/position"))
);





function App() {
  return (
    <div className="App">
      <AuthProvider authType={'cookie'}
        authName={'_auth'}
        cookieDomain={window.location.hostname}
        cookieSecure={window.location.protocol === "https:"}>
        <BrowserRouter>

          <Routes>
            <Route path="/" element={<Navigate replace to="/login" />} />

            <Route path="/login" element={
            
            <Suspense fallback={<Loader/>}>
                <LoginPage />
            </Suspense>
            } />
    
       
          <Route path="/email" element={<Email/>} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/password-reset" element={<PasswordReset />} />
   
          {/* //user Realm */}
            <Route path="/user" element={
              // <RequireAuth loginPath={'/login'}>
                <Suspense fallback={<Loader/>}>
                   <User/>
                </Suspense>
              // </RequireAuth>}
            }>

              <Route path="/user/dashboard" element={<UserDashboardPage/>} />
              <Route path="/user/create-sarf" element={<UserSarfCreate/>} />
              <Route path="/user/evaluate-sarf" element={<UserSarfEvaluation/>} />
              <Route path="/user/calendar" element={<CalendarSchedule/>} />
              <Route path="/user/profile" element={<UserProfile/>} />


            </Route>
            

            



            {/* //Admin Realm */}
            <Route path="/admin" element={
              <Suspense fallback={<Loader/>}>
                 <Admin/>
              </Suspense>
           
              } >

              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/sarf-evaluation" element={<AdminSarfEvaluationPage  />} />
              <Route path="/admin/sarf-status" element={<AdminSarfStatusPage  />} />
              <Route path="/admin/manage-user" element={<AdminUserManagementPage/>} />
              <Route path="/admin/manage-permission" element={<AdminPermissionManagement />} />
              <Route path="/admin/calendar" element={<CalendarSchedule/>} />
              <Route path="/admin/manage-organization" element={<AdminOrganizationManagement/>} />
              <Route path="/admin/position" element={<PositionManagement/>} />

            </Route>  
            
          </Routes>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

function wait(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

export default App;
