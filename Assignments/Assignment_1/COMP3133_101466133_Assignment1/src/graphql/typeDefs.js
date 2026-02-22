const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar Date

  type User {
    _id: ID!
    username: String!
    email: String!
    created_at: Date
    updated_at: Date
  }

  type Employee {
    _id: ID!
    first_name: String!
    last_name: String!
    email: String!
    gender: String!
    designation: String!
    salary: Float!
    date_of_joining: Date!
    department: String!
    employee_photo: String
    created_at: Date
    updated_at: Date
  }

  type AuthPayload {
    success: Boolean!
    message: String!
    token: String
    user: User
  }

  type EmployeePayload {
    success: Boolean!
    message: String!
    employee: Employee
  }

  type EmployeesPayload {
    success: Boolean!
    message: String!
    employees: [Employee!]!
  }

  input SignupInput {
    username: String!
    email: String!
    password: String!
  }

  input LoginInput {
    usernameOrEmail: String!
    password: String!
  }

  input EmployeeInput {
    first_name: String!
    last_name: String!
    email: String!
    gender: String!
    designation: String!
    salary: Float!
    date_of_joining: Date!
    department: String!
    employee_photo: String
  }

  input EmployeeUpdateInput {
    first_name: String
    last_name: String
    email: String
    gender: String
    designation: String
    salary: Float
    date_of_joining: Date
    department: String
    employee_photo: String
  }

  type Query {
    login(input: LoginInput!): AuthPayload!          # 2
    getAllEmployees: EmployeesPayload!              # 3
    searchEmployeeByEid(eid: ID!): EmployeePayload! # 5
    searchEmployeesByDesignationOrDepartment(designation: String, department: String): EmployeesPayload! # 8
  }

  type Mutation {
    signup(input: SignupInput!): AuthPayload!                       # 1
    addEmployee(input: EmployeeInput!): EmployeePayload!            # 4
    updateEmployeeByEid(eid: ID!, input: EmployeeUpdateInput!): EmployeePayload! # 6
    deleteEmployeeByEid(eid: ID!): EmployeePayload!                 # 7
  }
`;

module.exports = { typeDefs };