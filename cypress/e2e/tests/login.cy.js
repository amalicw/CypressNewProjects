import { LoginPage } from "../pages/loginPage"
import { CoursesPage } from "../pages/courses"

const loginPage = new LoginPage()
const coursesPage = new CoursesPage()

beforeEach(() => {
  cy.visit("https://practicetestautomation.com/practice-test-login/")
})

it("login", function () {
  loginPage.enterUsername("student")
  loginPage.enterpassword("Password123")
  loginPage.clickLogin()
})

it("CoursesPage", function () {
  coursesPage.clickHome()
})
