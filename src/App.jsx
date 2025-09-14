import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import TemplateEditor from "./pages/TemplateEditor";
import TemplatePreview from "./pages/TemplatePreview";
import PageNotFound from "./pages/PageNotFound";
import TemplateRender from "./pages/TemplateRender";
import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard";
import Templates from "./pages/Templates";
import Collections from "./pages/Collections";
import Analytics from "./pages/Analytics";
import DigitalPage from "./pages/DigitalPage";
import ForgotPassword from "./pages/ForgotPassword";
import EmailVerification from "./pages/EmailVerification";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route index element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/editor/:web_id" element={<TemplateEditor />} />
        <Route path="/preview" element={<TemplatePreview />} />
        <Route path="/render" element={<TemplateRender />} />
        <Route path="/setting" element={<Settings />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/template" element={<Templates />} />
        <Route path="/collection" element={<Collections />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/email-verification" element={<EmailVerification />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/not-found" element={<PageNotFound />} />
        <Route path="/:link" element={<DigitalPage />} />
        {/* route bellow will work after all syste m connect with backend */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;
