import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationRanges() {
  return (
    <div className='max-[650px]:hidden'>
    <Stack spacing={2}>
      <Pagination count={100} defaultPage={6} siblingCount={0} />
      
    </Stack>
    </div>
  );
}