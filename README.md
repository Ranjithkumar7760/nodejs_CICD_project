


# Node.js Application on AWS Elastic Beanstalk

This repository contains a Node.js web application that is automatically deployed to AWS Elastic Beanstalk using GitHub Actions. This setup demonstrates a basic CI/CD pipeline that includes running unit tests and deploying an application when changes are pushed to the main branch.

## Prerequisites

To run and deploy this application, you will need:
- Node.js installed locally.
- An AWS account with access to Elastic Beanstalk.
- A GitHub account.

## Local Setup

1. **Clone the Repository**

   To get started, clone this repository to your local machine:
   ```bash
   git clone https://github.com/Ranjithkumar7760/nodejs_CICD_project.git
   cd nodejs_CICD_project


2.  Install DependenciesInstall the Node.js dependencies defined in package.json:
     
      `npm install`

3. Run the ApplicationStart the application locally using:
 
     `npm start`


 ***** The application will run on http://localhost:3000. Navigate to this URL in a web browser to view the application.



4. Run the unit tests to ensure the application is working correctly:

       `npm test`

    * This will execute tests specified in the test directory using Mocha and Chai




**-------------------------------CI/CD Pipeline----------------------------**


The CI/CD pipeline is managed with GitHub Actions and is defined in the .github/workflows/node.js.yml file. Here's an overview of what each step in the pipeline does:



  **Checkout Code:** Pulls the latest code from the GitHub repository for the workflow run.

  **Set up Node.js:** This step uses the GitHub Actions setup-node action to install Node.js on the runner.

  **Install Dependencies:** Installs all required npm packages.

  **Run Tests:** Executes the unit tests. The deployment will only proceed if all tests pass.

  **Deploy to AWS Elastic Beanstalk:** If the tests pass, the application is packaged and deployed to AWS Elastic Beanstalk. 




- The workflow is triggered on every push to the main branch. This ensures that updates to the codebase are automatically tested and deployed. 




**Adding AWS Credentials to GitHub**

To deploy the application, AWS credentials need to be securely stored in GitHub Secrets:

- Go to your GitHub repository.
- Navigate to Settings > Secrets.
- Click New repository secret and add the following secrets:

      - AWS_ACCESS_KEY_ID: Your AWS access key ID.

      - AWS_SECRET_ACCESS_KEY: Your AWS secret access key.
 

Storing AWS credentials in GitHub Secrets securely manages sensitive data, preventing unauthorized access while enabling automated CI/CD pipelines.

Now the overall CICD pipeline is completed 



**--------A report explaining the CI/CD process, tool choices, and how the setup can be scaled for larger applications  -----------**




**1. Overview of CI/CD**
Continuous Integration and Continuous Deployment (CI/CD) are practices in software development designed to improve software delivery speed, quality, and predictability. CI involves regularly merging code changes into a central repository, followed by automated builds and tests. CD takes the validated features from integration in CI to automatically deploy them into production environments.

**2. CI/CD Pipeline Description**

Our pipeline automates the process of testing and deploying a Node.js application to AWS Elastic Beanstalk whenever changes are pushed to the master branch of our GitHub repository.

**Steps in the pipeline include:**

    - Code Push: Developers push code to the master branch.
    - Automated Testing: GitHub Actions triggers a workflow where the application undergoes automated tests to ensure functionality and stability.
    - Build: Upon successful testing, the application is built.
    - Deployment: The built application is deployed to AWS Elastic Beanstalk, automatically managing the deployment, provisioning, load balancing, and auto-scaling.

**3. Tool Choices**

    - Node.js: Chosen for its efficiency and scalability in building network applications. It's supported widely, including on AWS platforms.

    - GitHub Actions: Used for CI/CD due to its seamless integration with GitHub repositories. It supports complex workflows and automates testing and deployment with minimal setup.

    - AWS Elastic Beanstalk: Selected for deployment because it simplifies the management of applications, automatically handling the details of capacity provisioning, load balancing, scaling, and monitoring.

    - Mocha and Chai: These are used for writing and running tests because of their flexibility and support for asynchronous testing, crucial for Node.js applications.

**4. Scalability Strategies**

    - Auto-Scaling: AWS Elastic Beanstalk supports auto-scaling, which automatically adjusts application capacity according to predefined conditions and load, ensuring optimal performance and minimizing costs.

    - Load Balancing: Elastic Beanstalk provides load balancing to distribute traffic evenly across instances, improving responsiveness and availability.


**Conclusion:**

The implemented CI/CD pipeline using GitHub Actions and AWS Elastic Beanstalk provides a robust foundation for automated testing and deployment. By utilizing these tools, the setup not only meets the current needs but also offers scalability options to accommodate growth. The choice of tools ensures that the application remains scalable, maintainable, and responsive to the evolving requirements of larger applications.



--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


You can find all the required files for this projecct in my git hub repository

**Github repositort:** https://github.com/Ranjithkumar7760/nodejs_CICD_project.git

**Github profile:** https://github.com/Ranjithkumar7760



## Contact Information

For any inquiries, support, or contributions, please contact me using the following information:

- **Name**: Ranjith kumar

- **Email**: ranjith11012024@gmail.com

- **LinkedIn**: https://www.linkedin.com/in/ranjith-kumar-0411-tech/

- **GitHub**: https://github.com/Ranjithkumar7760










