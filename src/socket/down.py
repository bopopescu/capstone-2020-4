#-*- coding:utf-8 -*-

import os
import sys

str = (sys.argv[1]).split('.')[0]
print(str)

os.system("aws s3 cp s3://uploadtest-s3/" + sys.argv[1] + " ./")
os.system("mkdir " + str)
os.system("mkdir ../static " + str)
os.system("mkdir ../static/blood_result")
os.system("aws s3 cp s3://youhi-project/" + str + " ./" + str+ "  --recursive")
os.system("python3.6 segemtation.py --dir " + sys.argv[1])