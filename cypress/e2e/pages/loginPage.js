export class LoginPage {
  // locators
  username_textbox = "#username"
  password_textbox = "#password"
  login_button = "#submit"

  // actions
  enterUsername(username) {
    cy.get(username_textbox).type(username)
  }

  enterpassword(password) {
    cy.get(password_textbox).type(password)
  }

  clickLogin() {
    cy.get(login_button).click()
  }

  login() {}
}
