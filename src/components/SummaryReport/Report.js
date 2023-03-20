import { Stack , List, Container} from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';
import {useState} from 'react';
import { Link } from "react-router-dom";
import { DownloadIcon } from '../Icon/index';
import ReactPDF, { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';;

const Report = () => {

    return (
        <Document>
            <Page>
                <Text>
                    Hello
                </Text>
            </Page>
        </Document>
    )
    
}


export default Report