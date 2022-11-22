import * as React from 'react';

import * as reactHookForm from 'react-hook-form';

// Redux-saga
import { Provider } from 'react-redux';
import * as reduxSagaEffects from 'redux-saga/effects';

// React testing Library
import {
  render,
  cleanup,
  fireEvent,
  act,
  waitFor,
  renderHook as reactRenderHook,
  RenderHookResult,
} from '@testing-library/react';
import { createRenderer } from 'react-test-renderer/shallow';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import renderer from 'react-test-renderer';

// Material Theme
import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import muiTheme from 'styles/theme/mui-theme';

// Store
import { configureAppStore } from 'store/configureStore';

jest.mock('./src/utils/api', () => ({
  getCall: () => Promise.resolve(),
}));

const ThemeWrapper = ({ children }) => {
  return <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>;
};

const MockHelmetWrapper = ({ children }) => {
  return (
    <ThemeWrapper>
      <HelmetProvider>{children}</HelmetProvider>
    </ThemeWrapper>
  );
};

const MockRouterWrapper = ({ children }) => {
  return (
    <MemoryRouter>
      <MockHelmetWrapper>{children}</MockHelmetWrapper>
    </MemoryRouter>
  );
};

const StoreWrapper = ({ children }: { children: JSX.Element }) => {
  const store = configureAppStore();

  return (
    <Provider store={store}>
      <MockRouterWrapper>{children}</MockRouterWrapper>
    </Provider>
  );
};

const mockError = {
  code: 400,
  message: 'Test Error',
};

type RenderHookType = <
  Hook extends (...props: any) => any,
  Result = ReturnType<Hook>,
>(
  hook: Hook,
) => RenderHookResult<Result, any>;

const renderHook: RenderHookType = hook =>
  reactRenderHook(hook, {
    wrapper: StoreWrapper,
  });

export {
  React,
  reactHookForm,
  render,
  cleanup,
  fireEvent,
  act,
  waitFor,
  createRenderer,
  MemoryRouter,
  Routes,
  Route,
  MuiThemeProvider,
  muiTheme,
  HelmetProvider,
  renderer,
  ThemeWrapper,
  MockHelmetWrapper,
  MockRouterWrapper,
  StoreWrapper,
  reduxSagaEffects,
  renderHook,
  mockError,
};
