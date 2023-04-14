import { Grid, Skeleton } from '@mui/material';
import PropTypes from 'prop-types';

ProductSkeletonList.propTypes = {
  length: PropTypes.number,
};

ProductSkeletonList.defaultProps = {
  length: 6,
};

function ProductSkeletonList({ length, ...props }) {
  return (
    <Grid container>
      {Array.from(new Array(length)).map((item, index) => (
        <Grid item key={index} {...props}>
          <Skeleton variant="rectangular" width="100%" height={200} />
          <Skeleton />
          <Skeleton width="60%" />
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductSkeletonList;
