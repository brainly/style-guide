import * as React from "react";
import Headline from "../../components/text/Headline";
import Box from "../../components/box/Box";
import Flex from "../../components/flex/Flex";
import PageHeaderImage from "../assets/component_top.png";
import foundationTopImage from "../assets/foundation_top.png";
import utilityTopImage from "../assets/utility_top.png";
import accesibilityTopImage from "../assets/accessibility_top.png";
type PageHeaderPropsType = {
  children: React.ReactNode;
  type?: "component" | "foundation" | "utility" | "accesibility";
};
const typeToImage = {
  component: PageHeaderImage,
  foundation: foundationTopImage,
  utility: utilityTopImage,
  accesibility: accesibilityTopImage,
};

const PageHeader = ({ children, type = "component" }: PageHeaderPropsType) => {
  return (
    <Flex marginBottom="l">
      <Box
        style={{
          backgroundImage: `url(${typeToImage[type]})`,
          backgroundPosition: "right center",
          backgroundSize: "cover",
        }}
        padding="xl"
      >
        <Headline size="xxlarge" color="text-white" extraBold>
          {children}
        </Headline>
      </Box>
    </Flex>
  );
};

export default PageHeader;