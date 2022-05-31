import { createTheme } from "@mui/material/styles"


export const appTheme = (isDarkMode: Boolean) => {
    let theme = createTheme({
        typography: {
            fontFamily: "Nunito Sans",
            fontWeightLight: 300,
            fontWeightRegular: 400,
            fontWeightMedium: 600,
            fontWeightBold: 800,
            fontSize: 14
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    text: {
                        textTransform: "capitalize",
                        color: !isDarkMode ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)"
                    }
                }
            },
            MuiPaper: {
                styleOverrides: {
                    elevation1: {
                        boxShadow: "0px 1px 8px rgb(0 0 0 / 10%)",
                        background: isDarkMode ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)",
                        color: !isDarkMode ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)"
                    }
                }
            }
        },
        palette: {
            mode: isDarkMode ? "dark" : "light",
            primary: {
                main: isDarkMode ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)",
            },
            background: {
                default: isDarkMode ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 98%)",
                paper: isDarkMode ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)",
            },
            secondary: {
                main: isDarkMode ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)",
            }
        }
    })
    return theme
}