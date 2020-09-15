**Aplication to commando with nodeJs**

## First Step
 ```
 npm install
 ```

## For help 

 ```
 node --help
 ```

## Comands
 > `app create` = To create a task to do 
 > `app update` = Updates the completed status of a task
 > `app delete` = To delete a task to do
 > `app list` = To list the tasks
  

 ## For create a task put a description
 > --description or -d "string"

 ```
 node create -d "New Task"
 ```

 ## For update task's state
  > -d or --description `"string"`
  >  -c or --completed  `true or false` (for default is true)

 ```
 node update -d "name to Task" -c 
 node update -d "name to Task" -c false
 ```

  ## For delete a task select for description
   > --description or -d "string"
   ```
 node delete -d "New Task"
 ```
