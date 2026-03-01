import { Box, GridProps, styled } from '@mui/material';

const paddingBody = {
    paddingTop: { xs: 2, md: 2 },
    paddingLeft: { xs: 2, md: 4 },
    paddingRight: { xs: 2, md: 4 },
    paddingBottom: { xs: 0 }
};

const ElasticContainer = styled(Box)(() => ({
    display: 'flex',
    flex: '1',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
}));

export const MasterBody = (props: GridProps) => {
    const { children, ...others } = props;

    return (
        <ElasticContainer {...paddingBody} {...others}>
            {children}
        </ElasticContainer>
    );
}
