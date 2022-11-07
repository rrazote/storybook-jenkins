import { createTheme } from '@mui/material';

const CustomTheme = createTheme({
    components: {
        MuiButton: {
            variants: [
                {
                    props: {
                        variant: 'ad_reas_primary'
                    },
                    style: {
                        backgroundColor: '#0C488C',
                        color: '#FFFFFF',
                        ":hover": {
                            backgroundColor: '#1161BD',
                        },
                        padding: '4px 8px',
                        fontSize: '0.7rem',
                        fontWeight: 'bold'
                    }
                }
            ],
            defaultProps: {
                size: 'small'
            }
        },
        MuiToolbar: {
            variants: [
                {
                    props: {
                        variant: 'ad_reas_primary',
                    },
                    style: {
                        backgroundColor: '#5EA3F2',
                        color: '#FFFFFF',
                        padding: 6
                    }
                }
            ]
        },
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: 'ad_reas_title_bar'
                    },
                    style: {
                        fontSize: '16px',
                        fontWeight: 'bold',
                        padding: '10px',
                        color: '#FFFFFF',
                        backgroundColor: '#2B4A6E'
                    }
                }
            ]
        }
    }
});

export { CustomTheme };