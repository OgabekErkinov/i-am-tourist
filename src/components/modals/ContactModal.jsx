import { Box, Button, Stack, TextField, Typography, CircularProgress } from "@mui/material";
import React, { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { IoClose } from "react-icons/io5";
import TextBox from "../bookTicket/TextBox";
import { useResponsive } from "../sizes/screen";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { Controller, useForm } from "react-hook-form";
import useStore from "../../Store/store";

const ContactModal = () => {
  const isModal = useStore(state => state.contactModal);
  const toggleModal = useStore(state => state.toggleContactModal);
  const setAlert = useStore(state => state.setAlert);

  const schema = yup.object({
    FullName: yup.string().required("FullName required..!"),
    Email: yup.string().email("Invalid email format..!").required("Email is required..!"),
    Message: yup.string().required("Message is required..!"),
  }).required();

  const { reset, handleSubmit, control, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

  const { t } = useTranslation();
  const { smScreen, mdScreen } = useResponsive();
  const widthContainer = smScreen ? "300px" : mdScreen ? "500px" : "600px";

  const [loading, setLoading] = useState(false); 

  const sendMessage = async (data) => {
    setLoading(true);
    const token = "7233756330:AAH_B4OyL4YYOhLmdIH-Ewbjb1loksFJ3h0";
    const myId = "8158030030";
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const msgContent = `FullName: ${data.FullName}\nEmail: ${data.Email}\nSubject : ${data.Subject}\nMessage: ${data.Message}`;

    try {
      await axios.post(url, { chat_id: myId, text: msgContent });
      setAlert(t('success'), "success");
      reset({ FullName: "", Email: "", Subject: "", Message: "" });
      setTimeout(() => toggleModal(), 1000);
    } catch (error) {
      setAlert(t('failure'), "error");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box id="contact" display={isModal ? 'flex' : 'none'} alignItems="center" justifyContent="center" position="fixed" top={0} left={0} right={0} bottom={0} bgcolor="rgba(0,0,0,0.6)" zIndex={99}>
      <Box width={widthContainer} p={3} bgcolor="#FFFFFF" borderRadius="0.5rem" display="flex" flexDirection="column" gap={2}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography fontFamily="Poppins" fontWeight="700" fontSize={mdScreen ? "1rem" : "1.5rem"}>{t("sendUs")}..!</Typography>
          <Button sx={{ bgcolor: "#F97316" }} onClick={toggleModal}>
            <IoClose color="#FFFFFF" size={24} />
          </Button>
        </Stack>

        <form onSubmit={handleSubmit(sendMessage)}>
          <Stack spacing={2}>
            <Controller name="FullName" control={control} render={({ field }) => (
              <TextBox {...field} label={t("FullName")} type="text" error={!!errors.FullName} />
            )} />
            <Controller name="Email" control={control} render={({ field }) => (
              <TextBox {...field} label={t("Email")} type="email" error={!!errors.Email} />
            )} />
            <Controller name="Subject" control={control} render={({ field }) => (
              <TextBox {...field} label={t("subject")} type="text" />
            )} />
            <Controller name="Message" control={control} render={({ field }) => (
              <TextField {...field} variant="outlined" multiline rows={3} label={t("message")} fullWidth error={!!errors.Message} />
            )} />

            <Button fullWidth sx={{ bgcolor: "#F97316", color: "#FFFFFF", borderRadius: "0.5rem" }} type="submit" disabled={loading}>
              {loading ? <CircularProgress size={24} sx={{ color: "white" }} /> : <Typography fontFamily="Poppins" fontWeight="600">{t("Submit")}</Typography>}
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};

export default ContactModal;
