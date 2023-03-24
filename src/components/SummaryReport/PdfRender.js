import React from 'react';
import { PDFViewer, PDFDownloadLink, Document, Page, Text } from '@react-pdf/renderer';
import pdf from './Report.pdf'
import Report from './Report.js'

const PdfRender = () => {
    return (
        <PDFViewer style={{ height: '100%', width: '100%' }}>
            <Document file='Report.pdf'>
                    <Page />
            </Document>
        </PDFViewer>
    );
};

export default PdfRender;