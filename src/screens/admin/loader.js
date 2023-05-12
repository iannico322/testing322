import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
const Loader = () => {
  return (
    <div className="flex items-start justify-center min-h-full ">
      <Box sx={{ width: "90%" }}>
        <Skeleton sx={{ height: 190 }} animation="wave" />
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton sx={{ height: 190 }} animation="wave" />
        <Skeleton />
        <Skeleton />
        <Skeleton sx={{ height: 190 }} animation="wave" />
        <Skeleton />
        <Skeleton />
      </Box>
    </div>
  );
};

export default Loader;
