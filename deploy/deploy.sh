#This script will copy the last artifact build by the job "MyApp" to test.myserver.com
#and remotely execute the deployment script.

#copy the build directory to the server
scp -i ~/.ssh/id_dsa -r ./www/ ec2-user@172.32.112.3:/tmp

#connect to the server and execute the deployment script
ssh -i ~/.ssh/id_dsa ec2-user@172.32.112.3

#first copy the current war to a backup directory (additionaly, I have a cron task deleting old undeployed apps)
cp -rf app ~/undeployed/apps/;  

#delete current app
rm -rf app/nginx/www

#copy the uploaded www
cp -r /tmp/www app/nginx/www  

#restart webserver
docker restart production_nginx_1
