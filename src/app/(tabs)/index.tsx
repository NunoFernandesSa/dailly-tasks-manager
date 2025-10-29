import SafeAreaContent from "@/src/components/common/safe-area-content";
import HeaderContent from "@/src/components/ui/HeaderContent";
import useTodos from "@/src/hooks/useTodos";
import React from "react";

export default function DashboardPage() {
  const { todos } = useTodos();

  return (
    <SafeAreaContent>
      <HeaderContent />
    </SafeAreaContent>
  );
}
