import axios from "axios";
import Papa from "papaparse";

async function getListProject() {
  const SHEETS_LINK =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTzodSCTT_Cu14ctwuSZYnxGymZVlV0GNn2QBelkm1Zz1ka43y6PIaHGMRRuSKj28bXtx4exjHeWjt-/pub?output=csv";

  try {
    const response = await axios.get(SHEETS_LINK);
    const parsedCsvData = Papa.parse(response.data, {
      header: true,
      skipEmptyLines: true,
    }).data;

    // Sort based on ProjectYear
    parsedCsvData.sort((a, b) => {
      if (a.ProjectYear < b.ProjectYear) {
        return 1;
      }
      if (a.ProjectYear > b.ProjectYear) {
        return -1;
      }
      return 0;
    });

    return parsedCsvData;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export { getListProject };
