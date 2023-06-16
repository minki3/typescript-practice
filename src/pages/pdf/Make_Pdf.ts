import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const PdfExport = (id: string) => {
  const style = document.createElement("style");
  document.head.appendChild(style);
  style.sheet?.insertRule(
    "body > div:last-child img { display: inline-block; }"
  ); // 이미지화를 하기전에 인라인블럭을 주지 않으면 레이어가 깨짐..

  html2canvas(document.querySelector(`#${id}`)!, {
    scale: 2, // 해상도
  })
    .then((canvas) => {
      style.remove(); // 스타일 삭제
      const imageFile = canvas.toDataURL("image/png"); // html 이미지화
      const doc = new jsPDF("p", "mm", "a4"); // pdf 준비
      const pageWidth = doc.internal.pageSize.getWidth(); // pdf 가로 사이즈
      const pageHeight = doc.internal.pageSize.getHeight(); // pdf 세로 사이즈
      const widthRatio = pageWidth / canvas.width; //페이지와 pdf의 가로길이가 다르므로 이미지 길이를 기준으로 비율을 구함
      const customHeight = canvas.height * widthRatio; //비율에 따른 페이지 높이
      doc.addImage(imageFile, "png", 0, 0, pageWidth, customHeight); //pdf에 1장에 대한 페이지 추가
      let heightLeft = customHeight; //감소하면서 남은 길이 변수
      let heightAdd = -pageHeight; //증가하면서 페이지 자를 위치 변수
      console.log(customHeight);
      console.log(pageHeight);
      // 한 페이지 이상일 경우
      while (heightLeft >= pageHeight) {
        doc.addPage(); //pdf페이지 추가
        doc.addImage(imageFile, "png", 0, heightAdd, pageWidth, customHeight); //남은 페이지를 추가
        heightLeft -= pageHeight; //남은길이
        heightAdd -= pageHeight; //남은높이
      }
      doc.save(`${new Date().getTime()}.pdf`); // 파일 저장
    })
    .catch((error) => {
      console.error("PDF export error:", error);
    });
};
