import { ColorSchema, PaletteMode, PaletteSchema } from "../interfaces";

export const DarkPalette = (tokens: ColorSchema): PaletteSchema => {
    const c = tokens;

    return {
        mode: PaletteMode.DARK,
        primary: {
            main: c.brand?.primary[400],
            default: c.brand?.primary[200],
            onDefault: c.neutral?.base?.white,
            muted: c.brand?.primary[500],
            onMuted: c.brand?.primary[50],
            inverse: c.brand?.primary[600],
            onInverse: c.brand?.primary[100],
            outline: c.brand?.primary[300],
        },

        secondary: {
            main: c.brand?.secondary[400],
            default: c.brand?.secondary[200],
            onDefault: c.neutral?.base?.white,
            muted: c.brand?.secondary[500],
            onMuted: c.brand?.secondary[50],
            inverse: c.brand?.secondary[600],
            onInverse: c.brand?.secondary[100],
            outline: c.brand?.secondary[300],
        },

        surface: {
            main: c.neutral.grey[400],
            default: c.neutral.grey[200],
            onDefault: c.neutral?.base?.white,
            muted: c.neutral.grey[500],
            onMuted: c.neutral.grey[50],
            inverse: c.neutral.grey[600],
            onInverse: c.neutral.grey[100],
            outline: c.neutral.grey[300],
        },

        danger: {
            main: c.feedback.danger[400],
            default: c.feedback.danger[200],
            onDefault: c.neutral?.base?.white,
            muted: c.feedback.danger[500],
            onMuted: c.feedback.danger[50],
            inverse: c.feedback.danger[600],
            onInverse: c.feedback.danger[100],
            outline: c.feedback.danger[300],
        },

        warning: {
            main: c.feedback.warning[400],
            default: c.feedback.warning[200],
            onDefault: c.neutral?.base?.white,
            muted: c.feedback.warning[500],
            onMuted: c.feedback.warning[50],
            inverse: c.feedback.warning[600],
            onInverse: c.feedback.warning[100],
            outline: c.feedback.warning[300],
        },

        success: {
            main: c.feedback.success[400],
            default: c.feedback.success[200],
            onDefault: c.neutral?.base?.white,
            muted: c.feedback.success[500],
            onMuted: c.feedback.success[50],
            inverse: c.feedback.success[600],
            onInverse: c.feedback.success[100],
            outline: c.feedback.success[300],
        },

        information: {
            main: c.feedback.information[400],
            default: c.feedback.information[200],
            onDefault: c.neutral?.base?.white,
            muted: c.feedback.information[500],
            onMuted: c.feedback.information[50],
            inverse: c.feedback.information[600],
            onInverse: c.feedback.information[100],
            outline: c.feedback.information[300],
        },

        disabled: {
            default: c.neutral?.grey[500],
            onDefault: c.neutral?.grey[300],
        },

        fixed: {
            light: c.neutral.base.white,
            dark: c.neutral.base.black,
        },

        focus: c.focus,
    };
};
