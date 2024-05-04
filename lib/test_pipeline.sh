#!/bin/bash

# Create a Python virtual environment
python -m venv venv

# Activate the virtual environment
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run Pycodestyle to check Python coding style
py_chk="$(pycodestyle --max-line-length=120 */*/*.py)"
# Check if pycodestyle output is not empty (which means style errors were found)
py_chk=\"$(pycodestyle --max-line-length=120 */*/*.py)\"
echo $py_chk
if [ ${#py_chk} != 0 ]; 
then  
exit 1;
fi

# Deactivate the virtual environment
deactivate
