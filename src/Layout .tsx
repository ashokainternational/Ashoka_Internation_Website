import FloatingWhatsApp from "./components/FloatingWhatsApp";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* Your existing layout structure */}
      <header>...</header>
      <main>{children}</main>
      <footer>...</footer>

      {/* Add WhatsApp button here */}
      <FloatingWhatsApp />
    </>
  );
};

export default Layout;
