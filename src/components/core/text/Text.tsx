import { isHeading, isParagraph } from "datocms-structured-text-utils";
import { FC } from "react";
import {
  StructuredText,
  StructuredTextDocument,
  renderMarkRule,
  renderNodeRule,
} from "react-datocms";

interface TextProps {
  classNames: {
    heading?: string;
    mark?: string;
    paragraph?: string;
    strong?: string;
  };
  data: StructuredTextDocument;
}

const customHeadingNode = (className?: string) =>
  renderNodeRule(
    isHeading,
    ({ adapter: { renderNode }, children, key, node }) => {
      const Heading = `h${node.level}` as keyof JSX.IntrinsicElements;
      return renderNode(Heading, { key, className }, children);
    }
  );

const customParagraphNode = (className?: string) =>
  renderNodeRule(isParagraph, ({ adapter: { renderNode }, children, key }) => {
    return renderNode("p", { key, className }, children);
  });

const customMarkNode = (className?: string) =>
  renderMarkRule("highlight", ({ adapter: { renderNode }, children, key }) => {
    return renderNode("span", { key, className }, children);
  });

const customStrongNode = (className?: string) =>
  renderMarkRule("strong", ({ adapter: { renderNode }, children, key }) => {
    return renderNode("strong", { key, className }, children);
  });

export const Text: FC<TextProps> = ({ classNames, data }) => {
  return (
    <StructuredText
      data={data}
      customNodeRules={[
        customHeadingNode(classNames.heading),
        customParagraphNode(classNames.paragraph),
      ]}
      customMarkRules={[
        customMarkNode(classNames.mark),
        customStrongNode(classNames.strong),
      ]}
    />
  );
};
