import React, { useState } from "react";
import { Box, Button, Modal, Typography } from "@mui/material";
import { DateFieldSelecter, NormalTextField } from "../helpers/FormInputs";
import { GroupField } from "../helpers/FormInputs";
import { TextAreaField } from "../helpers/FormInputs";
import { NormalDropdown } from "../helpers/FormInputs";
import { MultiLineText } from "../helpers/FormInputs";
import axiosInstance from "../config/axiosInstance";

function JobModal() {
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [formData, setFormData] = useState({
    jobTitle: "",
    quantity: "",
    description: "",
    status: "",
    proof: "",
    priority: "",
    jobcolor: "",
    customer: "",
    primarycontact: "",
    customerpo: "",
    billngaddress: "",
    shippingaddress: "",
    installaddress: "",
    billingAttention: "",
    shippingAttention: "",
    installAttention: "",
    shippingmethod: "",

    designDetails: "",
    productionDetails: "",
    shippingDetils: "",
    installationDetails: "",
    specialInfo: "",
    LocalFile: "",

    selectduedate: "",
    productionduedate: "",
    artduedate: "",

    productionMang: "",
    projectMang: "",
    saleRep: "",
    designer: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    console.log(formData);
    if (!formData.jobTitle.trim()) newErrors.jobTitle = "Job title is required";
    if (!formData.quantity) newErrors.quantity = "Quantity is required";
    else if (formData.quantity <= 0)
      newErrors.quantity = "Quantity must be positive";
    if (!formData.category) newErrors.category = "Category is required";
    if (!formData.description.trim())
      newErrors.description = "Description is required";
    if (!formData.status.trim()) newErrors.status = "Status is required";
    if (!formData.proof.trim())
      newErrors.proof = "Proof  Reviewers is required";
    if (!formData.priority.trim()) newErrors.priority = "Priority is required";
    if (!formData.jobcolor.trim()) newErrors.jobcolor = "Job color is required";
    if (!formData.priority.trim()) newErrors.priority = "Priority is required";
    if (!formData.customer.trim()) newErrors.customer = "Customer is required";

    if (!formData.primarycontact.trim())
      newErrors.primarycontact = "Primary Contact is required";
    if (!formData.customerpo.trim())
      newErrors.customerpo = "Customer PO is required";
    if (!formData.billngaddress.trim())
      newErrors.billngaddress = "Billing Address is required";
    if (!formData.shippingaddress.trim())
      newErrors.shippingaddress = "Shipping Address is required";
    if (!formData.installaddress.trim())
      newErrors.installaddress = "Install address is required";
    if (!formData.billingAttention.trim())
      newErrors.billingAttention = "Billing Attention is required";
    if (!formData.shippingAttention.trim())
      newErrors.shippingAttention = "Shipping Attention is required";
    if (!formData.installAttention.trim())
      newErrors.installAttention = "Install Attention is required";
    if (!formData.shippingmethod.trim())
      newErrors.shippingmethod = "Shipping method is required";

    if (!formData.designDetails.trim())
      newErrors.designDetails = "Design Details is required";
    if (!formData.productionDetails.trim())
      newErrors.productionDetails = "Production Details is required";
    if (!formData.shippingDetils.trim())
      newErrors.shippingDetils = "Shipping Details is required";
    if (!formData.installationDetails.trim())
      newErrors.installationDetails = "installation Details is required";
    if (!formData.specialInfo.trim())
      newErrors.specialInfo = "Special Info is required";
    if (!formData.LocalFile.trim())
      newErrors.LocalFile = "LocalFile is required";
    if (!formData.selectduedate)
      newErrors.selectduedate = "Select duedate is required";

    if (!formData.productionduedate)
      newErrors.productionduedate = "Production duedate is required";

    // if (!formData.artduedate.trim())
    //   newErrors.artduedate = "Select Art Due is required";

    // if (!formData.productionMang.trim())
    //   newErrors.productionMang = "Production Mangment is required";
    // if (!formData.projectMang.trim())
    //   newErrors.projectMang = "projectMangment is required";
    // if (!formData.saleRep.trim()) newErrors.saleRep = "Sales Rep is required";
    // if (!formData.designer.trim()) newErrors.designer = "Desinger is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate())
      try {
        const response = await axiosInstance.post(
          "/sales-order-jobs",
          formData
        );

        console.log(" Posted successfully", response.data);
        alert("Job created successfully");
      } catch (error) {
        console.error(" Error posting data:", error);
        alert("Failed to create job!");
      }
  };

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
              <Typography id="modal-modal-title" variant="h5" component="h2">
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

          <Box component="form" onSubmit={handleSubmit}>
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
              <Box>
                <NormalTextField
                  type="text"
                  name="jobTitle"
                  label="Job Title"
                  placeholder="Enter Job Title"
                  value={formData.jobTitle}
                  handleChange={handleChange}
                  required
                />
                {errors.jobTitle && (
                  <span style={{ color: "red", fontSize: "0.875rem" }}>
                    {errors.jobTitle}
                  </span>
                )}
              </Box>
              <Box>
                <NormalTextField
                  type="number"
                  label="Quantity"
                  name="quantity"
                  placeholder="1"
                  value={formData.quantity}
                  handleChange={handleChange}
                  sx={{ ml: "12px" }}
                />
                {errors.quantity && (
                  <span style={{ color: "red", fontSize: "0.875rem" }}>
                    {errors.quantity}
                  </span>
                )}
              </Box>
            </Box>
            <Box sx={{ mt: "1.875rem" }}>
              <TextAreaField
                label="Description"
                name="description"
                value={formData.description}
                handleChange={handleChange}
              />
              {errors.description && (
                <span style={{ color: "red", fontSize: "0.875rem" }}>
                  {errors.description}
                </span>
              )}
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
                <NormalDropdown
                  label="Status"
                  placeholder="Select Status"
                  name="status"
                  value={formData.status}
                  handleChange={handleChange}
                  options={[
                    { value: "design", label: "Design" },
                    { value: "development", label: "Development" },
                  ]}
                />
                {errors.status && (
                  <span style={{ color: "red", fontSize: "0.875rem" }}>
                    {errors.status}
                  </span>
                )}
              </Box>
              <Box>
                <NormalDropdown
                  label="Proof Reviewers"
                  placeholder="Select Proof Reviewers"
                  name="proof"
                  value={formData.proof}
                  handleChange={handleChange}
                  options={[
                    { value: "review1", label: "Review-1" },
                    { value: "review2", label: "Review-2" },
                    { value: "review3", label: "Review-3" },
                  ]}
                />
                {errors.proof && (
                  <span style={{ color: "red", fontSize: "0.875rem" }}>
                    {errors.proof}
                  </span>
                )}
              </Box>
              <Box>
                <NormalDropdown
                  label="Priority"
                  placeholder="Select Priority"
                  name="priority"
                  value={formData.priority}
                  handleChange={handleChange}
                  options={[
                    { value: "priority1", label: "Priority1" },
                    { value: "priority2", label: "Priority2" },
                  ]}
                />
                {errors.priority && (
                  <span style={{ color: "red", fontSize: "0.875rem" }}>
                    {errors.priority}
                  </span>
                )}
              </Box>
              <Box>
                <NormalDropdown
                  label="Job Color"
                  placeholder="Select Job Color"
                  name="jobcolor"
                  value={formData.jobcolor}
                  handleChange={handleChange}
                  options={[
                    { value: "jobcolor1", label: "Job-color1" },
                    { value: "jobcolor2", label: "Job-color2" },
                  ]}
                />
                {errors.jobcolor && (
                  <span style={{ color: "red", fontSize: "0.875rem" }}>
                    {errors.jobcolor}
                  </span>
                )}
              </Box>
            </Box>
            {/* Customer */}
            <Box
              sx={{
                mt: "1.875rem",
                // fontWeight: "bold",
                // fontSize: "1.125rem",
              }}
            >
              <Typography variant="h6" component="h6">
                Customers
              </Typography>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: 2,
                  mt: "0.5rem",
                }}
              >
                <Box>
                  <NormalDropdown
                    label="Customer"
                    placeholder="Select Customers"
                    name="customer"
                    value={formData.customer}
                    handleChange={handleChange}
                    options={[
                      { value: "cus1", label: "Customer1" },
                      { value: "cus2", label: "Customer2" },
                    ]}
                  />
                  {errors.customer && (
                    <span style={{ color: "red", fontSize: "0.875rem" }}>
                      {errors.customer}
                    </span>
                  )}
                </Box>
                <Box>
                  <NormalDropdown
                    label="Primary Contact"
                    placeholder="Select Primary Contacts"
                    name="primarycontact"
                    value={formData.primarycontact}
                    handleChange={handleChange}
                    options={[
                      { value: "cont1", label: "Contact1" },
                      { value: "cont2", label: "Contact2" },
                    ]}
                  />
                  {errors.primarycontact && (
                    <span style={{ color: "red", fontSize: "0.875rem" }}>
                      {errors.primarycontact}
                    </span>
                  )}
                </Box>
                <Box>
                  <NormalDropdown
                    label="Customer PO"
                    placeholder="Customer PO"
                    name="customerpo"
                    value={formData.customerpo}
                    handleChange={handleChange}
                    options={[
                      { value: "contpo1", label: "Contactpo1" },
                      { value: "contpo2", label: "Contactpo2" },
                    ]}
                  />
                  {errors.customerpo && (
                    <span style={{ color: "red", fontSize: "0.875rem" }}>
                      {errors.customerpo}
                    </span>
                  )}
                </Box>
              </Box>
            </Box>
            {/* Address and Shipping */}
            <Box
              sx={{
                mt: "1.875rem",
                // fontWeight: "bold",
                fontSize: "1.125rem",
              }}
            >
              <Typography variant="h6" component="h6">
                Address & Shipping
              </Typography>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: 2,
                  mt: "0.5rem",
                }}
              >
                <Box>
                  <NormalDropdown
                    label="Billing Address"
                    placeholder="Select Billing Address"
                    name="billngaddress"
                    value={formData.billngaddress}
                    handleChange={handleChange}
                    options={[
                      { value: "billina1", label: "Billing1" },
                      { value: "billinga2", label: "Billing2" },
                    ]}
                  />
                  {errors.billngaddress && (
                    <span style={{ color: "red", fontSize: "0.875rem" }}>
                      {errors.billngaddress}
                    </span>
                  )}
                </Box>
                <Box>
                  <NormalDropdown
                    label="Shipping Address"
                    placeholder="Select Shipping Address"
                    name="shippingaddress"
                    value={formData.shippingaddress}
                    handleChange={handleChange}
                    options={[{ value: "sh1", label: "Billing1" }]}
                  />
                  {errors.shippingaddress && (
                    <span style={{ color: "red", fontSize: "0.875rem" }}>
                      {errors.shippingaddress}
                    </span>
                  )}
                </Box>
                <Box>
                  <NormalDropdown
                    label="Install Address"
                    placeholder="Select Install Address"
                    name="installaddress"
                    value={formData.installaddress}
                    handleChange={handleChange}
                    options={[{ value: "ins1", label: "xhdsfdsfhgsf" }]}
                  />
                  {errors.installaddress && (
                    <span style={{ color: "red", fontSize: "0.875rem" }}>
                      {errors.installaddress}
                    </span>
                  )}
                </Box>
                {/* second row */}
                <Box>
                  <NormalTextField
                    label="Billing Attention To"
                    name="billingAttention"
                    type="text"
                    placeholder="Billing Attention To"
                    value={formData.billingAttention}
                    handleChange={handleChange}
                  />
                  {errors.billingAttention && (
                    <span style={{ color: "red", fontSize: "0.875rem" }}>
                      {errors.billingAttention}
                    </span>
                  )}
                </Box>
                <Box>
                  <NormalTextField
                    label="Shipping Attention To"
                    name="shippingAttention"
                    placeholder="Shipping Attention To"
                    type="text"
                    value={formData.shippingAttention}
                    handleChange={handleChange}
                  />
                  {errors.shippingAttention && (
                    <span style={{ color: "red", fontSize: "0.875rem" }}>
                      {errors.shippingAttention}
                    </span>
                  )}
                </Box>
                <Box>
                  <NormalTextField
                    label="Install Attention To"
                    name="installAttention"
                    placeholder="Install Attention To"
                    type="text"
                    value={formData.installAttention}
                    handleChange={handleChange}
                  />
                  {errors.installAttention && (
                    <span style={{ color: "red", fontSize: "0.875rem" }}>
                      {errors.installAttention}
                    </span>
                  )}
                </Box>
                <Box>
                  <NormalDropdown
                    label="Shipping Method"
                    placeholder="Select Shipping Method"
                    name="shippingmethod"
                    value={formData.shippingmethod}
                    handleChange={handleChange}
                    options={[{ value: "ins1", label: "shipping" }]}
                  />
                  {errors.shippingmethod && (
                    <span style={{ color: "red", fontSize: "0.875rem" }}>
                      {errors.shippingmethod}
                    </span>
                  )}
                </Box>
              </Box>
            </Box>

            {/* Details*/}
            <Box
              sx={{
                mt: "1.875rem",
                fontSize: "1.125rem",
              }}
            >
              <Typography variant="h6" component="h6">
                Details
              </Typography>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: 2,
                  mt: "1.875rem",
                }}
              >
                <Box>
                  <MultiLineText
                    label="Design Details"
                    name="designDetails"
                    value={formData.designDetails}
                    handleChange={handleChange}
                  />
                  {errors.designDetails && (
                    <span style={{ color: "red", fontSize: "0.875rem" }}>
                      {errors.designDetails}
                    </span>
                  )}
                </Box>
                <Box>
                  <MultiLineText
                    label="Production Details"
                    name="productionDetails"
                    value={formData.productionDetails}
                    handleChange={handleChange}
                  />
                  {errors.productionDetails && (
                    <span style={{ color: "red", fontSize: "0.875rem" }}>
                      {errors.productionDetails}
                    </span>
                  )}
                </Box>
                <Box>
                  <MultiLineText
                    label="Shipping Details"
                    name="shippingDetils"
                    value={formData.shippingDetils}
                    handleChange={handleChange}
                  />
                  {errors.shippingDetils && (
                    <span style={{ color: "red", fontSize: "0.875rem" }}>
                      {errors.shippingDetils}
                    </span>
                  )}
                </Box>
                <Box>
                  <MultiLineText
                    label="Installation Details"
                    name="installationDetails"
                    value={formData.installationDetails}
                    handleChange={handleChange}
                  />
                  {errors.installationDetails && (
                    <span style={{ color: "red", fontSize: "0.875rem" }}>
                      {errors.installationDetails}
                    </span>
                  )}
                </Box>
                <Box>
                  <MultiLineText
                    label="Special Info"
                    name="specialInfo"
                    value={formData.specialInfo}
                    handleChange={handleChange}
                  />
                  {errors.specialInfo && (
                    <span style={{ color: "red", fontSize: "0.875rem" }}>
                      {errors.specialInfo}
                    </span>
                  )}
                </Box>
                <Box>
                  <MultiLineText
                    label="Local File"
                    name="LocalFile"
                    value={formData.LocalFile}
                    handleChange={handleChange}
                  />
                  {errors.LocalFile && (
                    <span style={{ color: "red", fontSize: "0.875rem" }}>
                      {errors.LocalFile}
                    </span>
                  )}
                </Box>
              </Box>
            </Box>

            {/* Date and Schedule */}
            <Box
              sx={{
                mt: "1.875rem",
                fontSize: "1.125rem",
              }}
            >
              <Typography variant="h6" component="h6">
                Dates & Scheduling
              </Typography>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: 2,
                  mt: "1.875rem",
                }}
              >
                <Box>
                  <DateFieldSelecter
                    placeholder="Select Due Date"
                    label="Select Due Date"
                    name="selectduedate"
                    value={formData.selectduedate}
                    handleChange={handleChange}
                  />
                  {errors.selectduedate && (
                    <span style={{ color: "red", fontSize: "0.875rem" }}>
                      {errors.selectduedate}
                    </span>
                  )}
                </Box>
                <Box>
                  <DateFieldSelecter
                    placeholder="Select Production Due Date"
                    label="Select Production Due Date"
                    name="productionduedate"
                    value={formData.productionduedate}
                    handleChange={handleChange}
                  />
                  {errors.productionduedate && (
                    <span style={{ color: "red", fontSize: "0.875rem" }}>
                      {errors.productionduedate}
                    </span>
                  )}
                </Box>
                <Box>
                  <DateFieldSelecter
                    placeholder="Art Due Date"
                    label="Art Due Date"
                    name="artduedate"
                    value={formData.artduedate}
                    handleChange={handleChange}
                  />
                  {errors.artduedate && (
                    <span style={{ color: "red", fontSize: "0.875rem" }}>
                      {errors.artduedate}
                    </span>
                  )}
                </Box>
              </Box>
            </Box>

            {/* Team Assingmanets */}
            <Box
              sx={{
                mt: "1.875rem",
                // fontWeight: "bold",
                fontSize: "1.125rem",
              }}
            >
              <Typography variant="h6" component="h6">
                Team Assignments
              </Typography>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: 2,
                  mt: "1.875rem",
                }}
              >
                <Box>
                  <NormalDropdown
                    label="Production Manager"
                    placeholder="Select Production Manager"
                    name="productionMang"
                    value={formData.productionMang}
                    handleChange={handleChange}
                    options={[{ value: "product", label: "Manager-one" }]}
                  />
                  {errors.artduedate && (
                    <span style={{ color: "red", fontSize: "0.875rem" }}>
                      {errors.artduedate}
                    </span>
                  )}
                </Box>
                <Box>
                  {/* projectMang */}
                  <NormalDropdown
                    label="Project Manager"
                    placeholder="Select Project Manager"
                    name="projectMang"
                    value={formData.projectMang}
                    handleChange={handleChange}
                    options={[{ value: "project", label: "Project-one" }]}
                  />
                </Box>
                <Box>
                  <NormalDropdown
                    label="Sales Rep"
                    placeholder="Select Sales Rep"
                    name="saleRep"
                    value={formData.saleRep}
                    handleChange={handleChange}
                    options={[{ value: "ins1", label: "shipping" }]}
                  />
                </Box>
                <Box>
                  <NormalDropdown
                    label="Designer"
                    placeholder="Select Designer"
                    name="designer"
                    value={formData.designer}
                    handleChange={handleChange}
                    options={[{ value: "desig1", label: "Designer022" }]}
                  />
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                padding: "24px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box>
                <Button variant="outlined" sx={{ height: "3rem" }}>
                  Save & Show
                </Button>
              </Box>
              <Box sx={{ ml: "1rem" }}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ height: "3rem" }}
                >
                  Save
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}

export default JobModal;
