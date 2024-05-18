import pandas as pd
import json

# Read the dataset
data = pd.read_csv('./assets/Diversity-in-tech-companies.csv')

# Sort the data by company and year
sortedData = data.sort_values(by=['Company', 'Year'])

# Replace '-' with 0 in the cleaned data
sortedData = sortedData.replace('-', '0')

# Initialize an empty dictionary to hold the organized data
data_dict = {}

# Populate the data dictionary
for _, row in sortedData.iterrows():
    year = row['Year']
    company = row['Company']
    
    # Ensure the year exists in the dictionary
    if year not in data_dict:
        data_dict[year] = {}
    
    # Ensure the company exists under the year in the dictionary
    if company not in data_dict[year]:
        data_dict[year][company] = {}
    
    # Populate the company data for the specific year
    for column in sortedData.columns:
        if column != 'Year' and column != 'Company':
            data_dict[year][company][column] = row[column]

# Convert the dictionary to JSON and save it to a file
with open('organized_data.json', 'w') as json_file:
    json.dump(data_dict, json_file, indent=4)

print("Data has been organized and saved to organized_data.json")
