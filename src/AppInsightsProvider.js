import {
  AppInsightsContext,
  ReactPlugin,
} from '@microsoft/applicationinsights-react-js';
import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import * as React from 'react';

export const reactPlugin = new ReactPlugin();

function initializeAppInsight() {
  const appInsights = new ApplicationInsights({
    config: {
      connectionString: 'InstrumentationKey=YOUR_INSTRUMENTATION_KEY',
      enableUnhandledPromiseRejectionTracking: true,
      extensionConfig: {},
      extensions: [reactPlugin],
    },
  });

  try {
    appInsights.loadAppInsights();
  } catch {
    console.log('Unable to load app insights');
    return;
  }
}

export const AppInsightsProvider = ({ children }) => {
  React.useEffect(() => {
    initializeAppInsight();
  }, []);

  return (
    <AppInsightsContext.Provider value={reactPlugin}>
      {children}
    </AppInsightsContext.Provider>
  );
};
