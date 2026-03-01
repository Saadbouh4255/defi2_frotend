import { useState } from 'react';
import { Shield, Link as LinkIcon, ExternalLink } from 'lucide-react';

const BlockchainVerify = () => {
    const [txId, setTxId] = useState('');

    const handleVerify = (e) => {
        e.preventDefault();
        if (!txId) return;
        // Simulate testnet redirect
        window.open(`https://testnet.explorer.ihsan.com/tx/${txId}`, '_blank');
    };

    return (
        <section className="blockchain-section">
            <div className="container">
                <h2 className="section-title" style={{ color: 'white', marginBottom: '1rem' }}>
                    <Shield size={36} color="var(--primary)" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '1rem' }} />
                    Blockchain Verification
                </h2>
                <p style={{ color: '#94a3b8', maxWidth: '600px', margin: '0 auto 3rem' }}>
                    Every donation made through IHSAN is permanently recorded on a public blockchain testnet to guarantee immutability, transparency, and traceability from the donor to the final beneficiary.
                </p>

                <div className="blockchain-card">
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Verify a Transaction</h3>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem' }}>
                        Enter your Transaction ID below to verify its status on the public ledger.
                    </p>

                    <form className="verify-input-group" onSubmit={handleVerify}>
                        <input
                            type="text"
                            className="verify-input"
                            placeholder="e.g. 0x9f8b...32c4"
                            value={txId}
                            onChange={(e) => setTxId(e.target.value)}
                        />
                        <button type="submit" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <ExternalLink size={18} />
                            Verify
                        </button>
                    </form>

                    <div style={{ marginTop: '2rem', display: 'flex', gap: '8px', justifyContent: 'center', color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem' }}>
                        <LinkIcon size={14} />
                        <a href="https://testnet.explorer.ihsan.com" target="_blank" rel="noreferrer" style={{ textDecoration: 'underline' }}>
                            Or browse the live Testnet Explorer
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlockchainVerify;
