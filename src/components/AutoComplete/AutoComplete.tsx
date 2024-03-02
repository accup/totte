import {
  type AriaAttributes,
  type ChangeEventHandler,
  type Key,
  type ReactNode,
  useCallback,
  useState,
} from "react";

import * as styles from "./AutoComplete.css";

type SingleSelectProps<TOption> = {
  /**
   * Whether to allow multiple options to be selected.
   *
   * @default false
   */
  readonly multiselect?: false;

  /**
   * The selected option.
   */
  readonly value?: TOption;
};

type MultiselectProps<TOption> = {
  /**
   * Whether to allow multiple options to be selected.
   *
   * @default false
   */
  readonly multiselect: true;

  /**
   * The selected options.
   */
  readonly value?: readonly TOption[];
};

type SingleOrMultiselectProps<TOption> =
  | SingleSelectProps<TOption>
  | MultiselectProps<TOption>;

type AriaProps = Pick<AriaAttributes, "aria-labelledby" | "aria-label">;

type Props<TOption> = (SingleOrMultiselectProps<TOption> & AriaProps) & {
  /**
   * Placeholder for the input.
   */
  readonly placeholder: ReactNode;

  /**
   * Options to suggest.
   */
  readonly options: readonly TOption[];

  /**
   * Get the key for an option.
   *
   * @param option The option to get the key for.
   * @returns The key for the option.
   */
  readonly optionKey: (this: void, option: TOption) => Key;

  /**
   * Render an option in the input.
   *
   * @param option The option to render.
   */
  readonly renderValue: (this: void, option: TOption) => ReactNode;

  /**
   * Render an option in the suggestion list.
   *
   * @param option The option to render.
   */
  readonly renderOption: (this: void, option: TOption) => ReactNode;

  /**
   * Render a group in the suggestion list.
   *
   * @param group The group to render.
   */
  readonly renderGroup?: (this: void, group: string) => ReactNode;

  /**
   * Callback when an option is selected.
   *
   * @param option The selected option.
   */
  readonly onSelect: (this: void, option: TOption) => void;

  /**
   * Callback when the input value is changed.
   *
   * @param value The input value.
   */
  readonly onSearch: (this: void, value: string) => void;
};

export function AutoComplete<TOption>(props: Props<TOption>): ReactNode {
  const {
    multiselect = false,
    value,
    options,
    placeholder,
    optionKey,
    renderOption,
    renderValue,
    renderGroup,
    onSelect,
    onSearch,
    "aria-labelledby": ariaLabelledBy,
    "aria-label": ariaLabel,
  } = props;

  const [inputValue, setInputValue] = useState("");

  const search = useCallback(
    (value: string) => {
      setInputValue(value);
      onSearch(value);
    },
    [setInputValue, onSearch],
  );

  const handleInputChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (event) => {
      search(event.target.value);
    },
    [search],
  );

  return (
    <div className={styles.container()}>
      <button type="button" className={styles.input()}>
        Button
      </button>
      <div>{placeholder}</div>
      <input
        type="text"
        value={inputValue}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        className={styles.input()}
        placeholder=""
        onChange={handleInputChange}
      />
      <ol className={styles.suggestList({ blockSize: "medium" })}>
        {options.map((option) => (
          <Option
            key={optionKey(option)}
            option={option}
            renderOption={renderOption}
            search={search}
            onSelect={onSelect}
          />
        ))}
      </ol>
    </div>
  );
}

type OptionProps<TOption> = {
  readonly option: TOption;
  readonly renderOption: (this: void, option: TOption) => ReactNode;
  readonly search: (this: void, value: string) => void;
  readonly onSelect: (this: void, option: TOption) => void;
};

function Option<TOption>(props: OptionProps<TOption>) {
  const { option, renderOption, search, onSelect } = props;

  const handleClick = useCallback(() => {
    search("");
    onSelect(option);
  }, [option, search, onSelect]);

  return (
    <li className={styles.suggestItem()}>
      <button
        type="button"
        className={styles.suggestButton()}
        onClick={handleClick}
      >
        {renderOption(option)}
      </button>
    </li>
  );
}
