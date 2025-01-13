import '@/assets/styles/globals.css'
import AuthProvider from '@/components/AuthProvider';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


export const metadata = {
  title: "Cape Properties 101",
  description: "Cape Properties By Brad",
  keywords:"Cape Properties 101, properties, cape town rentals"
};

export default function MainLayout({ children }) {
  return (
    <AuthProvider>

    <html lang="en">
      <body
        className={""}
        >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ToastContainer />
      </body>
    </html>
  </AuthProvider>
  );
}
