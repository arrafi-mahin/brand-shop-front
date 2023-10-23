

const Footer = () => {
    const date = new Date();
    let year = date.getFullYear();
    return (
        <footer className="py-8 bg-blue-950 text-center">
            <p>© {year} All Copy Rights Reserved by RAFI AUTOS</p>
        </footer>
    );
};

export default Footer;