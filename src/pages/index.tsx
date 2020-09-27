import Head from 'next/head'
import React, { Component } from "react";
import { themeLight } from '../theme'
/** @jsx jsx */
import { Card, Text, jsx, Box, Button, Flex, Heading, ThemeProvider } from "theme-ui";
import Header from '../components/Main/Header/Header';
import Navigation from '../components/Shared/Navigation/Navigation';

const siteTitle = "Welcome"
export default class Home extends Component {

  state = {
    isLight: false
  }
  toggleNav = () => this.setState({
    isLight: !this.state.isLight
  })
  
  render(){return(
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Navigation light={this.state.isLight} toggle={this.toggleNav}/>
      <Header/>

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
              <Button ml='auto' onClick={this.toggleNav}>
                Beep
            </Button>
            </Flex>
          </Box>

        </section>

      </ThemeProvider>
    </>
  )}
}
