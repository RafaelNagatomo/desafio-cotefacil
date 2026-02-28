import { Box, GridProps, styled } from '@mui/material';

const StickyContainer = styled(Box)(() => ({
    boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
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
