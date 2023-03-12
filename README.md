# ticket-management-system
 A web and mobile app-based ticket management system of the department of tourism and DTPC. 
 The proposed Unified Ticket Management System, is a centralized web and mobile app system that allows the department and its internal stakeholders to generate, manage and track the tickets for various events, activities, and attractions. This includes tasks such as issuing tickets to customers (for multiple activities), tracking tickets and their sales, and managing their availability. The system will also support a parking assistance system in selected destinations as well. The solution can help in improving the efficiency and effectiveness of the department and ensure that tourists (domestic/international) have a positive experience at the destination.


## Getting Started

Assuming you've got nodejs installed [ if not click here ](https://nodejs.org/en/download/current/) ,
First clone this repository, install the dependencies, and setup your .env file.

```
git clone https://github.com/aswinr19/ticket-management-system.git
cd ticket-management-system
npm install
cp .env.example .env
```

Then create a new clsuter in  mongodb atlas , add connection string to .env file

### To run the project 

```
npm start
```