
// import Papa from "papaparse";

// export const loadCSV = (url) => {
//   return fetch(url)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       return response.text();
//     })
//     .then((text) => {
//       return new Promise((resolve, reject) => {
//         Papa.parse(text, {
//           header: true,
//             complete: (results) => {
//               console.log("Parsed Data:", results.data); // This will show you the structure of the parsed data
//               resolve(results.data);
//             },
//           error: (error) => {
//             reject(error);
//           },
//         });
//       });
//     });
// };
