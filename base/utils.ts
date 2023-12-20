import CryptoJS from "crypto-js";
 
export function getDecryptedValue(data: string) {
    const secretKey = process.env.SECRET_KEY;

    if (secretKey === undefined) {
        console.error("SECRET_KEY is undefined");
        return "";  
    }

    try {
        const decrypted = CryptoJS.AES.decrypt(data, secretKey);
        if (!decrypted) {
            throw new Error("Decryption failed");
        }
        console.log(decrypted);
        return decrypted.toString(CryptoJS.enc.Utf8);
    } catch (error) {
        console.error("Error during decryption:", error.message);
        return "";
    }
}