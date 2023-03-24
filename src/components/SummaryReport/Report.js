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
        <div>
            <a href='./Report.pdf'/>
        </div>
       
    )
}

const styles = StyleSheet.create({
    page: {padding: 20},
    title: {fontSize: 30, color: 'black', fontWeight: 'bold', textDecoration: 'underline'},
    header: {paddingTop: 10},
    body: {paddingTop: 5}
  });


export default Report