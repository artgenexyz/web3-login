import {createTheme} from "@mui/material";

export const defaultTheme = createTheme({
    palette: {
        primary: {
            main: "#1f1f1f",
        },
    },
    spacing: [0, 4, 8, 12, 16, 24, 32, 64],
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    boxShadow: "none"
                },
                contained: {
                    padding: "8px 32px",
                    color: "#fff",
                    borderRadius: "5px",
                    "&:hover": {
                        boxShadow: "none"
                    },
                },
                outlined: {
                    padding: "8px 32px",
                    borderRadius: "5px",
                    "&:hover": {
                        boxShadow: "none"
                    },
                }
            }
        },
        MuiDialog: {
            styleOverrides: {
                paper: {
                    backgroundImage: "inherit",
                    borderRadius: "20px",
                    padding: "40px 60px"
                }
            }
        },
        MuiDialogTitle: {
            styleOverrides: {
                root: {
                    padding: "0px",
                    fontSize: "28px",
                }
            }
        },
        MuiChip: {
            styleOverrides: {
                label: {
                    color: "rgba(0, 0, 0, 0.6)"
                }
            }
        },
        MuiFilledInput: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    '&::before': {
                        borderBottom: "0px !important",
                    },
                    '&::after': {
                        borderBottom: "0px !important",
                    }
                },
                input: {
                    paddingLeft: 16,
                    paddingRight: 16,
                    color: "#171A1F",
                    '&:-webkit-autofill': {
                        borderRadius: "inherit"
                    }
                }
            }
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    fontSize: "16px",
                    lineHeight: "24px",
                    transform: "translate(16px, 16px) scale(1)",
                    color: "#9D9FA3",
                    marginTop: "0 !important",
                },
                shrink: {
                    fontSize: "13px",
                    lineHeight: "18px",
                    transform: "translate(16px, 8px) scale(1)",
                    color: "#71747A"
                }
            }
        },
        MuiAutocomplete: {
            styleOverrides: {
                root: {
                    '& .MuiFilledInput-root': {
                        paddingLeft: 16,
                        '& .MuiFilledInput-input': {
                            lineHeight: "24px",
                            padding: "0px",
                            paddingTop: "6px",
                            paddingBottom: "8px"
                        }
                    },
                }
            }
        }
    },
    typography: {
        fontFamily: "Inter, San Francisco, Roboto, Helvetica, sans-serif",
        button: {
            color: "#fff",
            fontSize: "16px !important",
            textTransform: "none",
        },
        h4: {
            fontWeight: 600
        },
        h5: {
            fontWeight: 500
        },
        subtitle1: {
            marginTop: "16px !important",
            fontWeight: 400,
            color: "rgba(0, 0, 0, 0.7)"
        },
        // @ts-ignore
        description: {
            fontWeight: 300,
            color: "rgba(156, 163, 175)"
        }
    },
});
