import { Box, Grid, Skeleton } from '@mui/material';
import PropTypes from 'prop-types';

ProductSkeletonList.propTypes = {
  length: PropTypes.number,
};

ProductSkeletonList.defaultProps = {
  length: 6,
};

function ProductSkeletonList({ length, ...props }) {
  return (
    <>
      <Box p="0 8px">
        <Skeleton width="40%" height={42} animation="pulse" />
      </Box>
      <Grid container>
        {Array.from(new Array(length)).map((item, index) => (
          <Grid item key={index} {...props}>
            <Skeleton variant="rectangular" width="100%" height={200} />
            <Skeleton />
            <Skeleton width="60%" />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default ProductSkeletonList;
