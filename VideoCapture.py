import cv2
import os
import time


labels = ['ache', 'cough', 'head', 'snot', 'neck', 'chest', 'stomac', 'digest', 'sweat', 'strange', 'swell', 'cold', 'dizzy', 'itchy']
number_imgs = 13
sleepTime = 3
from datetime import datetime
for label in labels:
    path = 'signimages/'+label
    os.makedirs(path, exist_ok=True)
    cap = cv2.VideoCapture(0)
    print('Collecting images for {}'.format(label))
    time.sleep(5)
    for imgnum in range(number_imgs):
        for t in range(sleepTime):
            print("["+str(label)+"-"+str(imgnum)+"] 카운트 다운 - " + str(sleepTime - t) +"초" );
            time.sleep(1);

        print("\ncapture\n")
        time.sleep(0.5)
        ret, frame = cap.read()
        cv2.imwrite(path+"/"+label+"{:%Y%m%d%H%M%S}".format(datetime.now())+'.jpg', frame)
        cv2.imshow('frame',frame)

        
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break
    print("\n\n") 
    cap.release