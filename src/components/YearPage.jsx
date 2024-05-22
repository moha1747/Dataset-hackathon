import { Grid, Paper, Typography } from "@mui/material";
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import PropTypes from "prop-types";
import { Bar } from "react-chartjs-2";
import { useParams } from "react-router-dom";
import colorMap from "./Colors";


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const YearPage = ({ data }) => {
  const { year } = useParams();

  const yearData = data[year];
  if (!yearData)
    return <Typography variant="h6">No data available for {year}</Typography>;

  const companies = Object.keys(yearData);
  // parses data to select only male and female data
  const genderData = {
    labels: ["Female", "Male"],
    datasets: companies.map((company) => ({
      label: company,
      data: [yearData[company]["Female %"], yearData[company]["Male %"]],
      backgroundColor: colorMap[company],
    })),
  };
  // parses data to select racial demographics data

  const raceData = companies.reduce(
    (acc, company) => {
      const races = [
        "% White",
        "% Asian",
        "% Latino",
        "% Black",
        "% Multi",
        "% Other",
        "% Undeclared",
      ];
      races.forEach((race) => {
        // iterate over each race category
        acc.labels.add(race);
        // initialize dataset for the company if not already done
        if (!acc.datasets[company]) {
          acc.datasets[company] = {
            label: company,
            data: [],
            backgroundColor: colorMap[company],
          };
        }
        acc.datasets[company].data.push(yearData[company][race]); // add race data for the company
      });
      return acc;
    },
    { labels: new Set(), datasets: {} }
  );

  raceData.labels = Array.from(raceData.labels); // convert the set of labels to an array

  raceData.datasets = Object.values(raceData.datasets); // convert the datasets object to an array of values

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Year: {year}
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={10} md={6} lg={8} xl={8}>
          <Paper elevation={3} style={{ padding: "20px" }}>
            <Typography variant="h6">Gender Distribution</Typography>
            <Bar data={genderData} />
          </Paper>
        </Grid>
        <Grid item xs={10} md={6} lg={8} xl={8}>
          <Paper elevation={3} style={{ padding: "20px" }}>
            <Typography variant="h6">Race Distribution</Typography>
            <Bar data={raceData} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

YearPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default YearPage;
