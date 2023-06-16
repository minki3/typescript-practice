import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import ViewPage from "./View";

// const styles = StyleSheet.create({
//   page: {
//     flexDirection: "row",
//     backgroundColor: "#E4E4E4",
//   },
//   section: {
//     margin: 10,
//     padding: 10,
//     flexGrow: 1,
//   },
//   text: {
//     fontSize: 12,
//     textAlign: "justify",
//   },
// });

export default function FormPage() {
  return (
    <Document>
      <Page size="A4">
        <View>
          <Text>
            <p>2190e02qdjasd</p>
            <>sdfsjldfsdasdusdofjsdofjsdopjsopfjsdopfjsfsdu90f</>
            <ViewPage />
          </Text>
        </View>
      </Page>
    </Document>
  );
}
