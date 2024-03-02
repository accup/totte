import type { ComponentPropsWithoutRef, ElementType } from "react";

/**
 * A type that distributes the props of a component by a specific property.
 *
 * @template T - The type of the component.
 * @template TRequiredProp - The required property(s) of the component.
 */
export type DistributiveProps<
  T extends ElementType,
  TRequiredProp extends keyof ComponentPropsWithoutRef<T> = never,
> = Omit<ComponentPropsWithoutRef<T>, TRequiredProp> &
  Required<Pick<ComponentPropsWithoutRef<T>, TRequiredProp>>;
