#!/bin/bash
set -e  # Exit on error
set -x  # Print each command before executing

# Create a Python virtual environment
python -m venv venv

# Activate the virtual environment
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run Pycodestyle to check Python coding style
py_chk="$(pycodestyle --max-line-length=120 --ignore=E127,E226,E302,W503,W504 */*/*.py)"
echo "$py_chk"

# Check if there are any style errors
if [ -n "$py_chk" ]; then  
  echo "Style errors detected"
  exit 1
fi

# Deactivate the virtual environment
deactivate
