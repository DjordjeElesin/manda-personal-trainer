import axios, {
  isAxiosError,
  type AxiosRequestConfig,
  type Method,
} from "axios";

const FIFTEEN_SECONDS = 15000;

const axiosInstance = axios.create({
  baseURL: "/api",
  timeout: FIFTEEN_SECONDS,
});

type TApiOptions = {
  method?: Method;
  url: string;
  params?: Record<string, unknown>;
  data?: unknown;
  config?: AxiosRequestConfig;
};

export const api = async ({
  method = "GET",
  url,
  params,
  data,
  config = {},
}: TApiOptions) => {
  try {
    const response = await axiosInstance({
      method,
      url,
      data,
      params,
      ...config,
    });

    return response.data;
  } catch (err: unknown) {
    if (isAxiosError(err))
      throw new Error(err.response?.data?.error?.message || err.message, {
        cause: err,
      });

    throw err instanceof Error
      ? err
      : new Error("An unexpected error occurred");
  }
};
