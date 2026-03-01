import { ColorSchema } from "../interfaces";

export const colorSchema: ColorSchema = {
    brand: {
        primary: {
            50: "#EDE5FC",
            100: "#C1B6EC",
            200: "#8B72ED",
            300: "#8247FF",
            400: "#7417EA",
            500: "#5D0AC6",
            600: "#171251",
        },

        secondary: {
            50: "#EBEDF9",
            100: "#C1CDE3",
            200: "#899AC4",
            300: "#596CB4",
            400: "#4B55AD",
            500: "#3C4596",
            600: "#282F74",
        },
    },

    neutral: {
        grey: {
            50: "#FAFAFA",
            100: "#F1F1F1",
            200: "#7f848a",
            300: "#687078",
            400: "#373F47",
            500: "#2A2D31",
            600: "#212426",
        },

        base: {
            white: "#FFFFFF",
            black: "#000000",
        },
    },

    feedback: {
        danger: {
            50: "#FFF4EC",
            100: "#FFE8D7",
            200: "#FFA988",
            300: "#E02E13",
            400: "#9F0A10",
            500: "#570508",
            600: "#3a0103",
        },

        warning: {
            50: "#FFFEEC",
            100: "#FFF9CF",
            200: "#FFE86F",
            300: "#FFCF0F",
            400: "#B18705",
            500: "#4F3903",
            600: "#312300",
        },

        success: {
            50: "#F6FFF0",
            100: "#E6FBD9",
            200: "#A0EC8A",
            300: "#2B8624",
            400: "#0C6014",
            500: "#043812",
            600: "#01250b",
        },

        information: {
            50: "#EFF3FF",
            100: "#CFDCFF",
            200: "#759BFF",
            300: "#2661F6",
            400: "#1B4AC5",
            500: "#0F2E7F",
            600: "#071f5c",
        },
    },

    focus: "#FFA43A",
};
