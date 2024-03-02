import type { AriaAttributes } from "react";

import * as styles from "./AutoComplete.css";

type AriaProps = Pick<AriaAttributes, "aria-labelledby" | "aria-label">;

interface Props extends AriaProps {}

export function AutoComplete(props: Props) {
  const { "aria-labelledby": ariaLabelledBy, "aria-label": ariaLabel } = props;

  const options: readonly { value: string }[] = [
    { value: "Foo" },
    { value: "Bar" },
    { value: "Baz" },
    { value: "Qux" },
  ];

  return (
    <div className={styles.container()}>
      <button type="button" className={styles.input()}>
        Button
      </button>
      <input
        type="text"
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        className={styles.input()}
      />
      <ol className={styles.suggestList()}>
        {options.map((option) => (
          <li key={option.value} className={styles.suggestItem()}>
            <button type="button" className={styles.suggestButton()}>
              {option.value}
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
