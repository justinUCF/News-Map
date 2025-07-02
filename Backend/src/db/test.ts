import db from "./connection";

async function testConnection() {
    try {
        const collections = await db.listCollections().toArray();
        console.log("Collections in DB:", collections.map(c => c.name));
    } catch (error) {
        console.error("Test failed:", error);
    } finally {
        process.exit(0);
    }
}

testConnection();