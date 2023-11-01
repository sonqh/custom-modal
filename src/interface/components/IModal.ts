import { CustomAnimation } from "../config/IAnimation";

type ModalPosition = "top" | "left" | "right" | "bottom" | "center";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  header?: React.ReactNode;
  title?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
  customStyles?: React.CSSProperties;
  animation?: CustomAnimation;
  position?: ModalPosition;
  fullscreen?: boolean;
}
