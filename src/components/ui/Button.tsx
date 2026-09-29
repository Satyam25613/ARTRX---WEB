import type { ComponentPropsWithoutRef, ReactNode } from "react";
import Link from "next/link";
import styles from "./Button.module.css";

type CommonProps = {
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
  icon?: ReactNode;
  children: ReactNode;
};

type LinkButtonProps = CommonProps & { href: string } & Omit<
    ComponentPropsWithoutRef<typeof Link>,
    "href" | "className"
  >;

type NativeButtonProps = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, "className"> & { href?: undefined };

type ButtonProps = LinkButtonProps | NativeButtonProps;

export function Button({
  variant = "primary",
  fullWidth = false,
  icon,
  children,
  ...props
}: ButtonProps) {
  const className = [
    styles.button,
    variant === "secondary" ? styles.secondary : styles.primary,
    fullWidth ? styles.fullWidth : "",
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {icon ? (
        <span className={styles.iconChip} aria-hidden="true">
          {icon}
        </span>
      ) : null}
      {children}
    </>
  );

  if ("href" in props && props.href) {
    const { href, ...rest } = props;
    return (
      <Link href={href} className={className} {...rest}>
        {content}
      </Link>
    );
  }

  const buttonProps = props as ComponentPropsWithoutRef<"button">;
  return (
    <button className={className} {...buttonProps}>
      {content}
    </button>
  );
}
