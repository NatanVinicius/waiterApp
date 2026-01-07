import { AxiosError } from "axios";

export const getAxiosErrorMessage = (error: unknown) => {
  if (error instanceof AxiosError) {
    return error.response?.data?.error ?? "Unexpected error";
  }

  if (error instanceof Error) {
    return error.message;
  }

  return "Unexpected error";
};
