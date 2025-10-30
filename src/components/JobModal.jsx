import React from "react";
import { Box, Button, Modal, Typography } from "@mui/material";
import { NormalTextField } from "../helpers/FormInputs";
import { GroupField } from "../helpers/FormInputs";
import { TextAreaField } from "../helpers/FormInputs";
import { NormalDropdown } from "../helpers/FormInputs";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: "74.75rem",
//   bgcolor: "background.paper",

//   p: 2,
// };

function JobModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        marginTop: "50vh",
      }}
    >
      <Button variant="contained" onClick={handleOpen}>
        Create Job
      </Button>

      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* <Box sx={style}> */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "74.75rem",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            overflowY: "scroll",
            maxHeight: "90vh",
            borderRadius: "0.75rem",
            boxShadow: 24,
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Create Job
              </Typography>
            </Box>
            <Box onClick={handleClose}>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.4143 0.413086C12.7658 0.061594 13.3361 0.0617674 13.6877 0.413086C14.0393 0.764662 14.0393 1.33494 13.6877 1.68652L8.32349 7.0498L13.6858 12.4141C14.0374 12.7656 14.0373 13.3359 13.6858 13.6875C13.5108 13.8625 13.2804 13.9511 13.05 13.9512C12.8487 13.9512 12.6466 13.8843 12.4817 13.749L12.4133 13.6875L7.04907 8.32324L1.68579 13.6875C1.5108 13.8625 1.28042 13.9511 1.05005 13.9512C0.848737 13.9512 0.646642 13.8843 0.481689 13.749L0.41333 13.6875C0.0620191 13.3359 0.0618407 12.7656 0.41333 12.4141L5.77759 7.0498L0.41333 1.68652C0.0620189 1.33492 0.0618406 0.764575 0.41333 0.413086C0.764825 0.0615914 1.33517 0.0617595 1.68677 0.413086L7.05005 5.77734L12.4143 0.413086Z"
                  fill="#4B5563"
                  stroke="#4B5563"
                  stroke-width="0.3"
                />
              </svg>
            </Box>
          </Box>
          <Box>
            <GroupField />
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 2,
              mt: "1.875rem",
            }}
          >
            <NormalTextField
              label="Job Title"
              name="jobtitle"
              placeholder="Lorem ip - Apparel"
            />
            <NormalTextField
              label="Quantity"
              name="quantity"
              placeholder=""
              sx={{ ml: "12px" }}
            />
          </Box>
          <Box sx={{ mt: "1.875rem" }}>
            <TextAreaField />
          </Box>
{/* status */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 2,
              mt: "1.875rem",
            }}
          >
            <Box>
              <NormalDropdown label="Status" placeholder="Select Status" />
            </Box>
            <Box>
              <NormalDropdown label="Proof Reviewers" />
            </Box>
            <Box>
              <NormalDropdown label="Priority" />
            </Box>
            <Box>
              <NormalDropdown label="Job Color" />
            </Box>
          </Box>
          {/* Customer */}
          <Box
            sx={{ mt: "1.875rem", fontWeight: "bold", fontSize: "1.125rem" }}
          >
            <Typography>Customers</Typography>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: 2,
                mt: "0.5rem",
              }}
            >
              <Box>
                <NormalDropdown label="Customer" placeholder="Select Status" />
              </Box>
              <Box>
                <NormalDropdown label="Primary Contact" />
              </Box>
              <Box>
                <NormalDropdown label="Customer PO" />
              </Box>
            </Box>
          </Box>
          {/* Address and Shipping */}
          <Box
            sx={{ mt: "1.875rem", fontWeight: "bold", fontSize: "1.125rem" }}
          >
            <Typography>Address & Shipping</Typography>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: 2,
                mt: "0.5rem",
              }}
            >
              <Box>
                <NormalDropdown label="Billing Address" placeholder="Select Status" />
              </Box>
              <Box>
                <NormalDropdown label="Shipping Address" />
              </Box>
              <Box>
                <NormalDropdown label="Install Address" />
              </Box>
              {/* second row */}
              <Box>
                <NormalTextField
                  label="Billing Attention To"
                  name="jobtitle"
                  placeholder="Lorem ip - Apparel"
                />
              </Box>
              <Box>
                <NormalTextField
                  label="Shipping Attention To"
                  name="jobtitle"
                  placeholder="Lorem ip - Apparel"
                />
              </Box>
              <Box>
                <NormalTextField
                  label="Install Attention To"
                  name="jobtitle"
                  placeholder="Lorem ip - Apparel"
                />
              </Box>
              <Box>
                <NormalDropdown label="Shipping Method" />
              </Box>
            </Box>
          </Box>
          {/* </Box> */}
           <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 2,
              mt: "1.875rem",
            }}
          >
            <Box>
              <NormalDropdown label="Status" placeholder="Select Status" />
            </Box>
            <Box>
              <NormalDropdown label="Proof Reviewers" />
            </Box>
            <Box>
              <NormalDropdown label="Priority" />
            </Box>
            <Box>
              <NormalDropdown label="Job Color" />
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}

export default JobModal;
