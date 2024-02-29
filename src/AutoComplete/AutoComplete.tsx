import type { AriaAttributes } from "react";

import * as styles from "./AutoComplete.css";

interface Props extends Pick<AriaAttributes, "aria-labelledby"> {}

export function AutoComplete(props: Props) {
  const { "aria-labelledby": ariaLabelledBy } = props;

  return (
    <div>
      <button type="button" className={styles.input()}>
        Button
      </button>
      <input
        type="text"
        aria-labelledby={ariaLabelledBy}
        className={styles.input()}
      />
      <ol className={styles.suggestList()}>
        <li className={styles.suggestItem()}>
          <button type="button" className={styles.suggestButton()}>
            Foo
          </button>
        </li>
        <li className={styles.suggestItem()}>
          <button type="button" className={styles.suggestButton()}>
            Bar
          </button>
        </li>
        <li className={styles.suggestItem()}>
          <button type="button" className={styles.suggestButton()}>
            Baz
          </button>
        </li>
        <li className={styles.suggestItem()}>
          <button type="button" className={styles.suggestButton()}>
            Qux
          </button>
        </li>
      </ol>
    </div>
  );
}
