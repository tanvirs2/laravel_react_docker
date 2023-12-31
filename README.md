Laravel React Docker  (News Aggregator)
=======================================
***

![image](https://github.com/tanvirs2/laravel_react_docker/assets/11763906/4d89fafb-0ad5-4638-9ddc-141a47a1f7da)

## Developer document - Installation guide

<br/>

+ ### First part

Write the following command on the command line:

&rarr; `git clone https://github.com/tanvirs2/laravel_react_docker.git`

<br/>


Once the cloning process is complete, you will have a folder named **"laravel_react_docker"**  
containing two projects: **"laravel-app"** and **"react-app"**.  
Additionally, there will be a file named **"docker-compose.yml"**.

Afterwards, navigate to the root folder **"laravel_react_docker"** in the terminal  
and execute the following command:

&rarr; `docker-compose build --no-cache --force-rm`

Please allow some time for the dependencies to be downloaded and the images to be built.  
Wait until all dependencies are installed.

Once the build is finished, execute the following command:

**Docker up** 

&rarr; `docker-compose up -d`

## laravel-app container:

Please type the following commands in Docker to grant access to run **"Artisan commands"** within the Laravel Docker container:

**Make the *laravel-app* container ready for commands** &rarr; `docker exec -it laravel-app /bin/bash`

**Laravel dependency** 

&rarr; `composer update`

Now, the terminal is ready for the Artisan command.

**Fetch data** 

&rarr; `php artisan app:fresh-install`



This command will migrate and seed the database, create a user, and fetch data from three APIs: **The Guardian**, **New York Times**, and **NewsAPI.org**. The fetched articles and news will be populated in the database.


**Laravel run** 

&rarr; `php artisan serve --host 0.0.0.0`


**If you want to exit the server from the *laravel-app* container** 

&rarr; `exit`

<br/>

## ReactJS App Container:

> Open a new terminal.

To prepare the *reactjs-app* container for commands, run the following command: 

&rarr; `docker exec -it reactjs-app /bin/bash`.

Install React dependencies by running: 

&rarr; `npm install`.

To run React, use the command: 

&rarr; `npm run dev`.

If you want to exit the server from the *reactjs-app* container, type: 

&rarr; `exit`.

After installing the **laravel-app** (Backend), access it at **"localhost:8000"**.
For the **react-app** (Frontend), access it at **"localhost:3000"**.

I hope everything goes smoothly without any issues. However, if you encounter any errors,
navigate to the individual project folder and execute the necessary commands to build them separately.

If the errors persist, try running each Docker container separately. For example:

### Run the command: 

&rarr; `docker build -t <my-container-name> .`

The Docker setup is now complete, and I hope you won't encounter any problems.

<br/>

### Now, let's move on to the second part...

>**Note:** The "artisan command" is a built-in command for Laravel.


<br/>  






### Scheduled task:

Next, we need to create another command for the *Scheduled task*, commonly known as a **CRON job**.
> Open a new terminal

**Once again, prepare the *laravel-app* container for the command** 

&rarr; `docker exec -it laravel-app /bin/bash`

&rarr; `php artisan schedule:work`

This command will execute a **CRON job** that retrieves data from the mentioned APIs every day at midnight.



<br/><br/><br/>

## Comments on APIs

The News organizations mentioned in the task list are as follows:

 - 1. **The Guardian** - (Free account lacks article image, Web link provided instead of description) <br/>
 - 2. **New York Times** - (Excellent source with comprehensive news coverage) <br/>
 - 3. **NewsAPI.org** - (No specified category) <br/>

Not Tested: <br/>
 - 4. **NewsAPI** (Similar to the other one mentioned in the task list) <br/>

Tested and Blacklisted (They no longer have developer support) <br/>
 - 5. **OpenNews** <br/>
 - 6. **NewsCred** - (No longer exists) <br/>
 - 7. **BBC News**

<br/>

***

<br/><br/><br/>

>>>>>>Frontend

## User Document



### [Online Demo](https://innoscripta.tanvirpro.com/)

### *`ID: a@b.com`*
### *`Password: 123456`*

<br/>

>**Or copy URL - https://innoscripta.tanvirpro.com/**

![page-0](https://github.com/tanvirs2/laravel_react_docker/assets/11763906/32a6b3a6-6c9c-4480-b855-5dbb4cf8c2c6)
![page-1](https://github.com/tanvirs2/laravel_react_docker/assets/11763906/7e3664b3-f8a6-4cc6-a598-4db19e1ea25d)
![page-2](https://github.com/tanvirs2/laravel_react_docker/assets/11763906/892ba386-9dfe-4997-afb6-fac7598643fe)
![page-3](https://github.com/tanvirs2/laravel_react_docker/assets/11763906/7157fda9-4ad4-4dc4-9fd5-543adca467ab)
![page-4](https://github.com/tanvirs2/laravel_react_docker/assets/11763906/c52dbcae-7c1a-4683-894b-74aab08a2ead)
![page-5](https://github.com/tanvirs2/laravel_react_docker/assets/11763906/d6c6c1c8-ad43-4301-a476-786cf069a1c7)
![page-6](https://github.com/tanvirs2/laravel_react_docker/assets/11763906/5f79ae8c-73f1-4e40-8fac-b9aa9de1bc95)
![page-7](https://github.com/tanvirs2/laravel_react_docker/assets/11763906/a5f8ad03-879e-471e-a110-01e5757218c5)
![page-8](https://github.com/tanvirs2/laravel_react_docker/assets/11763906/c9941f11-ac3e-4d7d-ae89-051d3967b398)
![page-9](https://github.com/tanvirs2/laravel_react_docker/assets/11763906/7c1d476a-575f-44ce-a837-9bb29533ff04)
![page-10](https://github.com/tanvirs2/laravel_react_docker/assets/11763906/ca44e2e7-50e8-4822-b78b-ad570bac43cc)
![page-11](https://github.com/tanvirs2/laravel_react_docker/assets/11763906/e87b0c68-36a0-47b6-905d-397d6205342d)

