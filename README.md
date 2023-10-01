![image](https://github.com/tanvirs2/laravel_react_docker/assets/11763906/4d89fafb-0ad5-4638-9ddc-141a47a1f7da)
 
## Developer document - Installation guide

```sh
ssss
```
 
<br/>
 
+ ### First part
 
Write the following command on the command line:
 
### → `git clone https://github.com/tanvirs2/laravel_react_docker.git`
 
<br/>
 
 
Once the cloning process is complete, you will have a folder named **"laravel_react_docker"** 
containing two projects: **"laravel-app"** and **"react-app"**. 
Additionally, there will be a file named **"docker-compose.yml"**.
 
Afterwards, navigate to the root folder **"laravel_react_docker"** in the terminal 
and execute the following command:
 
### → `docker-compose build --no-cache --force-rm`
 
Please allow some time for the dependencies to be downloaded and the images to be built. 
Wait until all dependencies are installed.
 
Once the build is finished, execute the following command:
 
**Docker up** → `docker-compose up -d`
 
## laravel-app container:
 
Please type the following commands in Docker to grant access to run **"Artisan commands"** within the Laravel Docker container:
 
**Make the *laravel-app* container ready for commands** → `docker exec -it laravel-app /bin/bash`
 
**Laravel dependency** → `composer update`
 
Now, the terminal is ready for the Artisan command.
 
**Fetch data** → `php artisan app:fresh-install`
 
### → `php artisan app:fresh-install`
 
This command will migrate and seed the database, create a user, and fetch data from three APIs: **The Guardian**, **New York Times**, and **NewsAPI.org**. The fetched articles and news will be populated in the database.
 
 
**Laravel run** → `php artisan serve --host 0.0.0.0`
 
 
**If you want to exit the server from the *laravel-app* container** → `exit`
 
<br/>
 
## ReactJS App Container:
 
> Open a new terminal.
 
To prepare the *reactjs-app* container for commands, run the following command: `docker exec -it reactjs-app /bin/bash`.
