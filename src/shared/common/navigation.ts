import { useNavigate } from "react-router-dom";

export interface Navigator {
    to: (path: string) => void;
    getCurrentPath: () => string;
}

export const useNavigation = (): Navigator => {
    const navigate = useNavigate();

    const to = (path: string): void => {
        setTimeout(() => {
            navigate(path);
        }, 100);
    };

    const getCurrentPath = (): string => {
        return location.pathname;
    };

    return { to, getCurrentPath };
};
