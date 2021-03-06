/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { memo } from 'react';
import styled from '@emotion/styled';

import ThemeContent from './theme-content';
import Footer from './footer';
import './layout.css';

interface ILayoutProps {
  children: JSX.Element[] | React.ReactElement;
}

function Layout({ children }: ILayoutProps) {
  return (
    <>
      <ThemeContent />
      <Container>
        <Content>{children}</Content>
        <Footer />
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
`;

const Content = styled.main`
  padding: 24px;
  max-width: 1440px;
  min-height: 768px;
  margin: 0 auto;
`;

export default memo(Layout);
