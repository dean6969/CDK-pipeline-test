py_chk=\"$(pycodestyle --max-line-length=120 */*/*.py)\"
echo $py_chk
if [ ${#py_chk} != 0 ]; 
then  
exit 1;
fi