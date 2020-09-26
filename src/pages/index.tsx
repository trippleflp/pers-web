import Head from 'next/head'
import React from "react";
import { themeLight } from '../theme'
/** @jsx jsx */
import { Card, Text, jsx, Box, Button, Flex, Heading, ThemeProvider } from "theme-ui";
import Header from '../components/Main/Header/Header';

const siteTitle = "Welcome"
export default function Home() {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Header></Header>

      <ThemeProvider theme={themeLight}>

        <section sx={{
          bg: 'background',
          color: 'text',
          height: '100vh',
        }}>
          <Box
            p={4}>
            <Flex
              sx={{
                alignItems: 'center',
              }}>
              <Heading>
                Components
            </Heading>
              <Button ml='auto'>
                Beep
            </Button>
            </Flex>
          </Box>

        </section>

      </ThemeProvider>
    </>
  )
}
