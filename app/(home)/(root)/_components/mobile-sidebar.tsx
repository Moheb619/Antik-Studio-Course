import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sidebar } from "./sidebar";

export const MobileSidebar = () => {
  return (
    // Show when in mobile screen
    <Sheet>
      <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
        {/* Icon to show menu */}
        <Menu />
      </SheetTrigger>
      {/* Content of the sidebar */}
      <SheetContent side="left" className="p-0 bg-white">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};
