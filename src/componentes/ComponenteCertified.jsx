import React, { useState } from 'react';

function ComponenteCertified() {
    const [code, setCode] = useState("");
    const [verifiedCode, setVerifiedCode] = useState("");

    const handleVerify = () => {
        setVerifiedCode(code);
    };


    return (
        <>
            <div style={{ backgroundColor: "#CF0F09", color: "white", padding: "20px", fontSize: "1.7em", fontWeight: "bold", display: "flex", alignItems: "center", gap: "10px" }}>
                Verify Certificates
            </div>
            <div style={{ backgroundColor: "#f5f6f7", margin: "30px", padding: "20px", boxSizing: "border-box", minHeight: "400px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                    <label htmlFor="code" style={{ minWidth: "60px" }}>
                        Certificate Code:
                    </label>
                    <input value={code} onChange={(e) => setCode(e.target.value)} type="text" id="code" style={{ padding: "8px 12px", width: "250px", border: "1px solid #ccc" }} />
                    <button onClick={handleVerify} style={{ backgroundColor: "#D32F2F", color: "white", padding: "10px 20px", border: "none", cursor: "pointer", borderRadius: "20px" }}>
                        Verify
                    </button>
                </div>
                {verifiedCode === "26989600802" && (
                    <>
                        <div style={{ color: "green", fontWeight: "bold", width: "100%", background: "#DEF1DE", padding: "16px 0", textAlign: "center", borderRadius: "8px" }}>
                            This certificate is valid
                        </div>
                        <table className='table'>
                            <tbody>
                                <tr>
                                    <td> Full Name: </td>
                                    <td> Angel Alejandro Sanchez Ramos </td>
                                </tr>
                                <tr>
                                    <td> Certificate: </td>
                                    <td> Marcus Certified Professional </td>
                                </tr>
                                <tr>
                                    <td> Date Issued: </td>
                                    <td> November 14, 2024 </td>
                                </tr>
                                <tr>
                                    <td> Expiry Date: </td>
                                    <td> November 14, 2026 </td>
                                </tr>
                                <tr>
                                    <td> Status: </td>
                                    <td> Valid </td>
                                </tr>
                            </tbody>
                        </table>
                    </>
                )}
                {verifiedCode === "58341270965" && (
                    <>
                        <div style={{ color: "green", fontWeight: "bold", width: "100%", background: "#DEF1DE", padding: "16px 0", textAlign: "center", borderRadius: "8px" }}>
                            This certificate is valid
                        </div>
                        <table className='table'>
                            <tbody>
                                <tr>
                                    <td> Full Name: </td>
                                    <td> Angel Alejandro Sanchez Ramos </td>
                                </tr>
                                <tr>
                                    <td> Certificate: </td>
                                    <td> One Security Certified Professional </td>
                                </tr>
                                <tr>
                                    <td> Date Issued: </td>
                                    <td> November 29, 2024 </td>
                                </tr>
                                <tr>
                                    <td> Expiry Date: </td>
                                    <td> November 29, 2026 </td>
                                </tr>
                                <tr>
                                    <td> Status: </td>
                                    <td> Valid </td>
                                </tr>
                            </tbody>
                        </table>
                    </>
                )}
                {verifiedCode === "94718052633" && (
                    <>
                        <div style={{ color: "green", fontWeight: "bold", width: "100%", background: "#DEF1DE", padding: "16px 0", textAlign: "center", borderRadius: "8px" }}>
                            This certificate is valid
                        </div>
                        <table className='table'>
                            <tbody>
                                <tr>
                                    <td> Full Name: </td>
                                    <td> Angel Alejandro Sanchez Ramos </td>
                                </tr>
                                <tr>
                                    <td> Certificate: </td>
                                    <td> Zero Spam Certified Professional </td>
                                </tr>
                                <tr>
                                    <td> Date Issued: </td>
                                    <td> July 15, 2024 </td>
                                </tr>
                                <tr>
                                    <td> Expiry Date: </td>
                                    <td> July 15, 2026 </td>
                                </tr>
                                <tr>
                                    <td> Status: </td>
                                    <td> Valid </td>
                                </tr>
                            </tbody>
                        </table>
                    </>
                )}
                {verifiedCode === "32059487106" && (
                    <>
                        <div style={{ color: "green", fontWeight: "bold", width: "100%", background: "#DEF1DE", padding: "16px 0", textAlign: "center", borderRadius: "8px" }}>
                            This certificate is valid
                        </div>
                        <table className='table'>
                            <tbody>
                                <tr>
                                    <td> Full Name: </td>
                                    <td> Angel Alejandro Sanchez Ramos </td>
                                </tr>
                                <tr>
                                    <td> Certificate: </td>
                                    <td> Secure Domain Intelligence Professional </td>
                                </tr>
                                <tr>
                                    <td> Date Issued: </td>
                                    <td> Abril 02, 2024 </td>
                                </tr>
                                <tr>
                                    <td> Expiry Date: </td>
                                    <td> Abril 02, 2026 </td>
                                </tr>
                                <tr>
                                    <td> Status: </td>
                                    <td> Valid </td>
                                </tr>
                            </tbody>
                        </table>
                    </>
                )}
                {verifiedCode &&
                    (verifiedCode !== "26989600802" &&
                        verifiedCode !== "58341270965" &&
                        verifiedCode !== "94718052633" &&
                        verifiedCode !== "32059487106") && (
                        <div style={{ color: "#CF0F09", fontWeight: "bold" }}>
                            You have to insert a valid code to verify the certificate.
                        </div>
                    )}

            </div>

        </>
    );
}

export default ComponenteCertified;
