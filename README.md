Author: Musab Hamid
Class : CIS 4339
Title: Starting Five
README
----------------------------------------------------------

How to Run
----------------------------------------------------------
1. Type 'npm install' into the terminal
2. Type 'npm start' into terminal

Troubleshooting
----------------------------------------------------------
If there is a runtime error try the following
1. For windows in the package.json file change the "export NODE_ENV=development" to "set NODE_ENV=development"
2. If you get the error that there is already an instance on the server (EADDRINUSE) follow the following steps
    1. run the 'sudo lsof -i :3000' command first to see which instances are running
    2. kill -9 {PID} with the 'PID' bieng whatever is running.

3. If you are getting anymore errors make sure the 'node_modules' folder is deleted as well as the 'dist' folder.
4. For any further assistance please refer to the technical document under the 'public folder'

