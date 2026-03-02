import { ColorSchema, PaletteSchema } from "../interfaces";

export const DarkPalette = (tokens: ColorSchema): PaletteSchema => {
    const c = tokens;

    return {
        primary: {
            main: c.brand.primary[500],
            default: c.brand.primary[300],
            onDefault: c.brand.primary[200],
            container: c.brand.primary[100],
            onContainer: c.brand.primary[600],
            hover: c.brand.primary[600],
        },

        secondary: {
            main: c.brand.secondary[600],
            default: c.brand.secondary[300],
            onDefault: c.brand.secondary[200],
            container: c.brand.secondary[100],
            onContainer: c.brand.secondary[600],
            hover: c.brand.secondary[400],
        },

        surface: {
            main: c.neutral.grey[500],
            background: c.neutral.grey[900],
            backgroundVariant: c.neutral.grey[700],
            surface: c.neutral.grey[800],
            surfaceVariant: c.neutral.grey[900],
            textPrimary: c.neutral.grey[100],
            textSecondary: c.neutral.grey[200],
            border: c.neutral.grey[600],
            divider: c.neutral.grey[900],
        },

        danger: {
            main: c.feedback.danger[500],
            default: c.feedback.danger[300],
            onDefault: c.feedback.danger[200],
            container: c.feedback.danger[100],
            onContainer: c.feedback.danger[600],
            hover: c.feedback.danger[400],
        },

        warning: {
            main: c.feedback.warning[500],
            default: c.feedback.warning[300],
            onDefault: c.feedback.warning[200],
            container: c.feedback.warning[100],
            onContainer: c.feedback.warning[600],
            hover: c.feedback.warning[400],
        },

        success: {
            main: c.feedback.success[500],
            default: c.feedback.success[300],
            onDefault: c.feedback.success[200],
            container: c.feedback.success[100],
            onContainer: c.feedback.success[600],
            hover: c.feedback.success[400],
        },

        disabled: {
            default: c.neutral.grey[800],
            onDefault: c.neutral.grey[600],
        },

        fixed: {
            light: c.neutral.base.white,
            dark: c.neutral.base.black,
        },

        focus: c.focus,
    };
};
