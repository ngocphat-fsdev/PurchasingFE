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
]

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

  //----------------------------------------------------------------

  useEffect(() => {
    console.log(formatApiResponseToVendorsData(rawVendorsData));
    let vendors = formatApiResponseToVendorsData(rawVendorsData);
    setVendorsData(vendors);
  }, []);

  return (
    <>
      {/* <Paper sx={{ width: '100%' }}> */}
      <PageTitle title="Danh sách nhà cung cấp sản phẩm" button={
        <Button
          variant="contained"
          size="medium"
          style={{ backgroundColor: yellow[400] }}
          onClick={handleClickOpen}
        >
          Thêm Nhà cung cấp mới
        </Button>
      } />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell ></StyledTableCell>
              <StyledTableCell style={{ "fontWeight": "bold" }}>Tên nhà cung cấp</StyledTableCell>
              <StyledTableCell align="right" style={{ "fontWeight": "bold" }}>Điểm đánh giá tín dụng</StyledTableCell>
              <StyledTableCell align="right" style={{ "fontWeight": "bold" }}>Trạng thái hoạt động</StyledTableCell>
              <StyledTableCell align="right" style={{ "fontWeight": "bold" }}>URL</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rawVendorsData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <StyledTableRow key={row['name']}>
                    <TableCell component="th" scope="row" padding="none" size="small">
                      <IconButton onClick={handleClickOpenRemoveVendorDialog}><DeleteIcon /></IconButton>
                      <IconButton onClick={() => handleClickOpenEditVendorDialog(row)}><EditIcon /></IconButton>
                    </TableCell>
                    <StyledTableCell component="th" scope="row">
                      {row['name']}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <Rating name="read-only"
                        value={parseInt(row['credit_rating'])}
                        label
                        readOnly />
                    </StyledTableCell>
                    <StyledTableCell align="right">{
                      (parseInt(row['credit_rating']) == 1) ? (
                        <Chip label="Active" color="success" variant="outlined" style={{ "width": "5rem", "background-color": green[100], "fontWeight": "bold" }} />) : (
                        <Chip label="Inactive" color="error" variant="outlined" style={{ "width": "5rem", "background-color": red[100], "fontWeight": "bold" }} />
                      )}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row['purchasing_web_service_url']}</StyledTableCell>
                  </StyledTableRow>)
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rawVendorsData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <Dialog open={open} onClose={handleClose} name="dialog-create-new-vendor">
        <DialogTitle>Tạo nhà cung cấp mới</DialogTitle>
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