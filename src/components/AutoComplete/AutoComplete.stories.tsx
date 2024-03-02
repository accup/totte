import type { Meta, StoryObj } from "@storybook/react";
import {
  type ComponentProps,
  type ReactNode,
  useCallback,
  useState,
} from "react";

import { AutoComplete } from "./AutoComplete";

const WORDS = [
  "Foo",
  "Bar",
  "Baz",
  "Qux",
  "Quux",
  "Corge",
  "Grault",
  "Garply",
  "Waldo",
  "Fred",
  "Plugh",
  "Xyzzy",
  "Thud",
];

const OPTIONS = WORDS.flatMap((first) =>
  WORDS.flatMap((second) => WORDS.map((third) => `${first}${second}${third}`)),
);

type Option = string;

function ControlledAutoComplete(
  props: Omit<
    ComponentProps<typeof AutoComplete<Option>>,
    | "multiselect"
    | "value"
    | "options"
    | "renderOption"
    | "onSelect"
    | "onSearch"
  >,
) {
  const [value, setValue] = useState<Option>("");
  const [searchValue, setSearchValue] = useState<string>("");
  const [options, setOptions] = useState<Option[]>(() => []);

  const renderOption = useCallback(
    (option: Option): ReactNode => {
      const segments = option.toLowerCase().split(searchValue.toLowerCase());

      let cursor = 0;

      return segments.map((segment) => {
        const unmatched = option.slice(cursor, cursor + segment.length);
        const matched = option.slice(
          cursor + segment.length,
          cursor + segment.length + searchValue.length,
        );
        cursor += segment.length + searchValue.length;

        return (
          <>
            {unmatched}
            <b>{matched}</b>
          </>
        );
      });
    },
    [searchValue],
  );

  const handleSearch = useCallback(
    (value: string) => {
      const lowerValue = value.toLowerCase();

      setSearchValue(value);

      const options =
        value === ""
          ? []
          : OPTIONS.filter((option) =>
              option.toLowerCase().includes(lowerValue),
            );
      setOptions(options);
    },
    [setValue, setOptions],
  );

  return (
    <AutoComplete
      value={value}
      options={options}
      renderOption={renderOption}
      onSelect={setValue}
      onSearch={handleSearch}
      {...props}
    />
  );
}

const meta = {
  component: ControlledAutoComplete,
  parameters: {
    controls: { exclude: "optionKey" },
  },
} satisfies Meta<typeof ControlledAutoComplete>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base = {
  args: {
    placeholder: "Search",
    optionKey: (option) => option,
    renderValue: (option) => option,
  },
} satisfies Story;
