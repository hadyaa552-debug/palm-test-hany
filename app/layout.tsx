import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "هاسيندا راس الحكمة — بالم هيلز · الساحل الشمالي",
  description:
    "هاسيندا راس الحكمة من بالم هيلز على كيلو ٢٣٨ راس الحكمة: شاطئ ٤.٨ كم، ١٬٤٠٠ فدان، ٨٦٪ مساحات خضراء. تواصل واتساب أو اتصل بنا.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
