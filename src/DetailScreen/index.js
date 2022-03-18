import { Typography, Box, Button } from "@mui/material";
import PropTypes from 'prop-types';
import { useParams, useOutletContext } from "react-router-dom";
import { loadDetailData } from "../api";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export function DataDetail() {

    const { t } = useTranslation()
    
    const { id } = useParams()
    const apiKey  = useOutletContext()
    const [ data, setData ] = useState()

    const getDetailData = () => {
        loadDetailData(id, apiKey)
            .then((response) => response.json())
            .then((data) => {
                setData(data)
            })
    }

    useEffect(() => {
        getDetailData();
    },[id])

    return (
        <>
            {data?.error_status !== 404 
            ? ( <Box sx={{py: 2}}>
                    <Typography variant="h3">
                        {data?.properties?.id}
                    </Typography>

                    <Typography variant="body1">
                        {t('detail_label_type')} {data?.properties?.type?.description}
                    </Typography>

                    <Typography variant="body1">
                        {t('detail_label_spaces')} {data?.properties?.number_of_places}
                    </Typography>

                    <Button variant="contained" href={data?.properties?.payment_link}>{t('link_button')}</Button>
                </Box>
            )
            : (
                <Typography variant='h3'>
                    Zlé ID parkovacej zóny
                </Typography>
            )}
        </>
    )
}