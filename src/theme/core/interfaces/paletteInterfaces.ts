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
    container?: string;
    onContainer?: string;
    hover?: string;
}

export interface SurfacePalette {
    main: string;
    background?: string;
    backgroundVariant?: string;
    surface?: string;
    surfaceVariant?: string;
    textPrimary?: string;
    textSecondary?: string;
    border?: string;
    divider?: string;
}

export interface PaletteSchema {
    primary: BrandPalette;
    secondary: BrandPalette;
    surface: SurfacePalette;
    danger: BrandPalette;
    warning: BrandPalette;
    success: BrandPalette;

    disabled: DisabledPalette;
    fixed: FixedPalette;

    focus: string;
}
