import { userService } from "../user/user.service";

export default class Settings {
    constructor() {
    this.render();
    this.addEventListeners();
    this.changeUsername(userService.user.username)
    }
    render() {
        let appElement = document.getElementById("app");

        appElement.insertAdjacentElement(
            "beforeend",
            `<h1 class='text-center'>Settings</h1>
                <div class="container">
                    <form>
                        <div class="mb-3">
                            <label class="form-label id="user-label">username: </label>
                            <input type="text" class="form-control" id="user-input">
                            </div>
                        <div class="text-center">
                            <button type="submit" class="btn btn-primary" id="settings-btn">Submit</button>
                        </div>
                    </form>
                </div>
            `
        );
    }
    addEventListeners(){
        //declare variables
        let settingBtnElem = document.getElementById('setting-btn');

        settingsBtnElem.addEventListeners('click', (event)=>{
            event.preventDefault();
            let newUsername = document.getElementById('user-input').value 
            this.changeUsername(newUsername)
        })
    }
    

    changeUsername(){
        let userLabelElem = document.getElementById('user-label');

        userLabelElem.innerText = `username: ${username}`
    }
}
