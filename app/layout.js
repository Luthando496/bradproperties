import '@/assets/styles/globals.css'
import Navabar from '@/components/Navabar';


export const metadata = {
  title: "Cape Properties 101",
  description: "Cape Properties By Brad",
  keywords:"Cape Properties 101, properties, cape town rentals"
};

export default function MainLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={""}
      >
        <Navabar />
        <main>{children}</main>
      </body>
    </html>
  );
}
