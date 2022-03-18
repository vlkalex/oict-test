import React
, { useEffect, useState } from 'react';
import '../App.css';
import {
  Box,
  Grid,
  TextField,
  Button,
  Link,
  Typography,
} from '@mui/material';
import { Link as RouterLink, Outlet } from "react-router-dom";
import { getData } from '../api';
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import mockData from '../MOCKDATA.json';


export function MainScreen() {
    const { t } = useTranslation();
    
    const [data, setData] = useState([]);
    const [apiKey, setApiKey] = useState('');
    const [authorized, setAuth] = useState(false);

    const handleInputChange = (event) => {
        const value = event.target.value;
        setApiKey(value);
    };

    const getAPIData = () => {
        getData(apiKey)
            .then((response) => response?.json())
            .then((data) => {
                if(data?.error_status !== 401) {
                    setAuth(true);
                    setData(data.features)
                } else {
                    setAuth(false);
                    setData(mockData)
                }
            })
    }

    useEffect(() => {
        getAPIData();
    },[])

    return (
        <Box sx={{ display: "flex" }} height='100vh' width='100%'>
            <Box sx={{ px: 5 }} className='main-screen'>
                <header className="App-header">
                    <Typography variant='h4'>{t('main_title')}</Typography>
                </header>

                <Box sx={{ my: 2}} height='calc(100% - 230px)' overflow='auto'>
                    <Grid container spacing={{ xs: 2, md: 3 }}>
                        {data?.map((data) => (
                            <Grid item xs={4} key={data.properties.id}>
                            <Link
                                component={RouterLink}
                                className='grid-item'
                                sx={{
                                    textDecoration: "none",
                                }}
                                to={`/detail/${data.properties.id}`}>
                                    <Box
                                        display="flex"
                                        flexDirection='column'
                                        alignItems="center"
                                        justifyContent="center"
                                        sx={{ p: 4 }}>
                                        <Typography variant="h4" color='common.white'>
                                            {data.properties.id}
                                        </Typography>

                                        <Typography variant="body1">
                                            {data.properties.type.description}
                                        </Typography>

                                        <Typography variant="body1">
                                            {t('detail_label_spaces_short')} {data.properties.number_of_places}
                                        </Typography>

                                    </Box>
                                </Link>
                            
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                <Box className="bottom-bar" maxWidth='false'>
                    <Box className="bottom-bar">
                        <TextField className='text-field' id="outlined-basic" label={t('api_key_label')} variant="outlined" sx={{ mr: 2 }} value={apiKey} onChange={handleInputChange} />
                        <Button variant="contained" size="large" onClick={()=>getAPIData()}>{t('use_button')}</Button>
                        {authorized
                        ?   <Typography variant='body2' sx={{ pl: 2, color: 'success.main' }}>{t('correct_api_label')}</Typography>
                        :   <Typography variant='body2' sx={{ pl: 2, color: 'error.main'}}>{t('wrong_api_label')}</Typography>
                        }
                    </Box>

                    <Box>
                        <Button variant='text' onClick={() => { i18next.changeLanguage('sk'); }}>SK</Button>
                        <Button variant='text' onClick={() => { i18next.changeLanguage('en'); }}>EN</Button>
                    </Box>
                </Box>
            </Box>

            <Box width='39%' sx={{ px: 6, py: 1 }}>
                <Typography variant='h4'> {t('detail_title')} </Typography>
                <Outlet context={ apiKey }/>
            </Box>
            
        </Box>
        
    )
}