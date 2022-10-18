import React, { useState } from "react";
import { Button, Grid } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import MUIDataTable from "mui-datatables";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { blue, red, green, yellow } from '@mui/material/colors';
import Rating from '@mui/material/Rating';
import TablePagination from '@mui/material/TablePagination';
import Chip from '@mui/material/Chip';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import Autocomplete from '@mui/material/Autocomplete';
import * as moment from 'moment';

// components
import PageTitle from "../../components/PageTitle/PageTitle";
import { useEffect } from "react";


const rawVendorsData = [
  {
    "business_entity_id": 1492,
    "account_number": "AUSTRALI0001",
    "name": "Australia Bike Retailer",
    "credit_rating": 1,
    "prefered_vendor_status": 1,
    "active_flag": 1,
    "purchasing_web_service_url": null,
    "modified_date": "2006-01-22T17:00:00.000Z"
  },
  {
    "business_entity_id": 1494,
    "account_number": "ALLENSON0001",
    "name": "Allenson Cycles",
    "credit_rating": 2,
    "prefered_vendor_status": 1,
    "active_flag": 1,
    "purchasing_web_service_url": null,
    "modified_date": "2005-05-25T17:00:00.000Z"
  },
  {
    "business_entity_id": 1496,
    "account_number": "ADVANCED0001",
    "name": "Advanced Bicycles",
    "credit_rating": 1,
    "prefered_vendor_status": 1,
    "active_flag": 1,
    "purchasing_web_service_url": null,
    "modified_date": "2005-05-25T17:00:00.000Z"
  },
  {
    "business_entity_id": 1498,
    "account_number": "TRIKES0001",
    "name": "Trikes, Inc.",
    "credit_rating": 2,
    "prefered_vendor_status": 1,
    "active_flag": 1,
    "purchasing_web_service_url": null,
    "modified_date": "2006-03-05T17:00:00.000Z"
  },
  {
    "business_entity_id": 1500,
    "account_number": "MORGANB0001",
    "name": "Morgan Bike Accessories",
    "credit_rating": 1,
    "prefered_vendor_status": 1,
    "active_flag": 1,
    "purchasing_web_service_url": null,
    "modified_date": "2006-03-04T17:00:00.000Z"
  },
  {
    "business_entity_id": 1502,
    "account_number": "CYCLING0001",
    "name": "Cycling Master",
    "credit_rating": 1,
    "prefered_vendor_status": 1,
    "active_flag": 1,
    "purchasing_web_service_url": null,
    "modified_date": "2006-01-23T17:00:00.000Z"
  },
  {
    "business_entity_id": 1504,
    "account_number": "CHICAGO0002",
    "name": "Chicago Rent-All",
    "credit_rating": 2,
    "prefered_vendor_status": 1,
    "active_flag": 1,
    "purchasing_web_service_url": null,
    "modified_date": "2006-01-23T17:00:00.000Z"
  },
  {
    "business_entity_id": 1506,
    "account_number": "GREENWOO0001",
    "name": "Greenwood Athletic Company",
    "credit_rating": 1,
    "prefered_vendor_status": 1,
    "active_flag": 1,
    "purchasing_web_service_url": null,
    "modified_date": "2006-02-24T17:00:00.000Z"
  },
  {
    "business_entity_id": 1508,
    "account_number": "COMPETE0001",
    "name": "Compete Enterprises, Inc",
    "credit_rating": 1,
    "prefered_vendor_status": 1,
    "active_flag": 1,
    "purchasing_web_service_url": null,
    "modified_date": "2006-01-23T17:00:00.000Z"
  },
  {
    "business_entity_id": 1510,
    "account_number": "INTERNAT0001",
    "name": "International",
    "credit_rating": 1,
    "prefered_vendor_status": 1,
    "active_flag": 1,
    "purchasing_web_service_url": null,
    "modified_date": "2006-02-24T17:00:00.000Z"
  },
  {
    "business_entity_id": 1512,
    "account_number": "LIGHTSP0001",
    "name": "Light Speed",
    "credit_rating": 1,
    "prefered_vendor_status": 1,
    "active_flag": 1,
    "purchasing_web_service_url": null,
    "modified_date": "2006-01-22T17:00:00.000Z"
  },
  {
    "business_entity_id": 1514,
    "account_number": "TRAINING0001",
    "name": "Training Systems",
    "credit_rating": 1,
    "prefered_vendor_status": 1,
    "active_flag": 1,
    "purchasing_web_service_url": null,
    "modified_date": "2006-03-05T17:00:00.000Z"
  },
  {
    "business_entity_id": 1516,
    "account_number": "GARDNER0001",
    "name": "Gardner Touring Cycles",
    "credit_rating": 1,
    "prefered_vendor_status": 0,
    "active_flag": 0,
    "purchasing_web_service_url": null,
    "modified_date": "2006-02-24T17:00:00.000Z"
  },
  {
    "business_entity_id": 1518,
    "account_number": "INTERNAT0004",
    "name": "International Trek Center",
    "credit_rating": 1,
    "prefered_vendor_status": 1,
    "active_flag": 1,
    "purchasing_web_service_url": null,
    "modified_date": "2006-01-23T17:00:00.000Z"
  },
  {
    "business_entity_id": 1520,
    "account_number": "G&KBI0001",
    "name": "G & K Bicycle Corp.",
    "credit_rating": 1,
    "prefered_vendor_status": 1,
    "active_flag": 1,
    "purchasing_web_service_url": null,
    "modified_date": "2006-01-23T17:00:00.000Z"
  },
  {
    "business_entity_id": 1522,
    "account_number": "FIRSTNA0001",
    "name": "First National Sport Co.",
    "credit_rating": 1,
    "prefered_vendor_status": 1,
    "active_flag": 1,
    "purchasing_web_service_url": null,
    "modified_date": "2006-02-24T17:00:00.000Z"
  },
  {
    "business_entity_id": 1524,
    "account_number": "RECREATI0001",
    "name": "Recreation Place",
    "credit_rating": 4,
    "prefered_vendor_status": 1,
    "active_flag": 1,
    "purchasing_web_service_url": null,
    "modified_date": "2006-03-04T17:00:00.000Z"
  },
  {
    "business_entity_id": 1526,
    "account_number": "INTERNAT0002",
    "name": "International Bicycles",
    "credit_rating": 1,
    "prefered_vendor_status": 1,
    "active_flag": 1,
    "purchasing_web_service_url": null,
    "modified_date": "2006-02-24T17:00:00.000Z"
  },
  {
    "business_entity_id": 1528,
    "account_number": "IMAGEMA0001",
    "name": "Image Makers Bike Center",
    "credit_rating": 1,
    "prefered_vendor_status": 1,
    "active_flag": 1,
    "purchasing_web_service_url": null,
    "modified_date": "2006-03-05T17:00:00.000Z"
  },
  {
    "business_entity_id": 1530,
    "account_number": "COMFORT0001",
    "name": "Comfort Road Bicycles",
    "credit_rating": 1,
    "prefered_vendor_status": 1,
    "active_flag": 1,
    "purchasing_web_service_url": null,
    "modified_date": "2006-01-23T17:00:00.000Z"
  },
  {
    "business_entity_id": 1532,
    "account_number": "KNOPFLER0001",
    "name": "Knopfler Cycles",
    "credit_rating": 1,
    "prefered_vendor_status": 1,
    "active_flag": 1,
    "purchasing_web_service_url": null,
    "modified_date": "2006-02-28T17:00:00.000Z"
  },
  {
    "business_entity_id": 1534,
    "account_number": "READYRE0001",
    "name": "Ready Rentals",
    "credit_rating": 1,
    "prefered_vendor_status": 1,
    "active_flag": 1,
    "purchasing_web_service_url": null,
    "modified_date": "2006-03-04T17:00:00.000Z"
  },
  {
    "business_entity_id": 1536,
    "account_number": "CRUGERB0001",
    "name": "Cruger Bike Company",
    "credit_rating": 1,
    "prefered_vendor_status": 1,
    "active_flag": 1,
    "purchasing_web_service_url": null,
    "modified_date": "2006-02-16T17:00:00.000Z"
  },
  {
    "business_entity_id": 1538,
    "account_number": "VISTARO0001",
    "name": "Vista Road Bikes",
    "credit_rating": 3,
    "prefered_vendor_status": 1,
    "active_flag": 1,
    "purchasing_web_service_url": null,
    "modified_date": "2006-03-20T17:00:00.000Z"
  },
  {
    "business_entity_id": 1540,
    "account_number": "BERGERON0001",
    "name": "Bergeron Off-Roads",
    "credit_rating": 1,
    "prefered_vendor_status": 1,
    "active_flag": 1,
    "purchasing_web_service_url": null,
    "modified_date": "2006-01-22T17:00:00.000Z"
  },
  {
    "business_entity_id" : 1546,
    "account_number" : "GREENLA0001",
    "name" : "Green Lake Bike Company",
    "credit_rating" : 1,
    "preferred_vendor_status" : 1,
    "active_flag" : 1,
    "purchasing_web_service_url" : null,
    "modified_date" : "2006-02-28T17:00:00.000Z"
  }
]


const rawVendorOrdersData = [
  {
    "purchase_order_id": 4009,
    "revision_number": 6,
    "status": 2,
    "employee_id": 261,
    "vendor_id": 1546,
    "ship_method_id": 3,
    "order_date": "2007-12-10T17:00:00.000Z",
    "ship_date": "2008-01-04T17:00:00.000Z",
    "sub_total": "14915.0000",
    "tax_amt": "1193.2000",
    "freight": "298.3000",
    "total_due": "16406.5000",
    "modified_date": "2009-09-12T05:25:46.453Z"
  },
  {
    "purchase_order_id": 4011,
    "revision_number": 7,
    "status": 2,
    "employee_id": 254,
    "vendor_id": 1546,
    "ship_method_id": 3,
    "order_date": "2008-07-24T17:00:00.000Z",
    "ship_date": "2008-08-18T17:00:00.000Z",
    "sub_total": "54492.5000",
    "tax_amt": "4359.4000",
    "freight": "1089.8500",
    "total_due": "59941.7500",
    "modified_date": "2009-09-12T05:25:46.470Z"
  }
];

let formatApiResponseToVendorsData = (rawVendorsData) => {
  let arr = [];
  for (let item of rawVendorsData) {
    console.log(item);
    arr.push([
      item['name'],
      item['credit_rating'],
      item['active_flag'],
      item['purchasing_web_service_url'],
    ]);
  }
  return arr;
}


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: blue[300],
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export default function Vendors(props) {
  var theme = useTheme();

  var [vendorsData, setVendorsData] = useState([]);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [open, setOpen] = React.useState(false);
  const [openDialogRemoveVendor, setOpenDialogRemoveVendor] = React.useState(false);
  const [openDialogEditVendor, setOpenDialogEditVendor] = React.useState(false);

  const [vendorOrders, setVendorOrders] = React.useState([]);


  // handle pagination
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // open and close create new vendor dialog
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmitFormCreateVendor = () => {
    setOpen(false);
    window.location.reload();
  };

  // open and close remove vendor dialog
  const handleClickOpenRemoveVendorDialog = () => {
    setOpenDialogRemoveVendor(true);
  };

  const handleCloseDialogRemoveVendor = () => {
    setOpenDialogRemoveVendor(false);
  };

  const handleRemoveVendorDialog = () => {
    setOpenDialogRemoveVendor(false);
    window.location.reload();
  };

  // open and close remove vendor dialog
  const [vendorEdited, setVendorEdited] = useState({});

  const handleClickOpenEditVendorDialog = (editedVendorInfo) => {
    setVendorEdited(editedVendorInfo);
    setOpenDialogEditVendor(true);
  };

  const handleCloseDialogEditVendor = () => {
    setOpenDialogEditVendor(false);
  };

  const handleEditVendorDialog = () => {
    setOpenDialogEditVendor(false);
    window.location.reload();
    // send to request to backend
  };

  // handle search box change
  const handleSearchBoxChange = (event, value) => {
    console.log('auto complete search changed');
    let vendorsSelected = {};
    for (let vendor of value) {
      vendorsSelected[vendor['business_entity_id']] = vendor;
    }
    let vendorOrderFiltered = [];
    for (let vendorOrder of rawVendorOrdersData) {
      if (vendorOrder['vendor_id'] in vendorsSelected) {
        vendorOrderFiltered.push({
          ...vendorOrder,
          vendor_name: vendorsSelected[vendorOrder['vendor_id']]['name'],
        });
      }
    }
    let vendorOrdersFormatted = formatVendorOrdersData(vendorOrderFiltered);
    setVendorOrders(vendorOrdersFormatted);
  };

  const formatVendorOrdersData = (vendorOrdersData) => {
    let cleanedVendorOrdersData = [];
    for (let vendorOrder of vendorOrdersData) {
      let orderStatus = 'Chờ xác nhận';
      switch (parseInt(vendorOrder['status'], 10)) {
        case 1:
          orderStatus = 'Chờ xác nhận';
          break;
        case 2:
          orderStatus = 'Đã xác nhận';
          break;
        case 3:
          orderStatus = 'Đơn bị hủy';
          break;
        case 4:
          orderStatus = 'Hoàn thành';
          break;
      }
      cleanedVendorOrdersData.push({
        purchase_order_id: vendorOrder['purchase_order_id'],
        status: orderStatus,
        vendor_name: vendorOrder['vendor_name'],
        employee_id: vendorOrder['employee_id'],
        ship_method_id: vendorOrder['ship_method_id'],
        order_date: moment(vendorOrder['order_date']).format("DD-MM-YYYY HH:mm:ss"),
        ship_date: moment(vendorOrder['ship_date']).format("DD-MM-YYYY HH:mm:ss"),
        total_due: vendorOrder['total_due'],
      });
    }
    console.log(cleanedVendorOrdersData);
    return cleanedVendorOrdersData;
  }

  //----------------------------------------------------------------



  useEffect(() => {
    console.log(formatApiResponseToVendorsData(rawVendorsData));
    let vendors = formatApiResponseToVendorsData(rawVendorsData);
    setVendorsData(vendors);
  }, []);

  return (
    <>
      {/* <Paper sx={{ width: '100%' }}> */}
      <PageTitle title="Quản lý đơn hàng mua sản phẩm từ nhà cung cấp" button={
        <Button
          variant="contained"
          size="medium"
          style={{ backgroundColor: yellow[400] }}
          onClick={handleClickOpen}
        >
          Thêm đơn hàng mới
        </Button>
      } />
      <Autocomplete
        multiple
        id="tags-standard"
        options={rawVendorsData}
        getOptionLabel={(option) => option.name}
        onChange={(event, value) => handleSearchBoxChange(event, value)}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Nhà cung cấp"
            placeholder="Chọn nhà cung cấp"
          />
        )}
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell ></StyledTableCell>
              <StyledTableCell style={{ "fontWeight": "bold" }}>Tên nhà cung cấp</StyledTableCell>
              <StyledTableCell align="left" style={{ "fontWeight": "bold" }}>Trạng thái đơn</StyledTableCell>
              <StyledTableCell align="left" style={{ "fontWeight": "bold" }}>Ngày đặt hàng</StyledTableCell>
              <StyledTableCell align="left" style={{ "fontWeight": "bold" }}>Ngày giao hàng</StyledTableCell>
              <StyledTableCell align="left" style={{ "fontWeight": "bold" }}>Tổng giá trị</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {vendorOrders
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <StyledTableRow key={row['purchase_order_id']}>
                    <TableCell component="th" scope="row" padding="none" size="small">
                      <IconButton onClick={handleClickOpenRemoveVendorDialog}><DeleteIcon /></IconButton>
                      <IconButton onClick={() => handleClickOpenEditVendorDialog(row)}><EditIcon /></IconButton>
                    </TableCell>
                    <StyledTableCell component="th" scope="row">
                      {row['vendor_name']}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {row['status']}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {row['order_date']}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {row['ship_date']}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {row['total_due']}
                    </StyledTableCell>
                  </StyledTableRow>)
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={vendorOrders.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <Dialog open={open} onClose={handleClose} name="dialog-create-new-vendor">
        <DialogTitle>Tạo đơn hàng mới</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Điền các thông tin sau đây để tạo một nhà cung cấp mới cho công ty của bạn
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Tên nhà cung cấp"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Điểm đánh giá tính dụng"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="URL nhà cung cấp"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}><div style={{ color: red[500] }}>Hủy</div></Button>
          <Button onClick={handleSubmitFormCreateVendor}><div style={{ color: blue[500] }}>Xong</div></Button>
        </DialogActions>
      </Dialog>
      <Dialog open={openDialogRemoveVendor} onClose={handleCloseDialogRemoveVendor} name="dailog-remove-vendor">
        <DialogTitle>Xóa nhà cung cấp</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Bạn có chắc sẽ xóa nhà cung cấp này không?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialogRemoveVendor}><div style={{ color: red[500] }}>Hủy</div></Button>
          <Button onClick={handleRemoveVendorDialog}><div style={{ color: blue[500] }}>Chắc chắn</div></Button>
        </DialogActions>
      </Dialog>
      <Dialog open={openDialogEditVendor} onClose={handleCloseDialogEditVendor} name="dailog-edit-vendor">
        <DialogTitle>Chỉnh sửa thông tin nhà cung cấp</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Tên nhà cung cấp"
            type="email"
            fullWidth
            variant="standard"
            value={vendorEdited['name']}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Điểm đánh giá tính dụng"
            type="email"
            fullWidth
            variant="standard"
            value={vendorEdited['credit_rating']}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="URL nhà cung cấp"
            type="email"
            fullWidth
            variant="standard"
            value={vendorEdited['purchasing_web_service_url']}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialogEditVendor}><div style={{ color: red[500] }}>Hủy</div></Button>
          <Button onClick={handleEditVendorDialog}><div style={{ color: blue[500] }}>Lưu</div></Button>
        </DialogActions>
      </Dialog>
      {/* </Paper> */}
    </>
  );
}