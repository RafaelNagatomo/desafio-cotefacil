export interface DisabledPalette {
    default?: string;
    onDefault?: string;
}

export interface FixedPalette {
    light?: string;
    dark?: string;
}

export interface BrandPalette {
    main: string;
    default?: string;
    onDefault?: string;
    muted?: string;
    onMuted?: string;
    inverse?: string;
    onInverse?: string;
    hover?: string;
}

export interface PaletteSchema {
    primary: BrandPalette;
    secondary: BrandPalette;
    surface: BrandPalette;
    danger: BrandPalette;
    warning: BrandPalette;
    success: BrandPalette;
    information: BrandPalette;

    disabled: DisabledPalette;
    fixed: FixedPalette;

    focus: string;
}
