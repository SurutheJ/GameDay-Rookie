import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import GuideBasketball from "./pages/GuideBasketball";
import Quiz from "./pages/Quiz";
import LiveCompanion from "./pages/LiveCompanion";
import CheatSheet from "./pages/CheatSheet";
import PlayerPathway from "./pages/PlayerPathway";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/guide/basketball" element={<GuideBasketball />} />
          <Route path="/guide/basketball/quiz" element={<Quiz />} />
          <Route path="/watch/live-companion" element={<LiveCompanion />} />
          <Route path="/cheatsheet" element={<CheatSheet />} />
          <Route path="/play/pathway" element={<PlayerPathway />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
