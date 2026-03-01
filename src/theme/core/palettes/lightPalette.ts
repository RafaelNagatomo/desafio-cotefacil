import { ColorSchema, PaletteMode, PaletteSchema } from "../interfaces";

export const LightPalette = (tokens: ColorSchema): PaletteSchema => {
    const c = tokens;

    return {
        mode: PaletteMode.LIGHT,
        primary: {
            main: c.brand.primary[400],
            default: c.brand.primary[300],
            onDefault: c.neutral.base.white,
            muted: c.brand.primary[50],
            onMuted: c.brand.primary[500],
            inverse: c.brand.primary[100],
            onInverse: c.brand.primary[600],
            hover: c.brand.primary[200],
        },

        secondary: {
            main: c.brand.secondary[400],
            default: c.brand.secondary[300],
            onDefault: c.neutral.base.white,
            muted: c.brand.secondary[50],
            onMuted: c.brand.secondary[500],
            inverse: c.brand.secondary[100],
            onInverse: c.brand.secondary[600],
            hover: c.brand.secondary[200],
        },

        surface: {
            main: c.neutral.grey[400],
            default: c.neutral.grey[300],
            onDefault: c.neutral.base.white,
            muted: c.neutral.grey[50],
            onMuted: c.neutral.grey[500],
            inverse: c.neutral.grey[100],
            onInverse: c.neutral.grey[600],
            hover: c.neutral.grey[200],
        },

        danger: {
            main: c.feedback.danger[400],
            default: c.feedback.danger[300],
            onDefault: c.neutral.base.white,
            muted: c.feedback.danger[50],
            onMuted: c.feedback.danger[500],
            inverse: c.feedback.danger[100],
            onInverse: c.feedback.danger[600],
            hover: c.feedback.danger[200],
        },

        warning: {
            main: c.feedback.warning[400],
            default: c.feedback.warning[300],
            onDefault: c.neutral.base.white,
            muted: c.feedback.warning[50],
            onMuted: c.feedback.warning[500],
            inverse: c.feedback.warning[100],
            onInverse: c.feedback.warning[600],
            hover: c.feedback.warning[200],
        },

        success: {
            main: c.feedback.success[400],
            default: c.feedback.success[300],
            onDefault: c.neutral.base.white,
            muted: c.feedback.success[50],
            onMuted: c.feedback.success[500],
            inverse: c.feedback.success[100],
            onInverse: c.feedback.success[600],
            hover: c.feedback.success[200],
        },

        information: {
            main: c.feedback.information[400],
            default: c.feedback.information[300],
            onDefault: c.neutral.base.white,
            muted: c.feedback.information[50],
            onMuted: c.feedback.information[500],
            inverse: c.feedback.information[100],
            onInverse: c.feedback.information[600],
            hover: c.feedback.information[200],
        },

        disabled: {
            default: c.neutral.grey[200],
            onDefault: c.neutral.grey[300],
        },

        fixed: {
            light: c.neutral.base.white,
            dark: c.neutral.base.black,
        },

        focus: c.focus,
    };
};
