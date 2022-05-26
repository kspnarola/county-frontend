import React, { useState } from 'react'
import Header from './Header'
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { useAppState } from '../../context';
import { appTheme } from '../../theme';
import { Paper } from '@material-ui/core';

const AppLayout = ({ children }: any) => {
  const { isDarkMode } = useAppState("app");
  const theme = appTheme(isDarkMode)

  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ height: "100%", minHeight: "100vh", border: 0, boxShadow: "none" }}>
        <div className='app'>
          <Header />
          {children}
        </div>
      </Paper>
    </ThemeProvider>
  )
}

export default AppLayout