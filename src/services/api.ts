import axios, {AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig} from 'axios';
import { StatusCodes } from 'http-status-codes';
import { getToken } from './token';
import { toast } from 'react-toastify';

// type DetailMessageType = {
//   details:
// }

type ValidationErrorDetail = {
  property: string;
  value: string;
  messages: string[];
};

type ApiError = {
  errorType: string;
  message: string;
  details: ValidationErrorDetail[];
};

const BACKEND_URL = 'https://16.design.htmlacademy.pro/six-cities';
const REQUEST_TIMEOUT = 5000;

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true
};

const shouldDisplayError = (response: AxiosResponse) => StatusCodeMapping[response.status];

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['X-token'] = token;
      }

      return config;
    },
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<ApiError>) => {
      if (error.response && shouldDisplayError(error.response)) {
        const { details } = error.response.data;
        if (details && details.length > 0) {
          const firstError = details[0];
          toast.warn(firstError.messages[0]);
        } else {
          toast.warn(error.response.data.message);
        }
      }
      throw error;
    }
  );


  return api;
};
