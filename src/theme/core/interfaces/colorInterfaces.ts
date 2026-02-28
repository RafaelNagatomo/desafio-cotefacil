export interface ColorScales {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
}

export interface BaseColors {
    white: string;
    black: string;
}

export interface BrandColors {
    primary: ColorScales;
    secondary: ColorScales;
}

export interface NeutralColors {
    grey: ColorScales;
    base: BaseColors;
}

export interface FeedbackColors {
    danger: ColorScales;
    warning: ColorScales;
    success: ColorScales;
    information: ColorScales;
}

export interface ColorSchema {
    brand: BrandColors;
    neutral: NeutralColors;
    feedback: FeedbackColors;
    focus: string;
}
