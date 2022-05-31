import React from 'react'
import Header from './Header'
import { ThemeProvider } from '@mui/material/styles';
import { useAppState } from '../../context';
import { appTheme } from '../../theme';
import { Paper } from '@mui/material';

interface AppLayoutProps {
  children: React.ReactNode
}


const AppLayout = (props: AppLayoutProps) => {
  const { isDarkMode } = useAppState("app");
  const theme = appTheme(isDarkMode)

  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ height: "100%", minHeight: "100vh", border: 0, boxShadow: "none" }}>
        <div className='app'>
          <Header />
          {props.children}
        </div>
      </Paper>
    </ThemeProvider>
  )
}

export default AppLayout