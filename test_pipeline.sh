#!/bin/bash
set -e  # Exit immediately if a command exits with a non-zero status.
set -x  # Debug mode, which prints each command before executing it.

# Create a Python virtual environment
python -m venv venv

# Activate the virtual environment
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run Pycodestyle to check Python coding style
py_chk="$(pycodestyle --max-line-length=120 */*/*.py)"
echo "$py_chk"

# Check if pycodestyle output is not empty (which means style errors were found)
if [ -n "$py_chk" ]; then  
  exit 1;
fi

# Deactivate the virtual environment
deactivate
