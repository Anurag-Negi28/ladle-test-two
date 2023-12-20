import pandas as pd
import numpy as np
from sklearn.ensemble import IsolationForest
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import classification_report, accuracy_score

# Load the labeled dataset with arrival anomalies
df = pd.read_csv('ladle_dataset_with_arrival_anomalies_labeled.csv')

# Features (X) and label (y)
X = df.drop(['Label', 'Arrival_Time', 'Departure_Time'], axis=1)
y = df['Label']

# Convert 'Label' to binary values (0 for normal, 1 for anomaly)
y_binary = (y == 'anomaly').astype(int)

# Handle non-numeric columns and perform one-hot encoding
X_numeric = pd.get_dummies(X)

# Check for and handle missing values
X_numeric = X_numeric.dropna()

# Scale numeric values
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X_numeric)

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X_scaled, y_binary, test_size=0.2, random_state=42)

# Create and train the Isolation Forest model
model = IsolationForest(contamination=0.05, random_state=42)  # Adjust contamination based on your anomaly rate
model.fit(X_train)

# Set a custom threshold for anomaly detection
custom_threshold = -0.5  # Adjust the threshold as needed
y_pred = (model.decision_function(X_test) < custom_threshold).astype(int)

# Evaluate the model
accuracy = accuracy_score(y_test, y_pred)
print(f'Accuracy: {accuracy:.2f}')

print('\nClassification Report:')
print(classification_report(y_test, y_pred))

import pickle
pickle.dump(model, open('model.pkl', 'wb'))