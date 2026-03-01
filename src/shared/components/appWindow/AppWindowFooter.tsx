import { Box, GridProps, styled } from '@mui/material';

const WindowFooter = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    paddingTop: theme?.customSpacing?.m,
    paddingBottom: theme?.customSpacing?.l,
    borderRadius: `${theme?.radius?.l} ${theme?.radius?.l} 0 0`,
}));

export const AppWindowFooter = (props: GridProps) => {
    const { children, sx, ...others } = props;

    return (
        <WindowFooter {...others} />
    );
}
