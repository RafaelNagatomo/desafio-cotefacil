import { Box, GridProps, styled } from '@mui/material';

const FlexContainer = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    height: '100vh',
}));

export const MasterContainer = (props: GridProps) => {
    const { children, ...others } = props;

    return (
        <FlexContainer {...others}>
            {children}
        </FlexContainer>
    );
}
