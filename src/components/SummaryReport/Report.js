import { Stack , List, Container} from '@mantine/core';
import { IconAlertCircle, IconBold } from '@tabler/icons-react';
import {useState} from 'react';
import { Link } from "react-router-dom";
import { DownloadIcon } from '../Icon/index';
import ReactPDF, { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import {data} from './Data';
import FloorBreakdownTable from "../Dashboard/FloorBreakdownTable";

const Report = () => {

    return (
        <Document title={data[0].title}>
            <Page style={styles.page}>
                <View>
                    <Text style={styles.title}>
                        {data[0].title}
                    </Text>
                </View>
                
                <Text style={styles.header}>
                    {data[0].header}
                </Text>

                <Text>
                    {data[0].body}
                </Text>

                <View>
                    {/* <FloorBreakdownTable/> */}
                </View>
            </Page>
        </Document>
    )
}

const styles = StyleSheet.create({
    page: {padding: 20},
    title: {fontSize: 30, color: 'black', fontWeight: 'bold', textDecoration: 'underline'},
    header: {paddingTop: 10},
    body: {paddingTop: 5}
  });


export default Report