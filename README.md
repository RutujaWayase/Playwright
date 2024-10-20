# Playwright
Playwright

# Installation
npm init playwright@latest

# Folder Structure
plawright.config: Configuration file; package.json: Project management file of node js projects

![alt text](image.png)

version of playwright installed:  npm playwright -v

Installation:
1) Nodejs
2) VS Code
3) Create project file ---> open in VSCode
4) install playwright using terminal

npm init playwright@latest
package.json ---> node project management file
playwright.config.js ---> playwright configuration
tests ---> we can all teh playwright tests

npm playwright -v ---> return installed version of playwright

5) install playwright using vscode extension

![alt text](image-1.png)

6) Command to run test: npx playwright test

7) By default playwright will execute all the tests in hedles mode: so we will not see any browser launching/UI

8) To run in headed mode: npx playwright test --headed

9) Run Playwright test:
npx playwright test
npx playwright test --headed

npx playwright show-report ---> Will open/Show automatically created reports

![alt text](image-2.png)
