import { Grid, Skeleton } from '@mui/material';

function SkeletonList() {
  return (
    <Grid container>
      {Array.from(new Array(10)).map((item, index) => (
        <Grid key={index} item md={4} sx={{ textAlign: 'center', marginBottom: '30px', padding: '8px' }}>
          <Skeleton variant="rectangular" width="100%" height={200} />
          <Skeleton />
          <Skeleton width="60%" />
        </Grid>
      ))}
    </Grid>
  );
}

export default SkeletonList;
