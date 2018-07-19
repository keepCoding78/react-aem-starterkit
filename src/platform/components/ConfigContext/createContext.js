import createReactContext from 'create-react-context';

const aggregatedConfig = window.__COMPONENT_CONFIG__ || {};

const ConfigContext = createReactContext(aggregatedConfig);

export default ConfigContext;