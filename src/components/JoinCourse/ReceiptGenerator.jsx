import React from 'react';
import { Button, ButtonGroup, Tooltip } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import TableViewIcon from '@mui/icons-material/TableView';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

// פונקציה ליצירת קבלה ב-PDF
const generatePDF = (courseData, studentData = null) => {
  // יצירת מסמך PDF חדש
  const doc = new jsPDF();
  
  // הוספת כותרת
  doc.setFontSize(20);
  doc.text("קבלה עבור קורס", 105, 20, { align: 'center' });
  
  // הוספת תאריך
  const today = new Date();
  doc.setFontSize(10);
  doc.text(`תאריך: ${today.toLocaleDateString('he-IL')}`, 195, 30, { align: 'right' });
  
  // הוספת מספר קבלה
  const receiptNumber = Math.floor(Math.random() * 10000);
  doc.text(`מספר קבלה: ${receiptNumber}`, 195, 35, { align: 'right' });
  
  // פרטי הקורס
  doc.setFontSize(12);
  doc.text("פרטי הקורס:", 195, 50, { align: 'right' });
  
  // טבלת פרטי קורס
  const courseDetails = [
    ["מזהה קורס", courseData.idOfCourse?.toString() || ""],
    ["שם הקורס", courseData.nameOfCourse || ""],
    ["תיאור", courseData.descriptionOfCourse || ""],
    ["מחיר", `₪${courseData.priceOfCourse?.toString() || "0"}`]
  ];
  
  doc.autoTable({
    startY: 55,
    head: [["פרט", "ערך"]],
    body: courseDetails,
    theme: 'grid',
    headStyles: { fillColor: [41, 128, 185], textColor: 255 },
    styles: { 
      halign: 'right', 
      font: 'helvetica',
      fontSize: 10
    },
    margin: { right: 15 }
  });
  
  // אם יש פרטי סטודנט, הוסף אותם
  if (studentData) {
    const yPos = doc.lastAutoTable.finalY + 10;
    doc.text("פרטי הסטודנט:", 195, yPos, { align: 'right' });
    
    const studentDetails = [
      ["מזהה סטודנט", studentData.id?.toString() || ""],
      ["שם", `${studentData.firstName || ""} ${studentData.lastName || ""}`],
      ["אימייל", studentData.email || ""],
      ["טלפון", studentData.phone || ""]
    ];
    
    doc.autoTable({
      startY: yPos + 5,
      head: [["פרט", "ערך"]],
      body: studentDetails,
      theme: 'grid',
      headStyles: { fillColor: [41, 128, 185], textColor: 255 },
      styles: { 
        halign: 'right', 
        font: 'helvetica',
        fontSize: 10
      },
      margin: { right: 15 }
    });
  }
  
  // הוספת סיכום תשלום
  const yPos = doc.lastAutoTable.finalY + 20;
  doc.setFontSize(14);
  doc.text(`סה"כ לתשלום: ₪${courseData.priceOfCourse?.toString() || "0"}`, 195, yPos, { align: 'right' });
  
  // הוספת הערה
  doc.setFontSize(10);
  doc.text("* קבלה זו הופקה אוטומטית ואינה מהווה אישור רשמי ללא חותמת וחתימה.", 105, yPos + 20, { align: 'center' });
  
  // שמירת הקובץ
  const fileName = `קבלה_${courseData.nameOfCourse || "קורס"}_${today.toLocaleDateString('he-IL').replace(/\//g, '-')}.pdf`;
  doc.save(fileName);
};

// פונקציה ליצירת קבלה ב-Excel
const generateExcel = (courseData, studentData = null) => {
  // יצירת גיליון עבודה חדש
  const wb = XLSX.utils.book_new();
  
  // הכנת נתונים לגיליון
  const receiptData = [
    ["קבלה עבור קורס", ""],
    ["תאריך", new Date().toLocaleDateString('he-IL')],
    ["מספר קבלה", Math.floor(Math.random() * 10000).toString()],
    ["", ""],
    ["פרטי הקורס", ""],
    ["מזהה קורס", courseData.idOfCourse?.toString() || ""],
    ["שם הקורס", courseData.nameOfCourse || ""],
    ["תיאור", courseData.descriptionOfCourse || ""],
    ["מחיר", `₪${courseData.priceOfCourse?.toString() || "0"}`],
  ];
  
  // אם יש פרטי סטודנט, הוסף אותם
  if (studentData) {
    receiptData.push(["", ""]);
    receiptData.push(["פרטי הסטודנט", ""]);
    receiptData.push(["מזהה סטודנט", studentData.id?.toString() || ""]);
    receiptData.push(["שם", `${studentData.firstName || ""} ${studentData.lastName || ""}`]);
    receiptData.push(["אימייל", studentData.email || ""]);
    receiptData.push(["טלפון", studentData.phone || ""]);
  }
  
  // הוספת סיכום
  receiptData.push(["", ""]);
  receiptData.push(["סה\"כ לתשלום", `₪${courseData.priceOfCourse?.toString() || "0"}`]);
  receiptData.push(["", ""]);
  receiptData.push(["* קבלה זו הופקה אוטומטית ואינה מהווה אישור רשמי ללא חותמת וחתימה.", ""]);
  
  // יצירת גיליון עבודה
  const ws = XLSX.utils.aoa_to_sheet(receiptData);
  
  // התאמת רוחב עמודות
  const colWidths = [{ wch: 30 }, { wch: 40 }];
  ws['!cols'] = colWidths;
  
  // הוספת הגיליון לקובץ
  XLSX.utils.book_append_sheet(wb, ws, "קבלה");
  
  // שמירת הקובץ
  const fileName = `קבלה_${courseData.nameOfCourse || "קורס"}_${new Date().toLocaleDateString('he-IL').replace(/\//g, '-')}.xlsx`;
  const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
  const data = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  saveAs(data, fileName);
};

// קומפוננטת React להצגת כפתורי הדפסה
const ReceiptGenerator = ({ courseData, studentData = null }) => {
  return (
    <ButtonGroup variant="outlined" sx={{ mt: 2, mb: 2 }}>
      <Tooltip title="הדפס קבלה כ-PDF">
        <Button 
          startIcon={<PictureAsPdfIcon />}
          onClick={() => generatePDF(courseData, studentData)}
          color="primary"
        >
          PDF קבלה
        </Button>
      </Tooltip>
      <Tooltip title="הדפס קבלה כ-Excel">
        <Button 
          startIcon={<TableViewIcon />}
          onClick={() => generateExcel(courseData, studentData)}
          color="success"
        >
          Excel קבלה
        </Button>
      </Tooltip>
    </ButtonGroup>
  );
};

export default ReceiptGenerator;