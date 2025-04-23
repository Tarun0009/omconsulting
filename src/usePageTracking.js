// src/usePageTracking.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

const GA_MEASUREMENT_ID = 'G-HLDC6MT4FB'; // your ID

ReactGA.initialize(GA_MEASUREMENT_ID);

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);
};

export default usePageTracking;
