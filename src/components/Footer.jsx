import { Heart, Mail, MapPinned, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div>
                        <div className="logo" style={{ color: "white", marginBottom: "1rem" }}>
                            <Heart size={28} />
                            IHSAN
                        </div>
                        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.875rem", lineHeight: "1.6" }}>
                            Empowering communities with trust, transparency, and real-time impact tracking.
                            Restoring dignity through verifiable charity, one block at a time.
                        </p>
                    </div>

                    <div>
                        <h4 className="footer-title">Navigation</h4>
                        <ul className="footer-links">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#needs">Needs Catalog</a></li>
                            <li><a href="#">Public Transparency Dashboard</a></li>
                            <li><a href="#">Our Validator Network</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="footer-title">Contact</h4>
                        <ul className="footer-links" style={{ color: "rgba(255,255,255,0.8)" }}>
                            <li style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                <MapPinned size={16} /> Nouakchott, Mauritania
                            </li>
                            <li style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                <Mail size={16} /> info@ihsan-platform.com
                            </li>
                            <li style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                <Phone size={16} /> +222 42 55 53 27
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="footer-title">Social & Partners</h4>
                        <ul className="footer-links" style={{ color: "rgba(255,255,255,0.8)" }}>
                            <li><a href="#">Twitter/X</a></li>
                            <li><a href="#">LinkedIn</a></li>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">API Documentation</a></li>
                        </ul>
                    </div>
                </div>

                <div className="copyright">
                    &copy; {new Date().getFullYear()} IHSAN Transparent Charity Platform. All rights reserved. <br />
                    Designed for maximum transparency and efficiency.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
