import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { getCustomerDetails } from '../../features/customer/customerDetailsSlice';

const columns = [
  { field: 'id', headerName: 'Property ID', width: 200 },
  {
    field: 'serveyNumber',
    headerName: 'Servey Number',
    width: 150,
  },
  {
    field: 'type',
    headerName: 'Property Type',
    width: 150,
  },
  {
    field: 'plotNo',
    headerName: 'Plot No',
    width: 150,
  },
  {
    field: 'area',
    headerName: 'Area',
    width: 150,
  },
  {
    field: 'corners',
    headerName: 'Corners',
    width: 150,
  },
  {
    field: 'date',
    headerName: 'Date',
    width: 150,
  }
];

export default function DataGridDemo() {

    const dispatch = useDispatch();
    const params = useParams();

    const {customer, customersProperty} = useSelector(state => state.customerDetails.customerDetails);

    if (customersProperty && customersProperty.length > 0) {
        var customersPropertyRows = customersProperty && customersProperty.map(customersProperty => {
            return {
                    id: customersProperty._id,
                    area: customersProperty.area,
                    corners: customersProperty.corners,
                    date: customersProperty.date,
                    plotNo: customersProperty.plotNo,
                    serveyNumber: customersProperty.serveyNumber,
                    type: customersProperty.type,
                };
        });
    }

    let rows = customersPropertyRows && customersPropertyRows.length > 0 ? customersPropertyRows : [];

    useEffect(() => {
        dispatch(getCustomerDetails(params.id));
    },[dispatch, params]);

  return (
    <div className='container'>
        { customer && <div className='row'>
            <h4>Customer Id : {customer && customer._id}</h4>
            <div className='col-md-4'>
               <Card sx={{ maxWidth: 500 }}>
                    <CardActionArea>
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Customer Details
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                            {customer.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {customer.phoneNo}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {customer.email}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
            <div className='col-md-6'>
                <Card lg={{ maxWidth: '100%' }}>
                    <CardActionArea>
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Property Details
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                            {customer.totalProperty}
                            Total Properties
                        </Typography>
                        <ul className='ul'>
                            <li>
                                <Typography variant="body2" color="text.secondary">
                                    {customer.commercial}
                                    Commercial
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="body2" color="text.secondary">
                                    {customer.industrial}
                                    Industrial
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="body2" color="text.secondary">
                                    {customer.agricultural}
                                    Agricultural
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="body2" color="text.secondary">
                                    {customer.residential}
                                    Residential
                                </Typography>
                            </li>
                        </ul>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </div>}
        <h4>Property</h4>
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: true }}
            />
        </Box>
    </div>
  );
};