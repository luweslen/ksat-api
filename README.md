<h2 align="center">
  <b>KSAT API</b>
</h2>

<p align="center">
  <a href="#-project">Project</a>&nbsp;|&nbsp;
  <a href="#-routes">Routes and business rules</a>&nbsp;|&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;|&nbsp;
  <a href="#-how-to-use">How to use</a>
</p>

<br />

<a id="-project"></a>

## 💻 **Project**

KSAT is an API for task management

The API must contain the following functionality:

- Creating a task
- List of all tasks
- Update a task by `id`
- Remove a task by `id`
- Mark a task as complete by `id`
- Importing tasks in bulk via a CSV file

<a id="-routes"></a>

## 🚗 **Routes and business rules**

Before the routes, let's understand what structure (properties) a task should have:

- `id` - Unique identifier of each task
- `title` - Task title
- `description` - Detailed description of the task
- `completed_at` - Date when the task was completed. The initial value must be `null`
- `created_at` - Date when the task was created.
- `updated_at` - Must always be changed to the date when the task was updated.

**Routes:**
- `POST - /tasks`
    
  It should be possible to create a task in the database, sending the fields `title` and `description` through the `body` of the request.
  
  When creating a task, the fields: `id`, `created_at`, `updated_at` and `completed_at` must be filled in automatically, according to the orientation of the properties above.
    
- `GET - /tasks`
    
  It should be possible to list all tasks saved in the database.
  
  It should also be possible to perform a search, filtering tasks by `title` and `description`
    
- `PUT - /tasks/:id`
    
  It should be possible to update a task by `id`.
  
  In the `body` of the request, it should only receive the `title` and/or `description` to be updated.
  
  If only the `title` is sent, it means that the `description` cannot be updated and vice versa.
  
  Before carrying out the update, validation must be carried out if the `id` belongs to a task saved in the database.
    
- `DELETE - /tasks/:id`
    
  It should be possible to remove a task by `id`.
  
  Before carrying out the removal, a validation must be done if the `id` belongs to a task saved in the database.
    
- `PATCH - /tasks/:id/complete`

  It must be possible to mark the task as complete or not. This means that if the task is completed, it should return to its “normal” state.

  Before the alteration, a validation must be done if the `id` belongs to a task saved in the database.

<!-- <img alt="Preview" title="Preview" src=".github/assets/preview.png" /> -->

<a id="-technologies"></a>

## 🛠️ **Technologies**

This project was developed with the following technologies:

- NodeJS
- JavaScript

<a id="-how-to-use"></a>

## ⚙️ **How To Run**

Follow the steps below to run this project

- Clone o repository with `git clone https://github.com/luweslen/ksat-api`
- Go to directory backend with `cd ksat-api`
- Run the following command to get the correct version of NodeJS that the project uses:
  ```bash
  $ nvm use
  ```

  - If you don't have these `version of NodeJS` installed, run the following command:
    ```bash
    $ nvm install v18.13.0
    ```
- Run the following command to install the required dependencies:
  ```bash
  $ npm i
  ```

- To start the project, run the following command:
  ```bash
  $ npm run dev
  ```

<a id="-how-to-contribute"></a>

## 🤔 **How to contribute**

- Make a fork
- Create a branch with your feature: `git checkout -b my-feature`
- Commit changes: `git commit -m 'feat: My new feature'`;
- Make a push to your branch: `git push origin my-feature`
- Finally create a new pull request

<a id="-license"></a>

## 📝 **License**

This project is under the MIT license. See the [LICENSE](https://github.com/luweslen/ksat-api/LICENSE) for details.

## 👨‍💻 **Made by**

<table>
  <tr>
    <td align="center"><img style="border-radius: 50%; border: 4px solid #FA8334" src="https://avatars3.githubusercontent.com/u/36344130?s=460&u=8f38afb60832d4576570ab1672894ac935e65db6&v=4" width="100px;" alt=""/><br /><sub><b><a href="https://linkedin.com/in/luweslen" title="Luciano Weslen">Luciano Weslen</a></b></sub><br/>Software Developer</td>
  </tr>
</table>

## 🤔 **Do not forget**

Enjoy every moment, they are unique and go by fast!
