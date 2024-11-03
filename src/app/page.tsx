import { Paragraph, TextTitle } from "@/components/typography/Typography";

export default function Page() {
  return (
    <div className="h-[2000px]">
      <TextTitle title="Introduction" />
      <Paragraph>
        You can also use variant modifiers to target media queries like
        responsive breakpoints, dark mode, prefers-reduced-motion, and more. For
        example, use md:bg-green-500 to apply the bg-green-500 utility at only
        medium screen sizes and above. hjshdhsd haryo
      </Paragraph>
    </div>
  );
}
