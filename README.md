News Aggregator Fullstack Developer Task
==============

Writing a News Aggregator Client using React.

### Background


### Tech-stack
#### (Development Environment)
* [React JS](https://react.dev/) - an open-source JavaScript framework used for building interactive user interfaces and web applications quickly
* [Docker](https://www.docker.com/) - a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.
    * [Nginx](https://www.nginx.com/) - a web server used to serve the application

### Running Locally
* The project has been containerized with the following services included:-

  | Service    | Port |
  |------------|------|
  | APP (HTTP) | 8080 |
  | Nginx      | 80   |

* Follow these steps for the initial setup
    1. Clone the repository
        ````bash
            git clone git@github.com:dennismwagiru/react-news-app.git && cd react-news-app
        ````
    2. Build and start server
        ```bash
           docker compose up -d --build
        ```
    3. Navigate to http://127.0.0.1