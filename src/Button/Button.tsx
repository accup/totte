import type { ReactNode } from "react";

import type { DistributiveProps } from "../types/props";

import * as styles from "./Button.css";

type LinkProps = DistributiveProps<"a", "href">;
type ButtonProps = DistributiveProps<"button">;

type Props = LinkProps | ButtonProps;

export function Button(props: Props): ReactNode {
  return "href" in props ? (
    <a {...props} className={styles.container()} />
  ) : (
    <button {...props} className={styles.container()} />
  );
}
