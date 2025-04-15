import fs from 'fs/promises';

(async () => {
    try {
        // Read the hex content from the file
        const hex = await fs.readFile('hex.txt', 'utf-8');

        // Convert hex to binary data (Buffer)
        const binaryData = Buffer.from(hex.trim(), 'hex'); // Trim to remove extra spaces or newlines

        // Write the binary data directly as a PDF file
        await fs.writeFile('file.pdf', binaryData);

        console.log('PDF file successfully created: file.pdf');
    } catch (error) {
        console.error('Error:', error);
    }
})();
