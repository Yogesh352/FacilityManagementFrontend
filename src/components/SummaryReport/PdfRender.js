import React from 'react';
import { PDFViewer, PDFDownloadLink, Document, Page, Text } from '@react-pdf/renderer';
import Report from './Report';

const PdfRender = () => {
    return (
        <PDFViewer style={{ height: '100%', width: '100%' }}>
            <Report />
        </PDFViewer>
    );
};

export default PdfRender;