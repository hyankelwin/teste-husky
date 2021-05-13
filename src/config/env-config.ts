const EnvConfig = {
  REACT_NATIVE_V1_URL: process.env.REACT_NATIVE_APP_V1_URL,
  REACT_NATIVE_V1_TOKEN: process.env.REACT_NATIVE_APP_V1_TOKEN,
  REACT_NATIVE_V1_TIMEOUT: process.env.REACT_NATIVE_APP_V1_TIMEOUT
    ? Number(process.env.REACT_NATIVE_APP_V1_TIMEOUT)
    : 30000,
};

export default EnvConfig;
