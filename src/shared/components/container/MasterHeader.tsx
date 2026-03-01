import { Box, GridProps, styled } from '@mui/material';

const StickyContainer = styled(Box)(({ theme }) => ({
    boxShadow: theme?.boxShadow[4],
    flex: '0 0 auto'
}));

export const MasterHeader = (props: GridProps) => {
    const { children, sx, ...others } = props;

    return (
        <StickyContainer {...others} >
            {children}
        </StickyContainer>
    );
}
