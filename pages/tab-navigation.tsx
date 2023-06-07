import type { NextPage } from "next";
import { DemoPage } from "components/DemoPage";
import { useState } from "react";
import { TabNavigation } from "lib/ui/TabNavigation";
import { capitalizeFirstLetter } from "lib/shared/utils/capitalizeFirstLetter";
import { VStack } from "lib/ui/Stack";
import { Text } from "lib/ui/Text";

const views = [
  "Overview",
  "Projects",
  "Habits",
  "Goals",
  "Tasks",
  "Settings",
  "Account",
  "Help",
] as const;
type View = typeof views[number];

const TabNavigationPage: NextPage = () => {
  const [activeView, setActiveView] = useState<View>("Overview");

  return (
    <DemoPage title="Tab Navigation">
      <VStack fullWidth gap={40}>
        <TabNavigation
          views={views}
          getViewName={capitalizeFirstLetter}
          activeView={activeView}
          onSelect={setActiveView}
          groupName="tab-navigation"
        />

        <Text size={20} weight="bold">
          {activeView} view
        </Text>
      </VStack>
    </DemoPage>
  );
};

export default TabNavigationPage;
