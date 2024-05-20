import pandas as pd
import json

data = pd.read_csv('./assets/Diversity-in-tech-companies.csv') # read the dataset

sortedData = data.sort_values(by=['Company', 'Year'])
sortedData = sortedData.replace('-', '0')

data_dict = {}
for _, row in sortedData.iterrows(): # populate the data dictionary
    year = row['Year']
    company = row['Company']
    
    if year not in data_dict:   
        data_dict[year] = {}
    

    if company not in data_dict[year]: # company exists under the year in the dictionary
        data_dict[year][company] = {}
    
    # populate the company data for the specific year
    for column in sortedData.columns:
        if column != 'Year' and column != 'Company':
            data_dict[year][company][column] = row[column]

# convert the dictionary to JSON and save it to a file
with open('organized_data.json', 'w') as json_file:
    json.dump(data_dict, json_file, indent=4)

print("Data has been organized and saved to organized_data.json")
