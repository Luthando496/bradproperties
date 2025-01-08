import '@/assets/styles/globals.css'
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';


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
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
