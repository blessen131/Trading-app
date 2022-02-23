import React, { useContext } from "react";
import TradingContext from "../context/TradingContext";
import { FaPrint } from "react-icons/fa";
import jsPDF from "jspdf";
import "jspdf-autotable";
function TradingStatus() {
  const { tradingData } = useContext(TradingContext);

  const initialValue = 0;
  const sumWithInitial = tradingData.reduce(
    (previousValue, currentValue) =>
      Number(previousValue) + Number(currentValue.estimatedValue),
    initialValue
  );
  const exportPDF = () => {
    const reportDate = new Date().getDate();
    const reportYear = new Date().getFullYear();
    const unit = "pt";
    const size = "A4";
    const orientation = "portrait";

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = "Player Report";
    const headers = [["Name", "Team Name", "Player No", "Estimated Value"]];

    const data = tradingData.map((item) => [
      item.firstName + " " + item.lastName,
      item.teamName,
      item.playerNo,
      item.estimatedValue,
    ]);

    let content = {
      startY: 50,
      head: headers,
      body: data,
    };
    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save("report_" + reportDate + "_" + reportYear + ".pdf");
  };

  return (
    <div>
      <div className="trading-stats">
        <h4>Total : {sumWithInitial ?? 0}</h4>

        <button className="btn btn-primary" onClick={() => exportPDF()}>
          <FaPrint />
          <h4> Report</h4>
        </button>
      </div>
    </div>
  );
}

export default TradingStatus;
