import { ThemeFactory } from "@theme/core";

export const CounterTheme = () => {
    const factory = new ThemeFactory();
    return factory.create();
};