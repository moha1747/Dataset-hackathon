import { Container, Typography } from "@mui/material";
import {
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const CompanyChart = ({ companyName, data }) => {
  if (!data || data.length === 0) {
    return <p>No data available</p>; // Provide feedback if data is missing
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `${companyName} Diversity Data`,
      },
    },
  };

  const chartData = {
    labels: data.map((item) => item.Year),
    datasets: [
      {
        label: "Female",
        data: data.map((item) => item.Female),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Male",
        data: data.map((item) => item.Male),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "White",
        data: data.map((item) => item.White),
        backgroundColor: "rgba(255, 205, 86, 0.5)",
      },
      {
        label: "Asian",
        data: data.map((item) => item.Asian),
        backgroundColor: "rgba(75, 192, 192, 0.5)",
      },
      {
        label: "Latino",
        data: data.map((item) => item.Latino),
        backgroundColor: "rgba(255, 159, 64, 0.5)",
      },
      {
        label: "Black",
        data: data.map((item) => item.Black),
        backgroundColor: "rgba(153, 102, 255, 0.5)",
      },
      {
        label: "Multi",
        data: data.map((item) => item.Multi),
        backgroundColor: "rgba(201, 203, 207, 0.5)",
      },
      {
        label: "Other",
        data: data.map((item) => item.Other),
        backgroundColor: "rgba(54, 162, 235, 0.5)",
      },
      {
        label: "Undeclared",
        data: data.map((item) => item.Undeclared),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        {companyName} Diversity Data
      </Typography>
      <Bar options={options} data={chartData} />
    </Container>
  );
};

CompanyChart.propTypes = {
  companyName: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      Year: PropTypes.string.isRequired, // Adjust the type as needed
      Female: PropTypes.number.isRequired,
      Male: PropTypes.number.isRequired,
      White: PropTypes.number,
      Asian: PropTypes.number,
      Latino: PropTypes.number,
      Black: PropTypes.number,
      Multi: PropTypes.number,
      Other: PropTypes.number,
      Undeclared: PropTypes.number,
    })
  ).isRequired,
};

export default CompanyChart;
