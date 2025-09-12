import React, { useState, useEffect } from "react";

function ComponenteCertified() {
    const [code, setCode] = useState("");
    const [verifiedCode, setVerifiedCode] = useState("");
    const [certificates, setCertificates] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Carga dinámica desde archivo externo
        fetch("/certificates.json")
            .then((res) => res.json())
            .then((data) => {
                setCertificates(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error loading certificates:", err);
                setLoading(false);
            });
    }, []);

    const handleVerify = () => {
        setVerifiedCode(code.trim());
    };

    const certificate = certificates.find((c) => c.code === verifiedCode);

    return (
        <>
            <div
                style={{
                    backgroundColor: "#CF0F09",
                    color: "white",
                    padding: "20px",
                    fontSize: "1.7em",
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                }}
            >
                Verify Certificates
            </div>

            <div
                style={{
                    backgroundColor: "#f5f6f7",
                    margin: "30px",
                    padding: "20px",
                    boxSizing: "border-box",
                    minHeight: "400px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        marginBottom: "10px",
                    }}
                >
                    <label htmlFor="code" style={{ minWidth: "60px" }}>
                        Certificate Code:
                    </label>
                    <input
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        type="text"
                        id="code"
                        style={{
                            padding: "8px 12px",
                            width: "250px",
                            border: "1px solid #ccc",
                        }}
                    />
                    <button
                        onClick={handleVerify}
                        style={{
                            backgroundColor: "#D32F2F",
                            color: "white",
                            padding: "10px 20px",
                            border: "none",
                            cursor: "pointer",
                            borderRadius: "20px",
                        }}
                    >
                        Verify
                    </button>
                </div>

                {loading && <p>Loading certificates...</p>}

                {!loading && verifiedCode && !certificate && (
                    <div style={{ color: "#CF0F09", fontWeight: "bold" }}>
                        You have to insert a valid code to verify the certificate.
                    </div>
                )}

                {!loading && certificate && (
                    <>
                        <div
                            style={{
                                color: "green",
                                fontWeight: "bold",
                                width: "100%",
                                background: "#DEF1DE",
                                padding: "16px 0",
                                textAlign: "center",
                                borderRadius: "8px",
                            }}
                        >
                            This certificate is valid
                        </div>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>Full Name:</td>
                                    <td>{certificate.fullName}</td>
                                </tr>
                                <tr>
                                    <td>Certificate:</td>
                                    <td>{certificate.certificate}</td>
                                </tr>
                                <tr>
                                    <td>Date Issued:</td>
                                    <td>{certificate.issued}</td>
                                </tr>
                                <tr>
                                    <td>Expiry Date:</td>
                                    <td>{certificate.expiry}</td>
                                </tr>
                                <tr>
                                    <td>Status:</td>
                                    <td>{certificate.status}</td>
                                </tr>
                            </tbody>
                        </table>
                    </>
                )}
            </div>
        </>
    );
}

export default ComponenteCertified;
