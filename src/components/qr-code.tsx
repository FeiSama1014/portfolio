import QRCode from "qrcode";

type Props = {
  value: string;
  size?: number;
  className?: string;
};

export async function QrCode({ value, size = 160, className }: Props) {
  const svg = await QRCode.toString(value, {
    type: "svg",
    margin: 1,
    color: { dark: "#0a0a0a", light: "#ffffff" },
    errorCorrectionLevel: "M",
  });

  return (
    <div
      className={className}
      style={{ width: size, height: size }}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: svg }}
      aria-label="Scan to open prototype"
    />
  );
}
