import { Box, GridProps, styled, useTheme } from '@mui/material';
import { BookOpenIcon, MaximizeIcon, PlusIcom } from '@components/index';

const WindowFooter = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: theme?.customSpacing?.m,
    borderRadius: `${theme?.radius?.l} ${theme?.radius?.l} 0 0`,
}));


export const AppWindowFooter = (props: GridProps) => {
    const { children, sx, ...others } = props;
    const theme = useTheme()
    
    const iconStyle = {
        color: theme?.palette?.surface?.textSecondary,
        fontSize: 20,
    }

    return (
        <WindowFooter {...others}>
            <PlusIcom style={iconStyle} />
            <BookOpenIcon style={iconStyle} />
            <MaximizeIcon style={iconStyle} />
        </WindowFooter>
    );
}
