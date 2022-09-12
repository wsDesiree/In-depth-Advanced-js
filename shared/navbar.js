import Home from "../pages/home.js";
import Settings from "../pages/settings.js";
import { userService } from "../user/user.service.js";
export default class Navbar{  
    constructor(){
        this.render();
        this.addEventListeners();
        this.changeUsername(userService.user.username);
        userService.userObsv.subscribe((data)=>{
            console.log("this is the data ->>")
        })
    }
    
    render(){
        let appElem = document.getElementById('app')

        appElem.insertAdjacentHTML(
            'beforeend',
        `   <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li   li class="nav-item" id='home' style ='cursor:pointer'>
                    <a class="nav-link active" aria-current="page" >Home</a>
                </li>
                <li class="nav-item" id='settings' style ='cursor:pointer'>
                    <a class="nav-link" >Settings</a>
                </li>li class="nav-item" id='settings' style ='cursor:pointer'>
                    <a class="nav-link" >Settings</a>
                </li>
                <li class="nav-item" id='settings' style ='cursor:pointer'>
                    <div id='user'></div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </li>
            </ul>
            <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    </div>
    </nav>`
    );
    }

    addEventListeners() {
        // declare variables/access elements
        let homeElem = document.getElementById('home');
        let settingElem = document.getElementById('settings')
        let appElem = document.getElementById('app');
        //  attach event listeners
        homeElem.addEventListener('click', ()=>{
            // clear the app element
            appElem.innerHTML = '';
            // Reinitialize the navbar and home
            new Navbar();
            new Home();
        })
        
        settingsElem.addEventListener('click', ()=>{
            // clear the app element
            appElem.innerHTML = '';
            // Reinitialize the navbar and home
            new Navbar();
            new Settings();        
        });
    }

    changeUsername(username){
        let userElem = document.getElementById('user');
        userElem.innerText = `Welcome, ${username}`
    }
}