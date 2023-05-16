import self from "../img/self.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Jacob",
    lastName: "Hoang",
    initials: "JH", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Software Engineer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '🖥️',
            text: 'fueled by curiosity and passion'
        },
        {
            emoji: '🌎',
            text: 'based in the VietNam'
        },
        {
            emoji: "💼",
            text: "Software Engineer at Saigon Technology Solution"
        },
        {
            emoji: "📧",
            text: "jacob.hoangvan@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://facebook.com/nga.v.hoang",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://instagram.com",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/ngahoangvan",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com/in/ngahoangvan",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },

        // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
        // Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Jacob (my full Vietnamese name is Hoàng Văn Ngà).I am a Software Engineer with over five years of experience in Software Development and Back-End Web Server. My major programming language is Python. I have strong knowledge in using some Python web frameworks like Django, Flask,... I also have good skills in requirement analysis and technical solution proposals.",
    skills:
    {
        proficientWith: ['Python', 'Django - DRF', 'Flask', 'Javascript', 'NodeJS', 'ReactJS', 'Docker', 'CI/CD'],
        knowledgeIn: ['AWS/Azure/GCP', 'Airflow', 'PostgreSQL', "Mongo", "Firebase", "DynamoDB"]
    }
    ,
    hobbies: [
        {
            label: 'researching',
            emoji: '🔍'
        },
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'sport',
            emoji: '⚽'
        }
        // Same as above, change the emojis to match / relate to your hobbies or interests.
        // You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    experiences: [
        {
            "company": "Saigon Technology Solution",
            "position": "Software Engineer",
            "start": "Nov 2022",
            "end": "",
            "localtion": "Viet Nam",
            "responsibility": [
                "Built Face Recognize System by Python - Django",
                "Develop the Airflow DAGs for processing data from other services and releasing the report",
                "Maintain, deploy the system, fix issues.",
            ]
        },
        {
            "company": "Datatize Inc",
            "position": "Software Engineer",
            "start": "May 2021",
            "end": "Oct 2022",
            "localtion": "Singapore",
            "responsibility": [
                "Worked with Python - Dash(Flask) and Javascript - ReactJS framework to build the Data Visualization Systems.",
                "Worked with Airflow tools, config schedule tasks.",
                "Built company website with ReactJS.",
                "Setup project as microservice with Docker and docker-compose.",
                "Setup CI/CD pipelines for all projects.",
                "Built monitoring, logging server to track other server.",
                "Worked with Cloud Provider like AWS, GCP and Azure.",
            ]
        },
        {
            "company": "D-soft JSC",
            "position": "Web Developer",
            "start": "Apr 2019",
            "end": "Apr 2021",
            "localtion": "Viet Nam",
            "responsibility": [
                "Developed web application tool to manage the IoT Device, Business System (Orders, Inventory, Warehouse).",
                "Developed web application tool to Debuging for AI system, Dashboard for Face Recognize System.",
                "Implemented API microservice in Django, Flask.",
                "R&D about Microsoft Azure.",
                "Built automated CI/CD pipelines on Gitlab CI, Github Action for containerized application using Docker, Azure Container Registry and deployed onto Azure Kubernetes Service.",
            ]
        },
        {
            "company": "GMO-Z VietnamLab Center",
            "position": "Internship",
            "start": "Jan 2019",
            "end": "Mar 2019",
            "localtion": "Japan",
            "responsibility": [
                "Developed web application Japanse Examination System like tryjlpt.com.",
                "Built automated using Ansible-Docker."
            ]
        },
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        // {
        //     title: "Project 1",
        //     live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
        //     source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
        //     image: mock1
        // },
        // {
        //     title: "Project 2",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock2
        // },
        // {
        //     title: "Project 3",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock3
        // },
        // {
        //     title: "Project 4",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock4
        // },
        // {
        //     title: "Project 5",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock5
        // }
    ]
}