export interface LabelProps {
  name: string;
  displayName: string;
  required?: boolean;
  className?: string;
}

export interface ErrorProps {
  message: string | undefined;
}
