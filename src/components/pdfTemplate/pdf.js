import React from 'react';
import ReactPDF, { Page, Text, Image,View, Document, StyleSheet } from "@react-pdf/renderer";
import SarfHeader from './../../sarf-template/header.jpg'

// Create styles


const styles = StyleSheet.create({
  body: {
  
  },
  header:{
     width:"100%",
    border:1,
    borderColor:"black",
     objectFit:"contain"
  },
  main: {
    flex:1,
    flexDirection:"row"
    
  },
  text: {
    margin: 12,
    fontSize: 16,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  image: {
    height:100,
    width:"100%",
    objectFit:"contain"
  },
  con:{
    flex:1,
    flexDirection:"column",
    gap:10
  }
 

});

// Create Document Component
const Sarf = (props) => (
  
  
    <Document creator='Nico Gwapo' pageMode="fullScreen">
    <Page size={"A4"} style={styles.body}>
    <Image style={styles.header} src={SarfHeader} />
      <View style={styles.main}>
    
        <View style={styles.con}>
           
        <Text  style={styles.text}>
        Name of Organization: {props.organization}
        </Text>
        <Text  style={styles.text}>
        Name of Representative:{props.name}
        </Text>
        <Text  style={styles.text}>
        Title of Event:{props.eventName}
        </Text>
        <Text  style={styles.text}>
        Type of Event:{props.eventType}
        </Text>
        <Text  style={styles.text}>
        Date of Event:{props.date}
        </Text>

        <Text  style={styles.text}>
        Specific Objectives:{props.SObjectives}
        </Text>
        <Text  style={styles.text}>
        General Objective:{props.GObjective}
        </Text>

        <Text  style={styles.text}>
        Number of Participants:{props.Particapance}
        </Text>
        <Text  style={styles.text}>
        Start Time:{props.startTime}
        </Text>

        <Text  style={styles.text}>
        EndTime:{props.endTime}
        </Text>
        <Text  style={styles.text}>
        Venue of Event:{props.venue}
        </Text>

        <Text  style={styles.text}>
        Ammount:{props.ammount}
        </Text>


        </View>  
      </View>
      
    </Page>
  </Document>
);


export default Sarf