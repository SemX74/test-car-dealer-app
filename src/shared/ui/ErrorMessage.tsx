import { FC } from "react";

interface ErrorMessageProps {
  message?: string;
}

const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div>
      <span>Error!</span>
      <p>{message || "Something went wrong"}</p>
    </div>
  );
};

export default ErrorMessage;
