import React from "react";
import { EmotionCache } from "@emotion/utils/types";
import { CacheProvider as EmotionProvider } from "@emotion/core";
import { Provider as ConnectProvider } from "@frontity/connect";
import { Package } from "@frontity/types";
import { HelmetProvider } from "react-helmet-async";
import { HelmetContext } from "../../types";

type Props = {
  store: Package;
  helmetContext?: HelmetContext;
  cache: EmotionCache;
};

const App: React.FunctionComponent<Props> = ({
  store,
  helmetContext = {},
  cache
}) => {
  return (
    <HelmetProvider context={helmetContext}>
      <EmotionProvider value={cache}>
        <ConnectProvider value={store}>
          {Object.entries(store.roots).map(([namespace, Root]) => (
            <Root key={namespace} />
          ))}
          {Object.entries(store.fills).map(([namespace, Fill]) => (
            <Fill key={namespace} />
          ))}
        </ConnectProvider>
      </EmotionProvider>
    </HelmetProvider>
  );
};

export default App;
