import { ReactNode } from "react";
import { default as NextLink } from "next/link";
import { Link as NextUILink } from "@nextui-org/react";

type LinkText = ReactNode | ReactNode[];

interface Props {
  href: string;
  children: LinkText;
}

export const Link = ({ href, children }: Props) => {
  return (
    <NextLink href={href}>
      <NextUILink>{children}</NextUILink>
    </NextLink>
  );
};
